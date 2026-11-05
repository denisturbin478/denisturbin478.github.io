import { queryFaq } from './faq-search-model.js';

const instances = new WeakMap();
const ease = 'cubic-bezier(.22,.68,0,1)';

export function initInfiniteFaq(root, { doc = root?.ownerDocument, win = doc?.defaultView } = {}) {
  if (!root || !doc || !win) return null;
  if (instances.has(root)) return instances.get(root);
  const get = name => root.querySelector(`[data-faq-${name}]`);
  const form = get('search'), input = get('input'), submit = get('submit'), response = get('response');
  const title = get('response-title'), copy = get('response-copy'), label = get('response-label');
  const suggestions = get('suggestions'), contact = get('contact'), status = get('status');
  let items;
  try { items = JSON.parse(get('data').textContent); } catch { return null; }
  if (![form, input, submit, response, title, copy, label, suggestions, contact, status].every(Boolean) ||
      !Array.isArray(items) || !items.length || items.some(item => !item ||
        ['id', 'question', 'answer'].some(key => typeof item[key] !== 'string' || !item[key].trim()) ||
        !Array.isArray(item.aliases) || item.aliases.some(alias => typeof alias !== 'string')) ||
      new Set(items.map(item => item.id)).size !== items.length) return null;
  const reduced = win.matchMedia?.('(prefers-reduced-motion: reduce)');
  let destroyed = false, pointerSubmit = false, responseMotion = null, responseVersion = 0, pendingReply = null;
  const states = [...root.querySelectorAll('[data-faq-item]')].map(details => ({
    details, summary: details.querySelector('summary'), content: details.querySelector('.infinite-faq-answer'),
    name: details.getAttribute('name'), target: details.open, version: 0, motion: null, fade: null,
  }));
  if (!states.length || states.some(state => !state.summary || !state.content)) return null;
  const settle = state => {
    state.version += 1;
    state.motion?.cancel(); state.fade?.cancel(); state.motion = null; state.fade = null;
    state.details.open = state.target;
    state.details.style.height = ''; state.details.style.overflow = '';
    state.content.style.opacity = ''; state.content.inert = !state.target;
    state.details.dataset.expanded = String(state.target);
    state.summary.setAttribute('aria-expanded', String(state.target));
  };
  const changeItem = (state, next, animate) => {
    const height = state.details.getBoundingClientRect().height;
    const opacity = state.details.open ? Number.parseFloat(win.getComputedStyle?.(state.content)?.opacity ?? '1') : 0;
    const shouldAnimate = animate && !reduced?.matches && state.details.animate && state.content.animate && height > 0;
    if (shouldAnimate) state.details.removeAttribute('data-faq-instant');
    else state.details.setAttribute('data-faq-instant', '');
    state.version += 1;
    const version = state.version;
    // Capture the visible height before cancelling so reversal never jumps.
    state.details.style.height = `${height}px`;
    state.motion?.cancel(); state.fade?.cancel(); state.motion = null; state.fade = null;
    state.target = next;
    state.details.dataset.expanded = String(next);
    state.summary.setAttribute('aria-expanded', String(next));
    state.content.inert = !next;
    if (!shouldAnimate) { settle(state); return; }
    state.details.open = true;
    state.details.style.overflow = 'hidden';
    const closed = state.summary.getBoundingClientRect().height + 1;
    const target = closed + (next ? state.content.scrollHeight : 0);
    const duration = next ? 250 : 210;
    state.motion = state.details.animate([{ height: `${height}px` }, { height: `${target}px` }], { duration, easing: ease, fill: 'both' });
    state.fade = state.content.animate([{ opacity: Number.isFinite(opacity) ? opacity : 0 }, { opacity: next ? 1 : 0 }], { duration: next ? 200 : 150, easing: ease, fill: 'both' });
    state.motion.finished.then(() => { if (!destroyed && state.version === version) settle(state); }).catch(() => {});
    state.fade.finished.catch(() => {});
  };
  for (const state of states) {
    // Native name grouping is restored on teardown; JS needs to animate the old row closed.
    state.details.removeAttribute('name');
    settle(state);
    state.click = event => {
      if (event.button !== undefined && event.button !== 0) return;
      event.preventDefault();
      const next = !state.target, animate = event.detail > 0;
      if (next) for (const other of states) if (other !== state && other.target) changeItem(other, false, animate);
      changeItem(state, next, animate);
    };
    state.summary.addEventListener('click', state.click);
  }
  const cancelResponse = () => {
    responseVersion += 1;
    responseMotion?.cancel(); responseMotion = null;
    response.style.opacity = '';
  };
  const clearResponse = () => {
    cancelResponse(); pendingReply = null;
    response.hidden = true; title.textContent = ''; copy.textContent = '';
    suggestions.replaceChildren(); suggestions.hidden = true; contact.hidden = true; status.textContent = '';
  };
  const renderReply = reply => {
    const focusedSuggestion = suggestions.contains(doc.activeElement);
    if (focusedSuggestion) input.focus({ preventScroll: true });
    suggestions.replaceChildren(); suggestions.hidden = true; contact.hidden = true;
    response.hidden = false;
    if (reply.status === 'matched') {
      label.textContent = 'From the FAQs'; title.textContent = reply.item.question; copy.textContent = reply.item.answer;
      status.textContent = `Answer: ${reply.item.question}. ${reply.item.answer}`;
    } else if (reply.status === 'suggestions') {
      label.textContent = 'Related questions'; title.textContent = 'Which answer do you need?'; copy.textContent = '';
      suggestions.hidden = false;
      for (const item of reply.items) {
        const button = doc.createElement('button'); button.type = 'button'; button.textContent = item.question;
        button.setAttribute('data-faq-suggestion', item.id); suggestions.append(button);
      }
      status.textContent = `${reply.items.length} related questions. Choose one below.`;
    } else {
      label.textContent = 'Let’s talk'; title.textContent = 'Ask Denis directly.';
      copy.textContent = 'Share your question with your project details, and we’ll take it from there.';
      contact.hidden = false; status.textContent = 'No matching FAQ answer. You can ask Denis directly.';
    }
    pendingReply = null;
  };
  const showReply = (reply, animate) => {
    const wasVisible = !response.hidden;
    const opacity = Number.parseFloat(win.getComputedStyle?.(response)?.opacity || '1');
    cancelResponse(); pendingReply = reply;
    const version = responseVersion;
    const enter = () => {
      if (destroyed || version !== responseVersion) return;
      responseMotion?.cancel(); responseMotion = null;
      renderReply(reply);
      if (animate && !reduced?.matches && response.animate) {
        responseMotion = response.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180, easing: ease, fill: 'both' });
        responseMotion.finished.then(() => {
          if (!destroyed && version === responseVersion) { responseMotion?.cancel(); responseMotion = null; }
        }).catch(() => {});
      }
    };
    if (wasVisible && animate && !reduced?.matches && response.animate) {
      responseMotion = response.animate([{ opacity: Number.isFinite(opacity) ? opacity : 1 }, { opacity: 0 }], { duration: 100, easing: ease, fill: 'both' });
      responseMotion.finished.then(enter).catch(() => {});
    } else enter();
  };
  const onInput = () => { pointerSubmit = false; submit.disabled = !input.value.trim(); clearResponse(); };
  const onSubmitClick = event => { pointerSubmit = event.detail > 0; };
  const onInputKey = () => { pointerSubmit = false; };
  const localizedItems = () => {
    const translate = source => win.portfolioLocalization?.translate?.(source) || source;
    return items.map(item => ({ ...item,
      question: translate(item.question), answer: translate(item.answer),
      aliases: [...new Set([item.question, ...item.aliases, ...item.aliases.map(translate)])],
    }));
  };
  const onSubmit = event => {
    event.preventDefault();
    if (destroyed) return;
    const reply = queryFaq(input.value, localizedItems());
    if (reply.status === 'empty') { clearResponse(); submit.disabled = true; input.focus({ preventScroll: true }); return; }
    showReply(reply, pointerSubmit); pointerSubmit = false;
  };
  const onSuggestion = event => {
    const button = event.target?.closest?.('button[data-faq-suggestion]');
    if (!button || !suggestions.contains(button)) return;
    const item = localizedItems().find(item => item.id === button.getAttribute('data-faq-suggestion'));
    if (item) showReply({ status: 'matched', item }, event.detail > 0);
  };
  const onReset = () => { input.value = ''; submit.disabled = true; clearResponse(); };
  const settleAll = () => states.forEach(settle);
  const settleResponse = () => {
    const reply = pendingReply;
    cancelResponse();
    if (reply) renderReply(reply);
  };
  const onMotionChange = () => { if (reduced.matches) { settleAll(); settleResponse(); } };
  const onPageHide = () => { settleAll(); settleResponse(); };
  const onLanguageChange = () => {
    settleAll();
    if (!response.hidden && input.value.trim()) showReply(queryFaq(input.value, localizedItems()), false);
  };
  form.addEventListener('submit', onSubmit); form.addEventListener('reset', onReset);
  input.addEventListener('input', onInput); input.addEventListener('keydown', onInputKey);
  submit.addEventListener('click', onSubmitClick); suggestions.addEventListener('click', onSuggestion);
  win.addEventListener('resize', settleAll); win.addEventListener('pagehide', onPageHide);
  doc.addEventListener('portfolio:languagechange', onLanguageChange);
  reduced?.addEventListener?.('change', onMotionChange);
  doc.fonts?.ready.then(() => { if (!destroyed) settleAll(); });
  submit.disabled = !input.value.trim(); form.hidden = false; root.setAttribute('data-faq-enhanced', '');
  const api = { destroy() {
    if (destroyed) return;
    settleAll(); clearResponse(); destroyed = true;
    form.hidden = true; root.removeAttribute('data-faq-enhanced');
    for (const state of states) {
      state.summary.removeEventListener('click', state.click); state.summary.removeAttribute('aria-expanded');
      state.details.removeAttribute('data-expanded'); state.details.removeAttribute('data-faq-instant'); state.content.inert = false;
      if (state.name !== null) state.details.setAttribute('name', state.name);
    }
    form.removeEventListener('submit', onSubmit); form.removeEventListener('reset', onReset);
    input.removeEventListener('input', onInput); input.removeEventListener('keydown', onInputKey);
    submit.removeEventListener('click', onSubmitClick); suggestions.removeEventListener('click', onSuggestion);
    win.removeEventListener('resize', settleAll); win.removeEventListener('pagehide', onPageHide);
    doc.removeEventListener('portfolio:languagechange', onLanguageChange);
    reduced?.removeEventListener?.('change', onMotionChange);
    instances.delete(root);
  } };
  instances.set(root, api);
  return api;
}

if (typeof document !== 'undefined') document.querySelectorAll('[data-infinite-faq]').forEach(root => initInfiniteFaq(root));
