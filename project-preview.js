/* Interaction reference: Aceternity UI Link Preview, saved in the resource library:
   https://ui.aceternity.com/components/link-preview
   Original vanilla implementation: local covers and source recordings, stable placement,
   interruptible CSS motion and native links. No React or screenshot API. */
const instances = new WeakMap();
const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
const GAP = 12;

/** Fit a complete image around an exposed trigger, including a hoverable gap.
 * Coordinates share the layout viewport used by getBoundingClientRect/fixed CSS. */
export function previewPlacement(anchor, media, viewport) {
  if (![anchor.left, anchor.top, anchor.width, anchor.height, media.width, media.height,
    viewport.x, viewport.y, viewport.width, viewport.height].every(Number.isFinite) ||
    [anchor.width, anchor.height, media.width, media.height, viewport.width, viewport.height].some(v => v <= 0)) return null;
  const pad = 12;
  const left = viewport.x + pad, top = viewport.y + pad;
  const right = viewport.x + viewport.width - pad, bottom = viewport.y + viewport.height - pad;
  const edgeX = anchor.left + anchor.width, edgeY = anchor.top + anchor.height;
  if (anchor.left < viewport.x || anchor.top < viewport.y || edgeX > right + pad || edgeY > bottom + pad) return null;
  const fit = (maxW, maxH) => {
    const ratio = Math.min(1, maxW / media.width, maxH / media.height);
    return { width: media.width * ratio, height: media.height * ratio };
  };
  const natural = fit(Math.min(280, right - left), Math.min(210, bottom - top));
  const options = [
    { side: 'top', space: anchor.top - top - GAP, vertical: true },
    { side: 'bottom', space: bottom - edgeY - GAP, vertical: true },
    { side: 'right', space: right - edgeX - GAP, vertical: false },
    { side: 'left', space: anchor.left - left - GAP, vertical: false },
  ];
  let chosen = options.find(item => item.space >= (item.vertical ? natural.height : natural.width));
  if (!chosen) {
    // Flip at full size first; only then select the largest usable smaller frame.
    chosen = options.map(item => ({ ...item, image: fit(
      item.vertical ? natural.width : item.space,
      item.vertical ? item.space : natural.height,
    ) })).filter(item => item.image.width >= 80 && item.image.height >= 48)
      .sort((a, b) => b.image.width * b.image.height - a.image.width * a.image.height)[0];
  }
  if (!chosen || natural.width <= 0 || natural.height <= 0) return null;
  const { width, height } = chosen.image || natural;
  const { side, vertical } = chosen;
  const outerWidth = width + (vertical ? 0 : GAP);
  const outerHeight = height + (vertical ? GAP : 0);
  const centerX = anchor.left + anchor.width / 2, centerY = anchor.top + anchor.height / 2;
  const x = vertical ? clamp(centerX - width / 2, left, right - width) :
    side === 'left' ? anchor.left - width - GAP : edgeX;
  const y = vertical ? (side === 'top' ? anchor.top - height - GAP : edgeY) :
    clamp(centerY - height / 2, top, bottom - height);
  return { x, y, width, height, outerWidth, outerHeight, side,
    origin: `${clamp(centerX - x, 0, outerWidth)}px ${clamp(centerY - y, 0, outerHeight)}px` };
}

