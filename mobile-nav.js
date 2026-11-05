// Swipe left/right on phones to move between Work, About and Services.
// Ignores swipes that start on things which scroll sideways, form fields,
// open dialogs, and the screen edges (used by the browser for back/forward).
(() => {
  const nav = document.querySelector('.mobile-switch');
  const page = document.body.dataset.page;
  if (!nav || !['home', 'work', 'about', 'services'].includes(page)) return;
  const tabs = [...nav.querySelectorAll('a')];
  const current = tabs.findIndex(a => a.hasAttribute('aria-current'));
  if (current < 0) return;
  const phone = matchMedia('(max-width: 809px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const EDGE = 24, MIN_X = 70, RATIO = 1.8, MAX_MS = 650;
  let start = null;

  const scrollsSideways = el => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      if (n.matches?.('input, textarea, select, [contenteditable], dialog, .lightbox, [data-no-swipe]')) return true;
      const s = getComputedStyle(n);
      if (/(auto|scroll)/.test(s.overflowX) && n.scrollWidth > n.clientWidth + 2) return true;
    }
    return false;
  };

  addEventListener('touchstart', e => {
    start = null;
    if (!phone.matches || e.touches.length !== 1) return;
    const t = e.touches[0];
    if (t.clientX < EDGE || t.clientX > innerWidth - EDGE) return;
    if (scrollsSideways(e.target)) return;
    start = { x: t.clientX, y: t.clientY, t: performance.now() };
  }, { passive: true });

  addEventListener('touchend', e => {
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x, dy = t.clientY - start.y, dt = performance.now() - start.t;
    start = null;
    if (Math.abs(dx) < MIN_X || Math.abs(dx) < Math.abs(dy) * RATIO || dt > MAX_MS) return;
    if (getSelection && String(getSelection()).length) return;
    const next = current + (dx < 0 ? 1 : -1);
    if (next < 0 || next >= tabs.length) {
      if (!reduced.matches) nav.animate([{ transform: 'translateX(-50%)' }, { transform: `translateX(calc(-50% + ${dx < 0 ? -8 : 8}px))` }, { transform: 'translateX(-50%)' }], { duration: 260, easing: 'ease-out' });
      return;
    }
    location.assign(tabs[next].href);
  }, { passive: true });

  addEventListener('touchcancel', () => { start = null; }, { passive: true });
})();
