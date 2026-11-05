// Bio photo stacks: pointing at a phrase in the bio fans out a small stack of
// project photos above it. Inspired by Noe Chagué's bio component.
// Mouse: hover opens, leaving closes. Keyboard: focus opens, Esc/blur closes.
// Touch: first tap opens the stack, a second tap follows the link.
// The phrases stay ordinary links, so the text reads the same without JS.
(() => {
  const triggers = [...document.querySelectorAll('.bio-stack[data-stack]')];
  if (!triggers.length) return;

  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const layer = document.createElement('div');
  layer.className = 'bio-stack-layer';
  layer.setAttribute('aria-hidden', 'true');
  document.body.append(layer);

  // Fan positions for up to three photos: left, centre, right.
  const FAN = [
    { x: -58, y: 12, r: -9 },
    { x: 0, y: -4, r: 2 },
    { x: 58, y: 10, r: 10 },
  ];
  const PILE_HEIGHT = 150;
  let current = null;
  let closeTimer = 0;

  const sources = t => t.dataset.stack.split(',').map(s => s.trim()).filter(Boolean);

  // Warm the cache when the pointer reaches the paragraph, before any phrase.
  const warmed = new WeakSet();
  const warm = para => {
    if (!para || warmed.has(para)) return;
    warmed.add(para);
    para.querySelectorAll('.bio-stack[data-stack]').forEach(t => sources(t).forEach(src => { new Image().src = src; }));
  };
  triggers.forEach(t => t.parentElement?.closest('p')?.addEventListener('pointerenter', e => warm(e.currentTarget), { once: true }));

  function build(t) {
    const pile = document.createElement('div');
    pile.className = 'bio-stack-pile';
    const list = sources(t);
    const offset = list.length === 2 ? 0.5 : 0; // centre a pair over the word
    list.forEach((src, i) => {
      const f = FAN[Math.min(FAN.length - 1, Math.round(i + offset))];
      const img = new Image();
      img.alt = '';
      img.decoding = 'async';
      // Hidden until decoded; one retry covers a dropped request.
      img.addEventListener('load', () => img.classList.add('is-ready'), { once: true });
      img.addEventListener('error', () => setTimeout(() => { img.src = `${src}${src.includes('?') ? '&' : '?'}retry=1`; }, 250), { once: true });
      img.src = src;
      img.style.setProperty('--x', `${f.x}px`);
      img.style.setProperty('--y', `${f.y}px`);
      img.style.setProperty('--r', `${f.r}deg`);
      img.style.setProperty('--i', String(i));
      pile.append(img);
    });
    return pile;
  }

  function place(t, pile) {
    const r = t.getClientRects()[0] || t.getBoundingClientRect();
    const half = 140;
    const x = Math.max(half, Math.min(innerWidth - half, r.left + r.width / 2));
    const roomAbove = r.top > PILE_HEIGHT + 20;
    pile.classList.toggle('is-below', !roomAbove);
    pile.style.left = `${x}px`;
    pile.style.top = `${roomAbove ? r.top - 10 : r.bottom + 10}px`;
  }

  function open(t) {
    clearTimeout(closeTimer);
    if (current?.t === t) return;
    close(true);
    const pile = build(t);
    place(t, pile);
    layer.append(pile);
    t.classList.add('is-active');
    current = { t, pile, at: performance.now() };
    requestAnimationFrame(() => requestAnimationFrame(() => pile.classList.add('is-open')));
  }

  function close(immediate = false) {
    if (!current) return;
    const { t, pile } = current;
    current = null;
    t.classList.remove('is-active');
    pile.classList.remove('is-open');
    if (immediate) pile.remove();
    else setTimeout(() => pile.remove(), 260);
  }

  triggers.forEach(t => {
    t.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') open(t); });
    t.addEventListener('pointerleave', e => {
      if (e.pointerType === 'mouse') closeTimer = setTimeout(() => close(), 90);
    });
    t.addEventListener('focus', () => open(t));
    t.addEventListener('blur', () => close());
    t.addEventListener('click', e => {
      // On touch screens the first tap shows the photos; the second follows the link.
      // A stack opened by the same gesture a moment ago still counts as the first tap.
      const justOpened = current?.t === t && performance.now() - current.at < 500;
      if (!finePointer.matches && (current?.t !== t || justOpened)) {
        e.preventDefault();
        open(t);
        if (current) current.at = 0;
      }
    });
  });

  document.addEventListener('pointerdown', e => {
    if (current && !current.t.contains(e.target)) close();
  }, { passive: true });
  addEventListener('scroll', () => close(), { capture: true, passive: true });
  addEventListener('resize', () => close());
  addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  addEventListener('pagehide', () => close(true));
})();
