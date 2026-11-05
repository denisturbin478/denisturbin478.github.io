/**
 * Small vanilla ports from the saved component library.
 *
 * Selection background: Motion Primitives AnimatedBackground / SegmentedControl
 * Copyright (c) 2024 ibelick — MIT
 * https://github.com/ibelick/motion-primitives/tree/120f64f6ca60348e251f929e9c81f11ccbe45eda
 * Source: components/core/animated-background.tsx and
 * app/docs/animated-background/segmented-control.tsx.
 * Port: one measured active background, 200ms ease-in-out supplied by CSS.
 * The existing app owns links, history, filtering and aria-current.
 *
 * Grid: Magic UI AnimatedGridPattern / GridPattern
 * Copyright (c) Magic UI — MIT
 * https://github.com/magicuidesign/magicui/tree/d7207e5692d14c00dceafa8488d6d01f197fa0e4
 * Source: apps/www/registry/magicui/animated-grid-pattern.tsx.
 * Port: bounded integer cell positions, ResizeObserver, staggered opacity
 * breathing and repositioning on a completed cycle. Six cells replace 50.
 * Reduced motion, visibility pause and visible-region placement are additions.
 * Full notices: COMPONENTS-LICENSE.md.
 * No code below selects, scales, clips or otherwise changes images.
 */

const SVG_NS = 'http://www.w3.org/2000/svg';
const instances = new WeakMap();

export function measureSegment(container, item) {
  const a = container.getBoundingClientRect();
  const b = item.getBoundingClientRect();
  if (b.width <= 0 || b.height <= 0) return null;
  return {
    x: b.left - a.left + container.scrollLeft - container.clientLeft,
    y: b.top - a.top + container.scrollTop - container.clientTop,
    width: b.width,
    height: b.height,
  };
}

export function pickGridCell(bounds, size = 48, origin = { x: 0, y: 0 }, random = Math.random) {
  const left = Math.ceil((bounds.left - origin.x) / size);
  const top = Math.ceil((bounds.top - origin.y) / size);
  const right = Math.floor((bounds.right - origin.x - size) / size);
  const bottom = Math.floor((bounds.bottom - origin.y - size) / size);
  if (right < left || bottom < top || size <= 0) return null;
  const choose = (min, max) => min + Math.min(max - min, Math.floor(random() * (max - min + 1)));
  return {
    x: choose(left, right) * size + origin.x + 1,
    y: choose(top, bottom) * size + origin.y + 1,
    width: size - 1,
    height: size - 1,
  };
}

function visibleGridBounds(svg) {
  const r = svg.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  const view = svg.viewBox?.baseVal;
  const hasView = view && view.width > 0 && view.height > 0;
  const sx = hasView ? view.width / r.width : 1;
  const sy = hasView ? view.height / r.height : 1;
  const ox = hasView ? view.x : 0;
  const oy = hasView ? view.y : 0;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const bounds = {
    left: Math.max(0, -r.left) * sx + ox,
    top: Math.max(0, -r.top) * sy + oy,
    right: Math.min(r.width, width - r.left) * sx + ox,
    bottom: Math.min(r.height, height - r.top) * sy + oy,
  };
  return bounds.right > bounds.left && bounds.bottom > bounds.top ? bounds : null;
}

