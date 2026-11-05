const instances = new WeakMap();
export const PROTOTYPE_WIDTH = 1200;
export const PROTOTYPE_HEIGHT = 900;

export function initLivePrototypes(doc = document) {
  if (instances.has(doc)) return instances.get(doc);
  const win = doc.defaultView;
  const desktop = win.matchMedia('(min-width: 810px)');
  const cleanups = [];
  const listen = (target, event, callback) => {
    target.addEventListener(event, callback);
    cleanups.push(() => target.removeEventListener(event, callback));
  };
  for (const section of doc.querySelectorAll('[data-live-prototype]')) {
    const viewport = section.querySelector('[data-prototype-viewport]');
    const frame = section.querySelector('iframe[data-prototype-src]');
    const reload = section.querySelector('[data-prototype-reload]');
    const status = section.querySelector('[data-prototype-status]');
    if (!viewport || !frame || !reload || !status) continue;
    let requested = false;
    const start = doc.createElement('button');
    start.type = 'button';
    start.className = 'case-prototype-start';
    start.textContent = 'Explore the live site';
    viewport.append(start);
    let source;
    try {
      source = new URL(frame.dataset.prototypeSrc);
      if (source.protocol !== 'https:' || source.username || source.password) continue;
    } catch { continue; }
    const loading = () => {
      viewport.setAttribute('aria-busy', 'true');
      status.textContent = 'Loading website…';
      status.hidden = false;
    };
    const sync = () => {
      section.hidden = !desktop.matches;
      if (!desktop.matches) {
        // No off-screen third-party website is loaded on the mobile layout.
        frame.removeAttribute('src');
        viewport.setAttribute('aria-busy', 'false');
        status.hidden = true;
        return;
      }
      const width = viewport.getBoundingClientRect().width;
      if (width <= 0) return;
      // Transform the complete 1200×900 browsing context, never its CSS width.
      viewport.style.setProperty('--prototype-scale', String(width / PROTOTYPE_WIDTH));
      // The live site loads only when asked; until then the poster stays up.
      if (!frame.hasAttribute('src') && requested) {
        loading();
        frame.src = source.href;
      } else if (!requested) {
        viewport.setAttribute('aria-busy', 'false');
        status.hidden = true;
      }
    };
    listen(frame, 'load', () => {
      if (!desktop.matches || !frame.hasAttribute('src')) return;
      // A cross-origin load event fires before the remote site has painted, so
      // keep the poster up a little longer to avoid a black flash.
      win.setTimeout(() => {
        viewport.setAttribute('aria-busy', 'false');
        status.hidden = true;
      }, 1600);
    });
    listen(frame, 'error', () => {
      if (!desktop.matches || !frame.hasAttribute('src')) return;
      viewport.setAttribute('aria-busy', 'false');
      status.textContent = 'Preview unavailable. Use Open website to continue.';
      status.hidden = false;
    });
    listen(reload, 'click', () => {
      if (!desktop.matches) return;
      requested = true;
      start.hidden = true;
      loading();
      frame.src = source.href;
    });
    listen(start, 'click', () => {
      requested = true;
      start.hidden = true;
      sync();
      frame.focus({ preventScroll: true });
    });
    listen(desktop, 'change', sync);
    listen(win, 'pageshow', sync);
    if (typeof win.ResizeObserver === 'function') {
      const observer = new win.ResizeObserver(sync);
      observer.observe(viewport);
      cleanups.push(() => observer.disconnect());
    } else {
      listen(win, 'resize', sync);
    }
    sync();
    cleanups.push(() => { frame.removeAttribute('src'); section.hidden = true; });
  }
  const controller = {
    destroy() {
      cleanups.splice(0).forEach(cleanup => cleanup());
      instances.delete(doc);
    },
  };
  instances.set(doc, controller);
  return controller;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initLivePrototypes(document), {once: true});
  } else initLivePrototypes(document);
}
