import { REGIONAL_CONFIG } from './regional-welcome-config.js';
import { inferRegion, resolveOffer, dismissKey } from './regional-welcome-model.js';

const instances = new WeakMap();

/** One automatic non-modal panel per document. Only campaign display is stored. */
export function initRegionalWelcome(root, { config = REGIONAL_CONFIG, doc = root?.ownerDocument, win = doc?.defaultView } = {}) {
  if (!root || !doc || !win || config?.enabled !== true) return null;
  if (instances.has(root)) return instances.get(root);
  const get = name => root.querySelector(`[data-regional-${name}]`);
  const title = get('title'), copy = get('copy'), eyebrow = get('eyebrow');
  const close = get('close'), action = get('action');
  const actionLabel = get('action-label');
  const announcement = doc.querySelector('[data-regional-announcement]');
  if (![title, copy, eyebrow, close, action, actionLabel].every(Boolean)) return null;
  const countries = config.countries && typeof config.countries === 'object' && !Array.isArray(config.countries) ? config.countries : {};
  const known = code => Object.hasOwn(countries, code) && /^[A-Z]{2}$/.test(code) && typeof countries[code]?.name === 'string' && countries[code].name.trim().length > 0;
  const supportedCountries = Object.fromEntries(Object.entries(countries).filter(([code]) => known(code)));
  const scope = root.dataset.scope || '/';
  const seenKey = `${dismissKey(config)}:${scope}`;
  const stores = [];
  for (const key of ['localStorage', 'sessionStorage']) {
    try { const storage = win[key]; if (storage) stores.push(storage); } catch {}
  }
  const records = key => {
    const found = [];
    for (const storage of stores) {
      try {
        const raw = storage.getItem(key);
        if (raw === null) continue;
        let record;
        try { record = JSON.parse(raw); } catch {}
        if (record && typeof record.value === 'string' && Number.isSafeInteger(record.revision) && record.revision >= 0 && record.revision < Number.MAX_SAFE_INTEGER) found.push(record);
        else found.push({ value: raw, revision: 0 });
      } catch {}
    }
    return found.sort((a, b) => b.revision - a.revision);
  };
  const read = key => records(key)[0]?.value ?? null;
  const write = (key, value) => {
    const previous = records(key)[0]?.revision || 0;
    const revision = previous < Number.MAX_SAFE_INTEGER ? previous + 1 : previous;
    const raw = JSON.stringify({ value, revision });
    let saved = false;
    for (const storage of stores) {
      try {
        storage.setItem(key, raw);
        // A write-only backend cannot suppress the next visit's greeting.
        if (storage.getItem(key) === raw) saved = true;
      } catch {}
    }
    return saved;
  };
  let timeZone = null;
  try { timeZone = win.Intl.DateTimeFormat().resolvedOptions().timeZone; } catch {}
  let region = null, offer = null;
  const refreshRegion = () => {
    region = inferRegion({
      serverCountry: root.dataset.country,
      timeZone,
    }, supportedCountries);
    if (region && !known(region.country)) region = null;
    offer = resolveOffer(region?.country, config);
  };
  const baseContact = action.getAttribute('href');
  const render = () => {
    refreshRegion();
    const name = region ? countries[region.country].name : null;
    title.textContent = offer ? `${offer.percent}% for ${name}.` : name ? `Hello, ${name}.` : 'Hello.';
    eyebrow.hidden = !offer;
    eyebrow.textContent = offer ? 'A regional offer' : '';
    copy.textContent = offer ? `${offer.copy} ${offer.scope}` : 'Let’s talk about your next website or product.';
    // Continue through the existing contact flow; prices are never changed silently.
    action.setAttribute('href', baseContact);
    actionLabel.textContent = offer ? 'Discuss this offer' : 'Discuss your project';
  };
  render();
  const media = win.matchMedia?.('(prefers-reduced-motion: reduce)');
  let disposed = false, opened = false, pendingAuto = false, timer = null;
  let frame = null, value = 0, velocity = 0, target = 0, previousTime = null;
  let returnFocus = null;
  const paint = () => {
    root.style.opacity = String(Math.min(1, Math.max(0, value)));
    root.style.transform = media?.matches ? 'none' : `translateY(${(1 - value) * 12}px)`;
  };
  const finish = () => {
    value = target; velocity = 0; previousTime = null; frame = null;
    paint();
    if (target === 0) { root.hidden = true; root.removeAttribute('data-closing'); }
  };
  const tick = time => {
    if (disposed) return;
    const dt = Math.min(.04, Math.max(0, (time - (previousTime ?? time - 16)) / 1000));
    previousTime = time;
    // Exact critically damped step preserves position AND velocity on reversal.
    const omega = 24, delta = value - target, decay = Math.exp(-omega * dt);
    const carry = velocity + omega * delta;
    value = target + (delta + carry * dt) * decay;
    velocity = (velocity - omega * carry * dt) * decay;
    paint();
    if (Math.abs(value - target) < .001 && Math.abs(velocity) < .015) finish();
    else frame = win.requestAnimationFrame(tick);
  };
  const retarget = next => {
    target = next;
    if (media?.matches || !win.requestAnimationFrame) {
      if (frame !== null) win.cancelAnimationFrame?.(frame);
      finish(); return;
    }
    if (frame === null) { previousTime = null; frame = win.requestAnimationFrame(tick); }
  };
  const cancelTimer = () => { if (timer !== null) win.clearTimeout(timer); timer = null; };
  const show = ({ automatic = false, trigger = null } = {}) => {
    if (disposed) return false;
    if (automatic && (!region || !write(seenKey, 'shown'))) return false;
    if (!automatic) write(seenKey, 'shown');
    cancelTimer(); pendingAuto = false;
    render(); opened = true;
    root.hidden = false; root.inert = false; root.removeAttribute('data-closing');
    const previousFocus = doc.activeElement;
    returnFocus = trigger || (previousFocus && !root.contains(previousFocus) && !['BODY', 'HTML'].includes(previousFocus.tagName) ? previousFocus : null);
    retarget(1);
    if (announcement) announcement.textContent = `${title.textContent} ${copy.textContent}`;
    // An unsolicited greeting must never steal focus from the page.
    if (trigger) close.focus({ preventScroll: true });
    return true;
  };
  const hide = ({ restoreFocus = true } = {}) => {
    if (disposed || (!opened && target === 0)) return;
    opened = false; cancelTimer(); pendingAuto = false;
    const focusedInside = root.contains(doc.activeElement);
    if (restoreFocus && focusedInside) {
      const destination = returnFocus && returnFocus.isConnected !== false && !returnFocus.closest?.('[hidden],[inert]') ? returnFocus : doc.querySelector('.sidebar');
      destination?.focus({ preventScroll: true });
    }
    root.inert = true; root.setAttribute('data-closing', '');
    retarget(0);
    if (announcement) announcement.textContent = '';
  };
  const busy = () => doc.hidden || Boolean(doc.querySelector('dialog[open]')) || Boolean(doc.activeElement?.closest?.('input,textarea,select,[contenteditable]:not([contenteditable="false"])'));
  const attempt = () => {
    timer = null;
    if (!pendingAuto || disposed || opened) return;
    if (read(seenKey) !== null) { pendingAuto = false; return; }
    if (busy()) return; // Resume on focus, visibility or dialog-close events, without polling.
    show({ automatic: true });
  };
  const resume = () => {
    if (pendingAuto && !busy() && timer === null) timer = win.setTimeout(attempt, 300);
  };
  const onClose = () => hide();
  const onKey = event => { if (opened && event.key === 'Escape' && !doc.querySelector('dialog[open]')) { event.preventDefault(); hide(); } };
  const onMotionChange = () => { if (media.matches) { if (frame !== null) win.cancelAnimationFrame?.(frame); finish(); } };
  const onPageHide = () => {
    cancelTimer(); pendingAuto = false; opened = false;
    if (frame !== null) win.cancelAnimationFrame?.(frame);
    target = 0; finish(); root.inert = true;
    if (announcement) announcement.textContent = '';
  };
  close.addEventListener('click', onClose);
  doc.addEventListener('keydown', onKey);
  doc.addEventListener('focusout', resume);
  doc.addEventListener('visibilitychange', resume);
  doc.addEventListener('close', resume, true);
  win.addEventListener('pagehide', onPageHide);
  media?.addEventListener?.('change', onMotionChange);
  const api = { show, hide, destroy() {
    if (disposed) return;
    onPageHide(); disposed = true;
    close.removeEventListener('click', onClose);
    doc.removeEventListener('keydown', onKey);
    doc.removeEventListener('focusout', resume);
    doc.removeEventListener('visibilitychange', resume);
    doc.removeEventListener('close', resume, true);
    win.removeEventListener('pagehide', onPageHide);
    media?.removeEventListener?.('change', onMotionChange);
    instances.delete(root);
  } };
  instances.set(root, api);
  if (['home', 'work'].includes(doc.body.dataset.page) && region && read(seenKey) === null) {
    pendingAuto = true; timer = win.setTimeout(attempt, 1000);
  }
  return api;
}

if (typeof document !== 'undefined') initRegionalWelcome(document.querySelector('[data-regional-welcome]'));
