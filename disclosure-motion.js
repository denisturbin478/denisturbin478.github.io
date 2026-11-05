// Progressive motion for native, independently toggled disclosures.
// Named groups and the searchable FAQ retain their existing motion owners.
const instances = new WeakMap();
const ease = 'cubic-bezier(.22,.68,0,1)';

export function initDisclosureMotion(root, { doc = root?.ownerDocument || root, win = doc?.defaultView } = {}) {
  if (!root?.querySelectorAll || !doc || !win) return null;
  if (instances.has(root)) return instances.get(root);
  const reduced = win.matchMedia?.('(prefers-reduced-motion: reduce)');
  let destroyed = false;
  const states = [...root.querySelectorAll('details')].flatMap(details => {
    if (details.hasAttribute('name') || details.matches('.profile-service,.information-service') || details.closest('[data-infinite-faq]')) return [];
    const children = [...details.children];
    const summary = children.find(node => node.tagName === 'SUMMARY');
    const bodies = children.filter(node => node !== summary && !['SCRIPT', 'STYLE', 'TEMPLATE'].includes(node.tagName));
    if (!summary || bodies.length !== 1 || bodies[0].hidden) return [];
    const body = bodies[0];
    // Compact trust popovers use an out-of-flow body, not a layout reveal.
    if (['absolute', 'fixed'].includes(win.getComputedStyle?.(body)?.position)) return [];
    return [{ details, summary, body, target: details.open, version: 0, motion: null, fade: null,
      height: details.style.height, overflow: details.style.overflow, opacity: body.style.opacity,
      inert: body.inert, aria: summary.getAttribute('aria-expanded'), observer: null }];
  });
  const writeOpen = (state, open) => {
    if (state.details.open === open) return;
    state.details.open = open;
    // A caller setting .open during a reveal must still be able to override it.
    // Drain only our synchronous mutation; external writes arrive at the observer.
    state.observer?.takeRecords();
  };
  const settle = (state, open = state.target) => {
    state.version += 1;
    state.target = open;
    state.motion?.cancel(); state.fade?.cancel(); state.motion = null; state.fade = null;
    writeOpen(state, open);
    state.details.style.height = state.height; state.details.style.overflow = state.overflow;
    state.body.style.opacity = state.opacity; state.body.inert = !open || state.inert;
    state.details.removeAttribute('data-disclosure-active');
    state.details.dataset.expanded = String(open);
    if (state.aria === null) state.summary.removeAttribute('aria-expanded');
    else state.summary.setAttribute('aria-expanded', String(open));
  };
  const viewportHeight = () => win.innerHeight || doc.documentElement?.clientHeight || 0;
  const visible = summary => {
    const rect = summary.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < viewportHeight();
  };
  const closedHeight = state => {
    const box = win.getComputedStyle?.(state.details) || {};
    const heading = win.getComputedStyle?.(state.summary) || {};
    const number = value => Number.parseFloat(value) || 0;
    return state.summary.getBoundingClientRect().height +
      number(box.paddingTop) + number(box.paddingBottom) + number(box.borderTopWidth) + number(box.borderBottomWidth) +
      number(heading.marginTop) + number(heading.marginBottom);
  };
  const change = (state, next) => {
    const height = state.details.getBoundingClientRect().height;
    const opacity = state.details.open ? Number.parseFloat(win.getComputedStyle?.(state.body)?.opacity ?? '1') : 0;
    // Freeze the rendered pose before cancelling either animation.
    state.details.style.height = `${height}px`;
    state.body.style.opacity = String(Number.isFinite(opacity) ? opacity : 0);
    state.version += 1;
    const version = state.version;
    state.motion?.cancel(); state.fade?.cancel(); state.motion = null; state.fade = null;
    state.target = next;
    writeOpen(state, true);
    state.details.style.height = state.height;
    const full = state.details.getBoundingClientRect().height;
    const closed = closedHeight(state);
    state.details.style.height = `${height}px`;
    if (height <= 0 || full - closed > viewportHeight() * 2 || !visible(state.summary)) { settle(state); return; }
    state.details.removeAttribute('data-disclosure-instant');
    state.details.setAttribute('data-disclosure-active', '');
    state.details.dataset.expanded = String(next);
    state.summary.setAttribute('aria-expanded', String(next));
    state.details.style.overflow = 'hidden';
    if (!next && state.body.contains(doc.activeElement)) state.summary.focus({ preventScroll: true });
    state.body.inert = !next || state.inert;
    state.motion = state.details.animate([{ height: `${height}px` }, { height: `${next ? full : closed}px` }],
      { duration: next ? 250 : 210, easing: ease, fill: 'both' });
    state.fade = state.body.animate([{ opacity: Number.isFinite(opacity) ? opacity : 0 }, { opacity: next ? 1 : 0 }],
      { duration: next ? 200 : 150, easing: ease, fill: 'both' });
    state.motion.finished.then(() => { if (!destroyed && state.version === version) settle(state); }).catch(() => {});
    state.fade.finished.catch(() => {});
  };
  for (const state of states) {
    state.details.setAttribute('data-disclosure-enhanced', '');
    state.details.dataset.expanded = String(state.target);
    state.body.inert = !state.target || state.inert;
    state.click = event => {
      if (event.defaultPrevented || (event.button !== undefined && event.button !== 0)) return;
      if (event.target?.closest?.('a,button,input,select,textarea')?.closest?.('summary') === state.summary) return;
      if (!(event.detail > 0) || reduced?.matches || !state.details.animate || !state.body.animate || !visible(state.summary)) {
        if (state.motion) settle(state);
        state.details.setAttribute('data-disclosure-instant', '');
        return; // Native activation handles keyboard and motion-free paths.
      }
      event.preventDefault();
      change(state, state.motion ? !state.target : !state.details.open);
    };
    state.toggle = () => {
      if (state.motion && state.details.open) return; // Our retained closing/opening body.
      settle(state, state.details.open);
    };
    state.summary.addEventListener('click', state.click);
    state.details.addEventListener('toggle', state.toggle);
    if (win.MutationObserver) {
      state.observer = new win.MutationObserver(() => {
        // Also catches external .open = true while a closing body is retained.
        if (!destroyed) settle(state, state.details.open);
      });
      state.observer.observe(state.details, { attributes: true, attributeFilter: ['open'] });
    }
  }
  const settleAll = () => states.forEach(state => settle(state));
  const onReduced = () => {
    if (!reduced.matches) return;
    settleAll(); states.forEach(state => state.details.setAttribute('data-disclosure-instant', ''));
  };
  win.addEventListener('resize', settleAll); win.addEventListener('pagehide', settleAll);
  reduced?.addEventListener?.('change', onReduced);
  doc.fonts?.ready.then(() => { if (!destroyed) settleAll(); });
  const api = { destroy() {
    if (destroyed) return;
    settleAll(); destroyed = true;
    for (const state of states) {
      state.observer?.disconnect();
      state.summary.removeEventListener('click', state.click); state.details.removeEventListener('toggle', state.toggle);
      state.details.removeAttribute('data-disclosure-enhanced'); state.details.removeAttribute('data-disclosure-active');
      state.details.removeAttribute('data-disclosure-instant'); state.details.removeAttribute('data-expanded');
      state.body.inert = state.inert;
      if (state.aria === null) state.summary.removeAttribute('aria-expanded');
      else state.summary.setAttribute('aria-expanded', state.aria);
    }
    win.removeEventListener('resize', settleAll); win.removeEventListener('pagehide', settleAll);
    reduced?.removeEventListener?.('change', onReduced); instances.delete(root);
  } };
  instances.set(root, api);
  return api;
}

if (typeof document !== 'undefined') initDisclosureMotion(document);
