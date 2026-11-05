import {
  PREFERENCE_KEY, availableLocales, normalizePreference, resolveLocale,
  localeDirection, readDictionary, translateString, reverseDictionary, canonicalString,
} from './localization-model.js';

const instances = new WeakMap();
const textAttributes = ['aria-label', 'title', 'placeholder', 'alt', 'data-alt', 'data-media-title'];
const skippedTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'SVG', 'MATH', 'CANVAS', 'CODE', 'PRE', 'TITLE']);
const metaNames = new Set(['description', 'og:title', 'og:description', 'twitter:title', 'twitter:description']);
const failureText = 'Translation unavailable. Showing English.';

/** Translation never owns form values, editable content, filenames, URLs or media assets. */
export function isTranslationSkipped(element) {
  for (let node = element; node?.nodeType === 1; node = node.parentElement) {
    if (skippedTags.has(node.tagName.toUpperCase()) || node.getAttribute('translate')?.toLowerCase() === 'no' ||
        node.hasAttribute('data-localization-skip') || node.id === 'brief-preview' ||
        node.classList?.contains('brief-file-name') || node.hasAttribute('data-brief-file-remove') ||
        (node.hasAttribute('contenteditable') && node.getAttribute('contenteditable')?.toLowerCase() !== 'false')) return true;
  }
  return false;
}

