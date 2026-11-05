/* Native document navigation, with small viewport-only snapshots.
   Event-order stagger follows Detail's attention sequence: exit, information,
   then visuals. No router, navigation delay, or hidden default content. */
(() => {
  'use strict';
  const base = new URL('.', document.currentScript.src).pathname;
  const key = `portfolio-page-motion:${base}`;
  const pendingKey = `portfolio-work-return:${base}:pending`;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const ease = 'cubic-bezier(.22,.68,0,1)';
  // Softer, shorter travel with a small overlap avoids an empty exit/entry beat.
  // Match page-motion.css: 120ms exit, 80ms entry lead, 28ms stagger.
  // Four visible actors per pane keep the full sequence below 560ms.
  const actorLimit = 4, stagger = 28, entryStart = 80;
  const transparentWrappers = '.profile-content,.profile-intro,.profile-description,.case-sidebar-intro,.sidebar-details,.case-sidebar-details,.case-sidebar-details-content,.case-disclosure-stack,.services-core,.information-practice-list';
  let active = null;
  let named = [];
  let effects = [];
  let viewVersion = 0;
  let revealed = false;
  let fallbackStarted = false;
  const read = storageKey => {
    try { return JSON.parse(sessionStorage.getItem(storageKey)); } catch { return null; }
  };
  const incoming = read(key);
  const pendingReturn = read(pendingKey);
  const returning = pendingReturn?.url === location.href;
  const recent = intent => intent &&
    Number.isFinite(intent.at) && Date.now() - intent.at >= 0 && Date.now() - intent.at < 12000;
  const valid = intent => recent(intent) && intent.to === location.href;
  // Consume an arrival once: refresh/new-tab visits must not replay old intent.
  if (valid(incoming)) { try { sessionStorage.removeItem(key); } catch {} }
  const traversing = () => window.navigation?.activation?.navigationType === 'traverse' ||
    performance.getEntriesByType('navigation')[0]?.type === 'back_forward';
  const profilePath = path => path === base || path === `${base}work/`;
  function stableProfile(intent) {
    try { return profilePath(new URL(intent.from).pathname) && profilePath(new URL(intent.to).pathname); }
    catch { return false; }
  }
  function clearNames() {
    for (const node of named) node.style.removeProperty('view-transition-name');
    named = [];
    document.documentElement.style.removeProperty('--page-visual-entry-delay');
  }
  function interrupt() {
    viewVersion += 1;
    active?.skipTransition();
    active = null;
    clearNames();
    for (const effect of effects) effect.cancel();
    effects = [];
  }
  function visible(node, pane) {
    if (node.hidden || node.closest('[hidden]')) return false;
    const r = node.getBoundingClientRect();
    const p = pane.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > Math.max(0, p.top) &&
      r.top < Math.min(innerHeight, p.bottom) && r.right > 0 && r.left < innerWidth;
  }
  function actors() {
    const pane = document.querySelector('.sidebar');
    const info = [];
    function walk(container) {
      for (const child of container.children) {
        if (child.matches(transparentWrappers)) walk(child);
        // The identity header is shared by every page; it stays still.
        else if (!child.matches('.case-back, .identity') && visible(child, pane)) {
          // An expanded section may be several screens tall on a phone.
          if (child.getBoundingClientRect().height > innerHeight * 2) {
            if (child.children.length) walk(child);
          } else info.push(child);
        }
      }
    }
    if (pane) walk(pane);
    const main = document.querySelector('main');
    const visuals = main ? [...main.querySelectorAll('.project-card,.case-visual-card,.photo-item')]
      .filter(node => visible(node, main) && node.getBoundingClientRect().height <= innerHeight * 2) : [];
    const ordered = nodes => nodes.sort((a, b) => {
      const x = a.getBoundingClientRect(), y = b.getBoundingClientRect();
      return x.top - y.top || x.left - y.left;
    }).slice(0, actorLimit);
    return { info: ordered(info), visuals: ordered(visuals) };
  }
  function name(node, value) {
    node.style.setProperty('view-transition-name', value);
    named.push(node);
  }
  function capture(phase, preserveProfile = false) {
    clearNames();
    const groups = actors();
    if (preserveProfile) {
      const pane = document.querySelector('.sidebar');
      // Desktop has a bounded independent pane; mobile has a long document.
      if (pane && innerWidth >= 810) name(pane, 'page-profile');
    } else groups.info.forEach((node, i) => name(node, `page-info-${phase}-${i}`));
    groups.visuals.forEach((node, i) => name(node, `page-visual-${phase}-${i}`));
    // Order the first visual after the last information onset. A preserved
    // profile has no information event, so filters do not inherit that wait.
    const infoCount = preserveProfile ? 0 : groups.info.length;
    document.documentElement.style.setProperty('--page-visual-entry-delay', `${entryStart + infoCount * stagger}ms`);
  }
  function watch(transition) {
    active = transition;
    // Skipping/superseding a native transition rejects ready; it is expected.
    transition.ready?.catch(() => {});
    transition.finished.then(() => {
      if (active === transition) { active = null; clearNames(); }
    }, () => {
      if (active === transition) { active = null; clearNames(); }
    });
  }
  function preserveProfileScroll(intent) {
    if (valid(intent) && stableProfile(intent) && Number.isFinite(intent.sidebarY) && intent.sidebarY >= 0) {
      document.querySelector('.sidebar')?.scrollTo({ top: intent.sidebarY, behavior: 'instant' });
    }
  }
  function arrive(intent = incoming, beforePaint = false) {
    if (fallbackStarted || !valid(intent) || intent.keyboard || reduced.matches ||
      location.hash || document.querySelector('dialog[open]')) return;
    fallbackStarted = true;
    const groups = actors();
    if (stableProfile(intent)) groups.info = [];
    const visualStart = groups.info.length * stagger;
    for (const [nodes, visual] of [[groups.info, false], [groups.visuals, true]]) {
      nodes.forEach((node, i) => {
        if (typeof node.animate !== 'function') return;
        const frames = [
          { transform: `translateY(${visual ? 6 : 8}px)` },
          { transform: 'translateY(0)' },
        ];
        // Only pagereveal guarantees that this content has not painted yet.
        // Late fallbacks retain opacity rather than hide an already visible page.
        if (beforePaint) { frames[0].opacity = 0; frames[1].opacity = 1; }
        const effect = node.animate(frames,
          { duration: visual ? 280 : 260, delay: (visual ? visualStart : 0) + i * stagger, easing: ease, fill: 'backwards' });
        effects.push(effect);
        effect.finished.then(() => { effects = effects.filter(item => item !== effect); }, () => {});
      });
    }
  }
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest?.('a[href]');
    if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
    const to = new URL(anchor.href, location.href);
    if (to.origin !== location.origin || !to.pathname.startsWith(base) ||
      to.pathname.startsWith(`${base}assets/`) || to.pathname === location.pathname) return;
    try {
      sessionStorage.setItem(key, JSON.stringify({ from: location.href, to: to.href, at: Date.now(),
        keyboard: event.detail === 0, sidebarY: document.querySelector('.sidebar')?.scrollTop || 0 }));
    } catch { /* Navigation works without session storage. */ }
  }, true);
  addEventListener('pageswap', event => {
    if (!event.viewTransition) return;
    const intent = read(key);
    let destination;
    try { destination = new URL(event.activation?.entry?.url || intent?.to); } catch {}
    if (!recent(intent) || intent.from !== location.href || destination?.href !== intent.to ||
      intent.keyboard || reduced.matches || destination.hash || event.activation?.navigationType === 'traverse' ||
      document.querySelector('dialog[open]') || read(pendingKey)?.url === intent.to) {
      event.viewTransition.skipTransition(); return;
    }
    capture('out', stableProfile(intent));
    watch(event.viewTransition);
  });
  addEventListener('pagereveal', event => {
    const resumed = revealed;
    revealed = true;
    if (resumed || traversing()) { event.viewTransition?.skipTransition(); return; }
    preserveProfileScroll(incoming || {});
    if (event.viewTransition) {
      if (!valid(incoming) || incoming.keyboard || reduced.matches || returning || location.hash ||
        traversing()) {
        event.viewTransition.skipTransition(); return;
      }
      capture('in', stableProfile(incoming));
      watch(event.viewTransition);
    } else if (!returning) arrive(incoming, true);
  });
  addEventListener('pageshow', event => {
    if (event.persisted) { interrupt(); clearNames(); }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Older engines have no pagereveal. Content is always visible without JS.
    if (!('PageRevealEvent' in window) && !revealed && !returning && !traversing()) {
      preserveProfileScroll(incoming || {}); arrive();
    }
  }, { once: true });
  document.addEventListener('pointerdown', interrupt, true);
  document.addEventListener('keydown', interrupt, true);
  reduced.addEventListener('change', () => { if (reduced.matches) interrupt(); });
  window.PortfolioPageMotion = {
    cancel: interrupt,
    changeView(update, event) {
      interrupt();
      const version = viewVersion;
      if (reduced.matches || event.detail === 0) { update(); return; }
      if (typeof document.startViewTransition !== 'function') {
        update(); fallbackStarted = false;
        arrive({ from: location.href, to: location.href, at: Date.now(), keyboard: false });
        return;
      }
      capture('out', true);
      const transition = document.startViewTransition(() => {
        // skipTransition still runs its update callback. Only the latest request
        // may commit a filter, especially after Back or a rapid second click.
        if (version !== viewVersion) return;
        clearNames(); update(); capture('in', true);
      });
      watch(transition);
    },
  };
})();
