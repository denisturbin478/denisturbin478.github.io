// A column of ticks on the right edge of long project sidebars. Hover opens it
// into section titles; a click scrolls the sidebar there. The current section's
// tick is brighter. Desktop only. After Noe's "Article contents as a column of ticks".
(() => {
  const sidebar = document.querySelector('.case-sidebar');
  if (!sidebar || document.body.matches('.about-layout-page, .information-layout-page')) return;
  const desktop = matchMedia('(min-width: 810px) and (hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const nodes = [...sidebar.querySelectorAll(
    '.case-copy-section > h2, .case-sidebar-details-content > section > h2, .case-more-details > summary .case-disclosure-label, .case-reachout > h2, .case-client-feedback h2'
  )].filter(n => !n.closest('.sr-only') && n.textContent.trim());
  const seen = new Set();
  const items = nodes.map(n => {
    const label = n.textContent.trim().replace(/\.$/, '');
    const anchor = n.closest('summary')?.parentElement || n.closest('section') || n;
    return { label, anchor };
  }).filter(i => !seen.has(i.anchor) && seen.add(i.anchor));
  if (items.length < 4) return;

  const nav = document.createElement('nav');
  nav.className = 'case-ticks';
  nav.setAttribute('aria-label', 'Sections on this page');
  items.forEach((item, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'case-tick';
    b.innerHTML = '<span class="case-tick-label"></span><span class="case-tick-line" aria-hidden="true"></span>';
    b.querySelector('.case-tick-label').textContent = item.label;
    b.addEventListener('click', () => {
      if (item.anchor.tagName === 'DETAILS') item.anchor.open = true;
      item.anchor.scrollIntoView({ block: 'start', behavior: reduced.matches ? 'auto' : 'smooth' });
    });
    item.button = b;
    nav.append(b);
  });
  document.body.append(nav);

  function place() {
    nav.hidden = !desktop.matches;
    if (!desktop.matches) return;
    const r = sidebar.getBoundingClientRect();
    nav.style.left = `${Math.round(r.right - 22)}px`;
  }
  function track() {
    if (!desktop.matches) return;
    const top = sidebar.getBoundingClientRect().top + 140;
    let active = 0;
    items.forEach((item, i) => { if (item.anchor.getBoundingClientRect().top <= top) active = i; });
    items.forEach((item, i) => item.button.toggleAttribute('aria-current', i === active));
  }
  place(); track();
  addEventListener('resize', () => { place(); track(); });
  desktop.addEventListener('change', () => { place(); track(); });
  sidebar.addEventListener('scroll', track, { passive: true });
  addEventListener('scroll', track, { passive: true });
})();