export function initLocalization(root = document, options = {}) {
  if (instances.has(root)) return instances.get(root);
  const doc = root.ownerDocument || root, win = doc.defaultView;
  const config = options.config || win?.PORTFOLIO_LOCALIZATION || {};
  const browserOnly = config.browserLanguageOnly === true;
  const available = availableLocales(config.availableLocales);
  const protectedTerms = Array.isArray(config.protectedTerms) ? config.protectedTerms.filter(term => typeof term === 'string') : [];
  const fetcher = options.fetch || win?.fetch?.bind(win);
  const languages = () => win?.navigator?.languages?.length ? [...win.navigator.languages] : [win?.navigator?.language || 'en'];
  const cache = new Map(), originals = new WeakMap(), attributeOriginals = new WeakMap();
  const controls = browserOnly ? [] : [...root.querySelectorAll('[data-localization-select]')];
  const statuses = [...root.querySelectorAll('[data-localization-status]')];
  let preference = 'auto', locale = 'en', dictionary = null, reverse = new Map();
  let alive = true, epoch = 0, request = null, observer = null, queued = false, titleState = null, chromePending = false;
  let ready = Promise.resolve('en');
  if (!browserOnly) try { preference = normalizePreference(win.localStorage.getItem(PREFERENCE_KEY)); } catch { /* Storage is optional. */ }

  function remember(current, state) {
    if (!state || current !== state.rendered) {
      // Any known English key is stronger evidence than a coincidental reverse match.
      const sourceDictionary = [...cache.values()].find(strings => Object.prototype.hasOwnProperty.call(strings, current.trim())) || dictionary;
      const source = canonicalString(current, sourceDictionary, reverse);
      return { source, rendered: current };
    }
    return state;
  }

  function renderText(node) {
    if (isTranslationSkipped(node.parentElement) || node.parentElement?.tagName === 'TEXTAREA') return;
    if (node.parentElement?.closest('[data-evil-button="chrome"]')) chromePending = true;
    const current = node.nodeValue;
    const state = remember(current, originals.get(node));
    originals.set(node, state);
    const translated = translateString(state.source, dictionary, protectedTerms);
    state.rendered = translated;
    if (current !== translated) {
      node.nodeValue = translated;
    }
  }

  function renderAttribute(element, name) {
    if (!element.hasAttribute(name) || isTranslationSkipped(element)) return;
    let states = attributeOriginals.get(element);
    if (!states) { states = new Map(); attributeOriginals.set(element, states); }
    const current = element.getAttribute(name);
    const state = remember(current, states.get(name));
    states.set(name, state);
    const translated = translateString(state.source, dictionary, protectedTerms);
    state.rendered = translated;
    if (current !== translated) element.setAttribute(name, translated);
  }

  function renderNode(node) {
    if (node.nodeType === 3) { renderText(node); return; }
    if (node.nodeType !== 1 && node.nodeType !== 9 && node.nodeType !== 11) return;
    if (node.nodeType === 1) {
      if (isTranslationSkipped(node)) return;
      for (const name of textAttributes) renderAttribute(node, name);
      if (node.tagName.toUpperCase() === 'META' && metaNames.has((node.getAttribute('name') || node.getAttribute('property') || '').toLowerCase())) renderAttribute(node, 'content');
      if (node.tagName.toUpperCase() === 'TEXTAREA') return;
    }
    for (const child of [...node.childNodes]) renderNode(child);
  }

  function renderTitle() {
    titleState = remember(doc.title, titleState);
    const translated = translateString(titleState.source, dictionary, protectedTerms);
    titleState.rendered = translated;
    if (doc.title !== translated) doc.title = translated;
  }

  function renderAll() {
    if (!alive) return;
    renderNode(root);
    renderTitle();
  }

  function renderControls(failed = false) {
    for (const select of controls) {
      for (const option of [...select.options]) {
        if (option.value !== 'auto') option.disabled = !available.has(option.value);
      }
      select.value = preference;
    }
    for (const status of statuses) status.textContent = failed ? failureText : '';
  }

  function apply(code, strings, failed = false) {
    if (!alive) return;
    locale = code;
    dictionary = strings;
    doc.documentElement.setAttribute('lang', locale);
    doc.documentElement.setAttribute('dir', localeDirection(locale));
    renderAll();
    renderControls(failed);
    fitChromeLabels();
    // Existing layout observers can measure longer translated labels normally.
    if (typeof win?.CustomEvent === 'function') doc.dispatchEvent(new win.CustomEvent('portfolio:languagechange', { detail: { locale, preference, failed } }));
  }

  async function selectPreference(value, persist = false) {
    preference = browserOnly ? 'auto' : normalizePreference(value);
    if (persist && !browserOnly) try { win.localStorage.setItem(PREFERENCE_KEY, preference); } catch { /* Page functionality is independent of storage. */ }
    const generation = ++epoch;
    request?.abort();
    request = null;
    const target = resolveLocale(preference, languages(), available);
    const unavailable = preference !== 'auto' && !available.has(preference);
    renderControls(unavailable);
    if (target === 'en') { apply('en', null, unavailable); return locale; }
    if (cache.has(target)) { apply(target, cache.get(target)); return locale; }
    // Remain legible in canonical English until the requested static file is ready.
    apply('en', null);
    const Abort = options.AbortController || win?.AbortController;
    request = typeof Abort === 'function' ? new Abort() : null;
    const pendingRequest = request;
    try {
      if (typeof fetcher !== 'function') throw new Error('Static dictionary loading is unavailable.');
      const url = new URL(`./assets/locales/${target}.json`, options.assetBase || import.meta.url);
      if (typeof config.sourceDigest === 'string' && config.sourceDigest) url.searchParams.set('v', config.sourceDigest);
      const response = await fetcher(url.href, { credentials: 'same-origin', ...(pendingRequest ? { signal: pendingRequest.signal } : {}) });
      if (!response?.ok) throw new Error('Static dictionary could not be loaded.');
      const strings = readDictionary(await response.json(), target, config.sourceDigest || '');
      if (!alive || generation !== epoch) return locale;
      cache.set(target, strings);
      reverse = reverseDictionary(cache.values());
      apply(target, strings);
    } catch {
      if (alive && generation === epoch) apply('en', null, true);
    } finally {
      if (request === pendingRequest) request = null;
    }
    return locale;
  }

  function schedule(records) {
    if (!alive) return;
    // Retain exact changed nodes. Frequent video timers don't rescan the whole page.
    for (const record of records) {
      if (record.type === 'characterData') pendingNodes.add(record.target);
      else if (record.type === 'attributes') pendingNodes.add(record.target);
      else for (const node of record.addedNodes) pendingNodes.add(node);
      if (record.target === doc.querySelector('title') || record.target.parentElement?.tagName === 'TITLE') titlePending = true;
    }
    if (queued) return;
    queued = true;
    const queue = options.queueMicrotask || win?.queueMicrotask?.bind(win) || (run => Promise.resolve().then(run));
    queue(() => {
      queued = false;
      if (!alive) return;
      const nodes = [...pendingNodes]; pendingNodes.clear();
      for (const node of nodes) if (node.isConnected !== false) renderNode(node);
      if (titlePending) { titlePending = false; renderTitle(); }
      if (chromePending) fitChromeLabels();
    });
  }
  const pendingNodes = new Set();
  let titlePending = false;
  function fitChromeLabels() {
    chromePending = false;
    const style = doc.documentElement.style;
    style.removeProperty('--locale-chrome-label-size');
    if (locale === 'en') return;
    // One common size per locale fits every mounted state in the existing 154×36 face.
    const labels = [...root.querySelectorAll('[data-evil-button="chrome"] .evil-chrome-label, [data-evil-button="chrome"] [data-evil-label], [data-evil-button="chrome"] [data-evil-sizer]')];
    if (!labels.length) return;
    for (let size = 12.5; size >= 11; size -= .5) {
      style.setProperty('--locale-chrome-label-size', `${size}px`);
      if (labels.every(label => !label.clientWidth || (label.scrollWidth <= label.clientWidth + 1 && label.scrollHeight <= 28))) break;
    }
  }
  const Observer = options.MutationObserver || win?.MutationObserver;
  if (typeof Observer === 'function') {
    observer = new Observer(schedule);
    observer.observe(root.nodeType === 9 ? doc.documentElement : root, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: [...textAttributes, 'content'],
    });
  }

  const onChange = event => { ready = selectPreference(event.currentTarget.value, true); };
  const onStorage = event => {
    if (event.key === PREFERENCE_KEY || event.key === null) ready = selectPreference(event.key === null ? 'auto' : event.newValue);
  };
  const onLanguageChange = () => { if (preference === 'auto') ready = selectPreference('auto'); };
  const onFontsReady = () => { if (alive) fitChromeLabels(); };
  for (const select of controls) select.addEventListener('change', onChange);
  if (!browserOnly) win?.addEventListener('storage', onStorage);
  win?.addEventListener('languagechange', onLanguageChange);
  doc.fonts?.addEventListener?.('loadingdone', onFontsReady);
  doc.fonts?.ready?.then?.(onFontsReady, () => {});
  const controller = {
    get locale() { return locale; },
    get preference() { return preference; },
    get ready() { return ready; },
    get availableLocales() { return [...available]; },
    translate(source) { return translateString(source, dictionary, protectedTerms); },
    setPreference(value, persist = true) { ready = selectPreference(value, persist); return ready; },
    refresh: renderAll,
    destroy() {
      if (!alive) return;
      alive = false; epoch++; request?.abort(); observer?.disconnect(); pendingNodes.clear();
      for (const select of controls) select.removeEventListener('change', onChange);
      win?.removeEventListener('storage', onStorage);
      win?.removeEventListener('languagechange', onLanguageChange);
      doc.fonts?.removeEventListener?.('loadingdone', onFontsReady);
      if (win?.portfolioLocalization === controller) delete win.portfolioLocalization;
      instances.delete(root);
    },
  };
  instances.set(root, controller);
  if (root.nodeType === 9 && win) win.portfolioLocalization = controller;
  ready = selectPreference(preference);
  return controller;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initLocalization(document), { once: true });
  else initLocalization(document);
}