export function initPortfolioComponents(root = document) {
  if (instances.has(root)) return instances.get(root);
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cleanups = [];
  const refreshers = [];
  let alive = true;

  root.querySelectorAll('.work-filters').forEach(container => {
    const indicator = container.querySelector('.filter-indicator');
    if (!indicator) return;
    indicator.setAttribute('aria-hidden', 'true');
    let frame = 0;
    let positioned = false;
    const update = () => {
      frame = 0;
      if (!alive) return;
      const active = [...container.querySelectorAll('[data-filter]')].find(item => {
        const state = item.getAttribute('aria-current');
        return state && state !== 'false';
      });
      const box = active && measureSegment(container, active);
      indicator.hidden = !box;
      if (!box) return;
      indicator.style.transition = reduced.matches || !positioned ? 'none' : '';
      // Cover the whole row and animate only the clip window: no layout work per frame.
      const W = container.scrollWidth, H = container.scrollHeight;
      indicator.style.width = `${W}px`;
      indicator.style.height = `${H}px`;
      indicator.style.transform = 'none';
      indicator.style.clipPath = `inset(${box.y}px ${Math.max(0, W - box.x - box.width)}px ${Math.max(0, H - box.y - box.height)}px ${box.x}px round 25px)`;
      indicator.dataset.ready = 'true';
      container.classList.add('has-filter-indicator');
      positioned = true;
    };
    const schedule = () => {
      if (!frame && alive) frame = requestAnimationFrame(update);
    };
    const mutation = new MutationObserver(schedule);
    mutation.observe(container, { subtree: true, attributes: true, attributeFilter: ['aria-current'] });
    const resize = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    resize?.observe(container);
    container.querySelectorAll('[data-filter]').forEach(item => resize?.observe(item));
    container.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('popstate', schedule);
    document.fonts?.ready.then(schedule);
    refreshers.push(schedule);
    schedule();
    cleanups.push(() => {
      cancelAnimationFrame(frame);
      mutation.disconnect();
      resize?.disconnect();
      container.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('popstate', schedule);
      container.classList.remove('has-filter-indicator');
      indicator.hidden = true;
    });
  });

  root.querySelectorAll('.workspace-grid').forEach(layer => {
    const svg = layer.matches('svg') ? layer : layer.querySelector('svg');
    const group = svg?.querySelector('[data-grid-squares]');
    if (!svg || !group) return;
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const pattern = svg.querySelector('pattern');
    const origin = {
      x: Number(pattern?.getAttribute('x') || 0),
      y: Number(pattern?.getAttribute('y') || 0),
    };
    const size = 48;
    const cells = [...group.querySelectorAll('rect')];
    cells.splice(6).forEach(cell => cell.remove());
    const created = [];
    while (cells.length < 6) {
      const cell = document.createElementNS(SVG_NS, 'rect');
      group.append(cell);
      cells.push(cell);
      created.push(cell);
    }
    let intersecting = true;
    let frame = 0;
    const position = cell => {
      const bounds = visibleGridBounds(svg);
      const box = bounds && pickGridCell(bounds, size, origin);
      cell.style.display = box ? '' : 'none';
      if (!box) return;
      Object.entries(box).forEach(([key, value]) => cell.setAttribute(key, String(value)));
    };
    const syncPause = () => {
      const paused = reduced.matches || document.hidden || !intersecting;
      layer.classList.toggle('grid-paused', paused);
      layer.dataset.reducedMotion = String(reduced.matches);
      group.style.display = reduced.matches ? 'none' : '';
      cells.forEach(cell => { cell.style.animationPlayState = paused ? 'paused' : 'running'; });
    };
    const reposition = event => {
      if (event.target instanceof SVGElement && !reduced.matches && !document.hidden && intersecting) {
        position(event.target);
      }
    };
    cells.forEach((cell, index) => {
      cell.classList.add('grid-square');
      cell.setAttribute('fill', 'currentColor');
      cell.setAttribute('stroke-width', '0');
      cell.style.animationDuration = `${8 + Math.random() * 4}s`;
      cell.style.animationDelay = `${-index * 1.7}s`;
      cell.addEventListener('animationiteration', reposition);
      position(cell);
    });
    const refresh = () => {
      frame = 0;
      if (!alive) return;
      cells.forEach(position);
      syncPause();
    };
    const schedule = () => {
      if (!frame && alive) frame = requestAnimationFrame(refresh);
    };
    const resize = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(schedule) : null;
    resize?.observe(svg);
    const intersection = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(entries => {
      intersecting = entries[0]?.isIntersecting ?? true;
      if (intersecting) schedule();
      syncPause();
    }) : null;
    intersection?.observe(svg);
    const visibility = () => {
      // A hidden document may never run the queued animation frame.
      syncPause();
      if (!document.hidden) schedule();
    };
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('resize', schedule, { passive: true });
    refreshers.push(() => { syncPause(); schedule(); });
    syncPause();
    cleanups.push(() => {
      cancelAnimationFrame(frame);
      resize?.disconnect();
      intersection?.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('resize', schedule);
      cells.forEach(cell => cell.removeEventListener('animationiteration', reposition));
      cells.forEach(cell => { cell.style.animationPlayState = 'paused'; });
      created.forEach(cell => cell.remove());
    });
  });

  const refresh = () => refreshers.forEach(fn => fn());
  if (reduced.addEventListener) reduced.addEventListener('change', refresh);
  else reduced.addListener(refresh);
  const destroy = () => {
    alive = false;
    cleanups.forEach(fn => fn());
    if (reduced.removeEventListener) reduced.removeEventListener('change', refresh);
    else reduced.removeListener(refresh);
    instances.delete(root);
  };
  instances.set(root, destroy);
  return destroy;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initPortfolioComponents(), { once: true });
  } else initPortfolioComponents();
}