export function initProjectPreviews(doc = document) {
  if (instances.has(doc)) return instances.get(doc);
  const win = doc.defaultView;
  const localURL = value => {
    try {
      const base = new URL(doc.baseURI || win.location.href);
      const target = new URL(value, base);
      return target.origin === base.origin ? target : null;
    } catch { return null; }
  };
  const anchors = [...doc.querySelectorAll('a[data-project-preview]')].filter(anchor => {
    const target = localURL(anchor.href);
    const route = target?.pathname.match(/(?:^|\/)work\/([^/]+)\/?$/);
    return route && route[1] === anchor.dataset.projectPreview;
  });
  if (!anchors.length) return { destroy() {}, hide() {} };
  const hover = win.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  const portal = doc.createElement('div');
  portal.className = 'project-preview';
  portal.setAttribute('aria-hidden', 'true');
  portal.hidden = true;
  doc.body.append(portal);
  const cleanups = [], images = new Map(), videos = new Map();
  let version = 0, requested = null, mounted = null, mode = 'pointer';
  let mountedBounds = null;
  let hovered = null, focused = null, overPreview = false, keyboard = true;
  let dismissed = null, touchUntil = 0;
  let openTimer = 0, leaveTimer = 0, removalTimer = 0;
  let playback = null, mountedVideo = null;
  const listen = (node, type, callback, options) => {
    node.addEventListener(type, callback, options);
    cleanups.push(() => node.removeEventListener(type, callback, options));
  };
  const clear = () => {
    win.clearTimeout(openTimer); win.clearTimeout(leaveTimer); win.clearTimeout(removalTimer);
    openTimer = leaveTimer = removalTimer = 0;
  };
  const viewport = () => ({
    x: win.visualViewport?.offsetLeft || 0, y: win.visualViewport?.offsetTop || 0,
    width: win.visualViewport?.width || win.innerWidth,
    height: win.visualViewport?.height || win.innerHeight,
  });
  function visible(anchor) {
    if (!anchor?.isConnected || !anchor.getClientRects().length ||
      doc.querySelector('dialog[open]')) return false;
    const r = anchor.getBoundingClientRect(), v = viewport();
    if (r.left < v.x || r.top < v.y || r.right > v.x + v.width || r.bottom > v.y + v.height) return false;
    for (let parent = anchor.parentElement; parent && parent !== doc.body; parent = parent.parentElement) {
      // A closed details keeps its direct summary visible; its panel stays hidden.
      const summary = parent.tagName === 'DETAILS' ? parent.firstElementChild : null;
      if (parent.hidden || (parent.tagName === 'DETAILS' && !parent.open &&
        !(summary?.tagName === 'SUMMARY' && (summary === anchor || summary.contains(anchor))))) return false;
      const style = win.getComputedStyle(parent);
      if (/(auto|scroll|hidden|clip)/.test(style.overflowX + style.overflowY)) {
        const p = parent.getBoundingClientRect();
        if (r.left < p.left || r.right > p.right || r.top < p.top || r.bottom > p.bottom) return false;
      }
    }
    return r.width > 0 && r.height > 0;
  }
  function load(src) {
    if (!images.has(src)) {
      const pending = new Promise(resolve => {
        const image = new win.Image();
        image.alt = ''; image.draggable = false; image.decoding = 'async';
        image.onload = async () => {
          try { await image.decode?.(); } catch { /* onload still guarantees a usable image. */ }
          resolve(image.naturalWidth > 0 && image.naturalHeight > 0 ? image : null);
        };
        image.onerror = () => resolve(null);
        image.src = src;
      });
      images.set(src, pending);
    }
    return images.get(src);
  }
  function stopVideo(release = false) {
    if (playback) {
      const attempt = playback;
      playback = null;
      if (attempt.frame !== null) attempt.video.cancelVideoFrameCallback?.(attempt.frame);
      attempt.rafs.forEach(id => win.cancelAnimationFrame(id));
      if (attempt.loaded) attempt.video.removeEventListener('loadeddata', attempt.loaded);
      attempt.video.removeEventListener('error', attempt.error);
    }
    if (!mountedVideo) return;
    mountedVideo.pause();
    if (release) {
      mountedVideo.dataset.ready = 'false';
      try { mountedVideo.currentTime = 0; } catch { /* Metadata may still be loading. */ }
      if (mountedVideo.hasAttribute('src')) {
        mountedVideo.removeAttribute('src');
        mountedVideo.load();
      }
      mountedVideo = null;
    }
  }
  function playVideo(anchor, token, placement) {
    const source = localURL(anchor.dataset.previewVideoSrc || '');
    if (mode !== 'pointer' || !hover.matches || reduced.matches || !source ||
      !/\.(mp4|webm)$/i.test(source.pathname)) { stopVideo(true); return; }
    if (!videos.has(anchor)) {
      const video = doc.createElement('video');
      video.muted = video.defaultMuted = video.loop = video.playsInline = true;
      video.preload = 'none'; video.tabIndex = -1; video.disablePictureInPicture = true;
      video.setAttribute('aria-hidden', 'true');
      videos.set(anchor, video);
    }
    const video = videos.get(anchor);
    stopVideo(mountedVideo !== video);
    mountedVideo = video;
    video.style.width = `${placement.width}px`; video.style.height = `${placement.height}px`;
    video.style.left = `${placement.side === 'right' ? GAP : 0}px`;
    video.style.top = `${placement.side === 'bottom' ? GAP : 0}px`;
    if (video.parentElement !== portal) portal.append(video);
    if (video.getAttribute('src') !== source.href) {
      video.dataset.ready = 'false'; video.src = source.href; video.load();
    }
    const attempt = { video, anchor, token, frame: null, rafs: [], loaded: null, played: false, decoded: false, error: null };
    playback = attempt;
    const current = () => playback === attempt && token === version && requested === anchor &&
      !portal.hidden && portal.dataset.open === 'true' && mode === 'pointer' &&
      hover.matches && !reduced.matches && !doc.hidden && visible(anchor);
    const ready = () => {
      if (current() && attempt.played && attempt.decoded) video.dataset.ready = 'true';
    };
    const decoded = () => {
      if (!current()) return;
      if (typeof video.requestVideoFrameCallback === 'function') {
        attempt.frame = video.requestVideoFrameCallback(() => {
          attempt.frame = null;
          if (current()) { attempt.decoded = true; ready(); }
        });
      } else if (video.readyState < 2) {
        attempt.loaded = () => {
          video.removeEventListener('loadeddata', attempt.loaded); attempt.loaded = null;
          decoded();
        };
        video.addEventListener('loadeddata', attempt.loaded);
      } else {
        attempt.rafs.push(win.requestAnimationFrame(() => {
          if (!current()) return;
          attempt.rafs.push(win.requestAnimationFrame(() => {
            if (current()) { attempt.decoded = true; ready(); }
          }));
        }));
      }
    };
    attempt.error = () => { if (playback === attempt) stopVideo(true); };
    video.addEventListener('error', attempt.error);
    decoded();
    try {
      Promise.resolve(video.play()).then(() => {
        if (!current()) {
          // A stale play promise must not pause a newer attempt on the same video.
          if (playback?.video !== video) video.pause();
          return;
        }
        attempt.played = true; ready();
      }, attempt.error);
    } catch { attempt.error(); }
  }
  function hide(immediate = false) {
    version += 1; clear(); requested = null;
    stopVideo(immediate || reduced.matches || mode === 'keyboard');
    portal.dataset.open = 'false';
    if (immediate || reduced.matches || mode === 'keyboard') {
      portal.hidden = true; mounted = null; mountedBounds = null;
    } else {
      removalTimer = win.setTimeout(() => {
        if (!requested) { stopVideo(true); portal.hidden = true; mounted = null; mountedBounds = null; }
      }, 160);
    }
  }
  function dismiss() {
    hovered = focused = null; overPreview = false;
    hide(true);
  }
  function reveal(anchor, image, token) {
    if (!image || token !== version || requested !== anchor || anchor === dismissed || !visible(anchor) ||
      (mode === 'pointer' && (!hover.matches || (hovered !== anchor && !overPreview)))) return;
    const bounds = anchor.getBoundingClientRect();
    const placement = previewPlacement(bounds, {
      width: Number(anchor.dataset.previewWidth), height: Number(anchor.dataset.previewHeight),
    }, viewport());
    if (!placement) { hide(true); return; }
    const continuing = mounted === anchor && !portal.hidden;
    portal.dataset.instant = String(reduced.matches || mode === 'keyboard');
    portal.dataset.side = placement.side;
    portal.style.left = `${placement.x}px`; portal.style.top = `${placement.y}px`;
    portal.style.width = `${placement.width}px`; portal.style.height = `${placement.height}px`;
    portal.style.setProperty('--preview-origin', placement.origin);
    if (!continuing) {
      portal.dataset.open = 'false'; portal.replaceChildren(image);
      portal.hidden = false;
      // Establish the CSS entry state once. Re-entry retargets the current transition.
      void portal.offsetWidth;
    }
    mounted = anchor;
    mountedBounds = { left: bounds.left, top: bounds.top, width: bounds.width, height: bounds.height };
    portal.dataset.open = 'true';
    playVideo(anchor, token, placement);
  }
  function activate(anchor, nextMode) {
    if (anchor === dismissed || !visible(anchor)) return;
    const continuing = mounted === anchor && !portal.hidden;
    if (mounted && mounted !== anchor) hide(true);
    clear(); requested = anchor; mode = nextMode;
    const token = ++version;
    const immediate = continuing || reduced.matches || nextMode === 'keyboard';
    const ready = load(anchor.dataset.previewSrc);
    const show = () => { openTimer = 0; ready.then(image => reveal(anchor, image, token)); };
    if (immediate) show(); else openTimer = win.setTimeout(show, 50);
  }
  function leave() {
    win.clearTimeout(leaveTimer);
    if (hovered || overPreview || focused) return;
    // Leaving before decode/delay must never flash a new popup.
    if (portal.hidden) { hide(true); return; }
    leaveTimer = win.setTimeout(() => {
      if (!hovered && !overPreview && !focused) hide();
    }, 100);
  }
  for (const anchor of anchors) {
    listen(anchor, 'pointerenter', event => {
      if (!hover.matches || !['mouse', 'pen'].includes(event.pointerType) || win.performance.now() < touchUntil) return;
      dismissed = null; hovered = anchor; activate(anchor, 'pointer');
    });
    listen(anchor, 'pointerleave', () => {
      if (hovered === anchor) hovered = null;
      if (focused && requested !== focused) activate(focused, 'keyboard');
      leave();
    });
    listen(anchor, 'focusin', () => {
      if (!keyboard || win.performance.now() < touchUntil) return;
      dismissed = null; focused = anchor; activate(anchor, 'keyboard');
    });
    listen(anchor, 'focusout', () => {
      if (focused === anchor) focused = null;
      if (!hovered && !overPreview) hide(true);
    });
  }
  listen(portal, 'pointerenter', () => { overPreview = true; win.clearTimeout(leaveTimer); });
  listen(portal, 'pointerleave', () => { overPreview = false; leave(); });
  listen(doc, 'pointerdown', event => {
    keyboard = false;
    if (event.pointerType === 'touch') touchUntil = win.performance.now() + 800;
    dismiss();
  }, true);
  listen(doc, 'click', dismiss, true);
  listen(doc, 'keydown', event => {
    keyboard = true; touchUntil = 0;
    if (event.key === 'Escape') {
      dismissed = requested || mounted; hovered = focused = null; overPreview = false;
      hide(true);
    } else if (event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') dismiss();
  }, true);
  listen(doc, 'scroll', dismiss, true);
  listen(doc, 'visibilitychange', () => { if (doc.hidden) dismiss(); });
  for (const event of ['resize', 'blur', 'pagehide', 'pageswap', 'pageshow', 'popstate']) listen(win, event, dismiss);
  if (win.visualViewport) {
    listen(win.visualViewport, 'resize', dismiss); listen(win.visualViewport, 'scroll', dismiss);
  }
  listen(hover, 'change', () => { if (!hover.matches && mode === 'pointer') dismiss(); });
  listen(reduced, 'change', () => {
    portal.dataset.instant = String(reduced.matches || mode === 'keyboard');
    if (requested && reduced.matches) activate(requested, mode);
  });
  const moved = () => mounted && mountedBounds &&
    Object.keys(mountedBounds).some(key => Math.abs(mounted.getBoundingClientRect()[key] - mountedBounds[key]) > .5);
  const checkLayout = () => {
    if ((requested && !visible(requested)) || (mounted && !visible(mounted)) || moved()) dismiss();
  };
  const observer = new win.MutationObserver(checkLayout);
  observer.observe(doc.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['open', 'hidden'] });
  const sizes = typeof win.ResizeObserver === 'function' ? new win.ResizeObserver(checkLayout) : null;
  anchors.forEach(anchor => sizes?.observe(anchor));
  const controller = {
    hide: dismiss,
    destroy() {
      dismiss(); observer.disconnect(); sizes?.disconnect(); cleanups.forEach(cleanup => cleanup());
      portal.remove(); images.clear(); videos.clear(); instances.delete(doc);
    },
  };
  instances.set(doc, controller);
  return controller;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initProjectPreviews(document), { once: true });
  else initProjectPreviews(document);
}
