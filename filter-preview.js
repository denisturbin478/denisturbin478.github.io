// Hovering a work filter previews what it holds: a count and three thumbnails.
// Desktop only. After Noe's "A module directory that previews on filter".
(() => {
  const filters = [...document.querySelectorAll('.work-filters a[data-filter]')].filter(a => a.dataset.filter !== 'all');
  const cards = [...document.querySelectorAll('.work-grid .project-card')];
  if (!filters.length || !cards.length) return;
  const desktop = matchMedia('(min-width: 810px) and (hover: hover) and (pointer: fine)');

  const pop = document.createElement('div');
  pop.className = 'filter-preview';
  pop.setAttribute('aria-hidden', 'true');
  document.body.append(pop);
  let timer = 0;

  function show(link) {
    if (!desktop.matches || link.hasAttribute('aria-current')) return;
    const match = cards.filter(c => c.dataset.category === link.dataset.filter);
    if (!match.length) return;
    pop.replaceChildren();
    const row = document.createElement('div');
    row.className = 'filter-preview-thumbs';
    match.slice(0, 3).forEach((c, i) => {
      const src = c.querySelector('img')?.currentSrc || c.querySelector('img')?.src;
      if (!src) return;
      const img = new Image();
      img.src = src; img.alt = ''; img.decoding = 'async';
      img.style.setProperty('--i', String(i));
      row.append(img);
    });
    const label = document.createElement('p');
    const n = match.length;
    label.textContent = `${n} ${n === 1 ? 'project' : 'projects'}`;
    pop.append(row, label);
    const r = link.getBoundingClientRect();
    pop.style.left = `${Math.round(Math.min(innerWidth - 240, Math.max(12, r.left + r.width / 2 - 110)))}px`;
    pop.style.top = `${Math.round(r.bottom + 10)}px`;
    pop.classList.add('is-open');
  }
  function hide() { pop.classList.remove('is-open'); }

  filters.forEach(link => {
    link.addEventListener('pointerenter', e => { if (e.pointerType !== 'mouse') return; clearTimeout(timer); timer = setTimeout(() => show(link), 120); });
    link.addEventListener('pointerleave', () => { clearTimeout(timer); hide(); });
    link.addEventListener('click', hide);
  });
  addEventListener('scroll', hide, { passive: true, capture: true });
})();
