// Street observations: a "Scrapbook" view. Photos become loose prints; click one
// and the rest fade while it moves forward. A second click opens it full size in
// the existing viewer. After Chloé's "A scrapbook that lets one memory take over".
(() => {
  const grid = document.querySelector('.photo-grid');
  const bar = document.querySelector('.case-gallery-bar .toolbar-utilities');
  if (!grid || !bar) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const KEY = 'trbn-scrapbook';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'scrapbook-toggle';
  toggle.setAttribute('aria-pressed', 'false');
  toggle.textContent = 'Scrapbook';
  bar.prepend(toggle);

  // Stable, gentle rotations per photo so the layout never jumps between visits.
  grid.querySelectorAll('.photo-item').forEach((item, i) => {
    const r = ((i * 37) % 13) - 6;          // -6..6 deg
    const y = ((i * 53) % 9) - 4;           // -4..4 px
    item.style.setProperty('--sb-r', `${r}deg`);
    item.style.setProperty('--sb-y', `${y}px`);
  });

  let focused = null;
  function unfocus() {
    if (!focused) return;
    focused.classList.remove('is-taking-over');
    focused.style.removeProperty('--sb-dx');
    focused.style.removeProperty('--sb-dy');
    focused.style.removeProperty('--sb-s');
    grid.classList.remove('has-focus');
    focused = null;
  }
  function focus(item) {
    const r = item.getBoundingClientRect();
    const vw = innerWidth, vh = innerHeight;
    const scale = Math.min(2.4, (Math.min(vw, vh) * 0.62) / Math.max(r.width, r.height));
    const pane = grid.getBoundingClientRect();
    const cx = Math.max(pane.left, 0) + Math.min(pane.width, vw) / 2;
    item.style.setProperty('--sb-dx', `${cx - (r.left + r.width / 2)}px`);
    item.style.setProperty('--sb-dy', `${vh / 2 - (r.top + r.height / 2)}px`);
    item.style.setProperty('--sb-s', String(scale));
    grid.classList.add('has-focus');
    item.classList.add('is-taking-over');
    focused = item;
  }

  function set(on) {
    unfocus();
    grid.classList.toggle('is-scrapbook', on);
    toggle.setAttribute('aria-pressed', String(on));
    try { sessionStorage.setItem(KEY, on ? '1' : '0'); } catch {}
  }
  toggle.addEventListener('click', () => set(!grid.classList.contains('is-scrapbook')));

  // Capture phase: decide before the viewer's own click handler runs.
  grid.addEventListener('click', e => {
    if (!grid.classList.contains('is-scrapbook')) return;
    const item = e.target.closest('.photo-item');
    if (!item) return;
    if (focused === item) { unfocus(); return; }   // second click: let the viewer open it
    e.preventDefault();
    e.stopImmediatePropagation();
    unfocus();
    if (reduced.matches) { focus(item); return; }
    requestAnimationFrame(() => focus(item));
  }, true);
  document.addEventListener('pointerdown', e => {
    if (focused && !e.target.closest('.photo-item')) unfocus();
  }, { passive: true });
  addEventListener('keydown', e => { if (e.key === 'Escape') unfocus(); });
  addEventListener('scroll', () => unfocus(), { passive: true, capture: true });
  addEventListener('resize', () => unfocus());

  try { if (sessionStorage.getItem(KEY) === '1') set(true); } catch {}
})();
