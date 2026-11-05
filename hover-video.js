// Decorative previews keep the native link/button and its full-frame poster.
const instances = new WeakMap();

export function initHoverVideos(root = document) {
  if (instances.has(root)) return instances.get(root);
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const fine = win.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = win.matchMedia('(prefers-reduced-motion: reduce)');
  const records = [...root.querySelectorAll('[data-hover-video]')].map(trigger => ({
    trigger, video: trigger.querySelector('.hover-video'), token: 0,
    pointer: false, keyboard: false, frame: null, rafs: [], loaded: null,
    visible: true, played: false, decoded: false, release: null,
  })).filter(record => record.video);
  let active = null;
  let keyboardInput = false;
  let destroyed = false;
  const cleanups = [];

  function listen(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    cleanups.push(() => target.removeEventListener(event, handler, options));
  }

  function inViewport(trigger) {
    const rect = trigger.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 &&
      rect.top < win.innerHeight && rect.left < win.innerWidth;
  }

  function eligible(record) {
    return !destroyed && fine.matches && !reduced.matches && !doc.hidden &&
      record.trigger.isConnected && !record.trigger.closest('[hidden], [inert]') &&
      !doc.body.classList.contains('image-open') && !doc.querySelector('dialog[open]') &&
      record.visible && inViewport(record.trigger);
  }

  function current(record, token) {
    return active === record && record.token === token &&
      (record.pointer || record.keyboard) && eligible(record);
  }

  function cancelFrames(record) {
    if (record.frame !== null) record.video.cancelVideoFrameCallback?.(record.frame);
    record.frame = null;
    record.rafs.forEach(id => win.cancelAnimationFrame(id));
    record.rafs = [];
    if (record.loaded) record.video.removeEventListener('loadeddata', record.loaded);
    record.loaded = null;
  }

  function releaseSource(record) {
    if (record.release !== null) win.clearTimeout(record.release);
    record.release = null;
    record.trigger.removeAttribute('data-video-preview-exiting');
    try { record.video.currentTime = 0; } catch { /* Metadata may still be loading. */ }
    if (record.video.hasAttribute('src')) {
      record.video.removeAttribute('src');
      record.video.load();
    }
  }

  function flushExits() {
    records.forEach(record => { if (record.release !== null) releaseSource(record); });
  }

  function stop(record, fade = false) {
    if (!record) return;
    const retainedFrame = fade && record.video.hasAttribute('data-ready') && eligible(record);
    const token = ++record.token;
    record.pointer = record.keyboard = false;
    cancelFrames(record);
    record.trigger.removeAttribute('data-video-preview-active');
    record.trigger.toggleAttribute('data-video-preview-exiting', retainedFrame);
    record.video.removeAttribute('data-ready');
    record.played = record.decoded = false;
    record.video.pause();
    if (active === record) active = null;
    if (retainedFrame) {
      // Keep the paused last frame until its short opacity fade reaches zero.
      record.release = win.setTimeout(() => {
        if (record.token === token && active !== record) releaseSource(record);
      }, 180);
    } else releaseSource(record);
  }

  function reveal(record, token) {
    if (current(record, token) && record.played && record.decoded) {
      record.video.setAttribute('data-ready', '');
    }
  }

  function decodedFrame(record, token) {
    if (!current(record, token)) return;
    const { video } = record;
    if (typeof video.requestVideoFrameCallback === 'function') {
      record.frame = video.requestVideoFrameCallback(() => {
        if (!current(record, token)) return;
        record.frame = null;
        record.decoded = true;
        reveal(record, token);
      });
      return;
    }
    const queueFrame = () => {
      if (!current(record, token)) return;
      if (video.readyState < 2) {
        const loaded = () => {
          if (!current(record, token)) return;
          video.removeEventListener('loadeddata', loaded);
          record.loaded = null;
          queueFrame();
        };
        record.loaded = loaded;
        video.addEventListener('loadeddata', record.loaded);
        return;
      }
      record.rafs.push(win.requestAnimationFrame(() => {
        if (!current(record, token)) return;
        record.rafs.push(win.requestAnimationFrame(() => {
          if (!current(record, token)) return;
          record.decoded = true;
          reveal(record, token);
        }));
      }));
    };
    queueFrame();
  }

  function start(record) {
    if (!eligible(record) || active === record) return;
    stop(active);
    flushExits();
    active = record;
    const token = ++record.token;
    const { video, trigger } = record;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    trigger.setAttribute('data-video-preview-active', '');
    video.src = trigger.dataset.hoverVideo;
    if (!current(record, token)) return;
    let playing;
    try { playing = video.play(); } catch { stop(record); return; }
    decodedFrame(record, token);
    Promise.resolve(playing).then(() => {
      if (!current(record, token)) {
        // A previous play promise must not pause a newer intent on this card.
        if (active !== record) video.pause();
        return;
      }
      record.played = true;
      reveal(record, token);
    }, () => {
      if (active === record && record.token === token) stop(record);
    });
  }

  function stopAll() { stop(active); flushExits(); }
  function reconcile() {
    if (active && !eligible(active)) stop(active);
    records.forEach(record => { if (record.release !== null && !eligible(record)) releaseSource(record); });
  }

  listen(doc, 'keydown', event => { if (event.key === 'Tab') keyboardInput = true; }, true);
  listen(doc, 'pointerdown', event => {
    keyboardInput = false;
    if (event.pointerType !== 'mouse') stopAll();
  }, true);
  // Restore the poster before the existing navigation/lightbox click handlers.
  listen(doc, 'click', stopAll, true);
  listen(doc, 'visibilitychange', stopAll);
  listen(win, 'pagehide', stopAll);
  listen(doc, 'scroll', reconcile, true);
  listen(win, 'resize', reconcile);
  listen(fine, 'change', stopAll);
  listen(reduced, 'change', stopAll);

  for (const record of records) {
    const { trigger, video } = record;
    listen(trigger, 'pointerenter', event => {
      if (event.pointerType !== 'mouse') return;
      record.pointer = true;
      start(record);
    });
    listen(trigger, 'pointerleave', () => {
      record.pointer = false;
      if (!record.keyboard) stop(record, true);
    });
    listen(trigger, 'focus', () => {
      if (!keyboardInput) return;
      record.keyboard = true;
      start(record);
    });
    listen(trigger, 'blur', () => {
      record.keyboard = false;
      if (!record.pointer) stop(record, true);
    });
    listen(video, 'error', () => { if (active === record || record.release !== null) stop(record); });
  }

  const observer = typeof win.IntersectionObserver === 'function' ? new win.IntersectionObserver(entries => {
    for (const entry of entries) {
      const record = records.find(candidate => candidate.trigger === entry.target);
      if (!record) continue;
      record.visible = entry.isIntersecting;
      if (!record.visible && active === record) stop(record);
      if (!record.visible && record.release !== null) releaseSource(record);
    }
  }) : null;
  records.forEach(record => observer?.observe(record.trigger));
  const mutations = typeof win.MutationObserver === 'function' ? new win.MutationObserver(reconcile) : null;
  mutations?.observe(doc.body, { subtree: true, attributes: true, attributeFilter: ['hidden', 'inert', 'open', 'class'], childList: true });

  const controller = {
    destroy() {
      if (destroyed) return;
      stopAll();
      destroyed = true;
      observer?.disconnect();
      mutations?.disconnect();
      cleanups.forEach(cleanup => cleanup());
      instances.delete(root);
    },
  };
  instances.set(root, controller);
  return controller;
}

if (typeof document !== 'undefined') initHoverVideos();
