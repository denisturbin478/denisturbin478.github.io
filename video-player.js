import {formatVideoTime, videoAssetKey, normaliseVideoChapters, chapterAt, clampVideoSeek, pointerSeek} from './video-player-model.js';

const instances = new WeakMap(), manifestRequests = new Map();
const icons = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 10 7-10 7Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5v14M15 5v14"/></svg>',
  muted: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4 6 8H3v8h3l5 4ZM16 9l5 6M21 9l-5 6"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4 6 8H3v8h3l5 4ZM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/></svg>'
};

function fetchManifest(url, win) {
  const key = String(url);
  if (manifestRequests.has(key)) return manifestRequests.get(key);
  const request = (async () => {
    try {
      const parsed = new URL(key, win.location.href);
      if (parsed.origin !== win.location.origin || !['https:', 'http:'].includes(parsed.protocol)) return null;
      const controller = new AbortController();
      const timeout = win.setTimeout(() => controller.abort(), 12000);
      try {
        const response = await win.fetch(parsed.href, {credentials: 'omit', redirect: 'error', signal: controller.signal});
        if (!response.ok || Number(response.headers?.get('content-length')) > 400000) return null;
        const source = await response.text();
        if (source.length > 400000) return null;
        const manifest = JSON.parse(source);
        return manifest?.schema_version === 1 && manifest.videos && typeof manifest.videos === 'object' ? manifest : null;
      } finally { win.clearTimeout(timeout); }
    } catch { return null; }
  })();
  manifestRequests.set(key, request);
  return request;
}

export function initVideoPlayer(video, {host, manifestURL = new URL('./video-chapters.json', import.meta.url)} = {}) {
  if (instances.has(video)) return instances.get(video);
  const doc = video?.ownerDocument, win = doc?.defaultView;
  if (!doc?.createElement || !win || !host?.append) return null;
  let active = false, destroyed = false, generation = 0, chapters = [], duration = 0, pointerPreview = false;
  const listeners = [], create = (tag, attrs = {}, parent) => {
    const node = doc.createElement(tag);
    for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
    if (parent) parent.append(node);
    return node;
  };
  const controls = create('div', {class: 'video-player', 'data-player-control': '', role: 'group', 'aria-label': 'Video controls'}, host);
  controls.hidden = true;
  const track = create('div', {class: 'video-player-track'}, controls);
  const segments = create('div', {class: 'video-player-segments', 'aria-hidden': 'true'}, track);
  const seek = create('input', {class: 'video-player-seek', type: 'range', min: 0, max: 1, step: .01, value: 0, 'aria-label': 'Seek video'}, track);
  const tooltip = create('span', {class: 'video-player-tooltip', 'aria-hidden': 'true'}, track);
  tooltip.hidden = true;
  const row = create('div', {class: 'video-player-controls'}, controls);
  const play = create('button', {type: 'button', 'aria-label': 'Play video'}, row);
  const time = create('span', {class: 'video-player-time'}, row);
  const scene = create('span', {class: 'video-player-chapter-label'}, row);
  const mute = create('button', {type: 'button', 'aria-label': 'Unmute video', 'aria-pressed': 'true'}, row);
  const speed = create('select', {class: 'video-player-speed', 'aria-label': 'Playback speed'}, row);
  for (const rate of [.5, .75, 1, 1.25, 1.5, 2]) {
    const option = create('option', {value: rate}, speed); option.textContent = `${rate}×`;
  }
  speed.value = '1';
  const message = create('p', {class: 'video-player-status', role: 'status'}, controls);
  message.hidden = true;
  const on = (node, type, callback, options) => {
    node.addEventListener(type, callback, options); listeners.push([node, type, callback, options]);
  };
  const status = text => { message.textContent = text; message.hidden = !text; };
  function hideControls() {
    if (controls.contains?.(doc.activeElement)) host.closest?.('.lightbox')?.querySelector?.('[data-lightbox-close]')?.focus?.({preventScroll: true});
    controls.hidden = true; tooltip.hidden = true; pointerPreview = false;
  }

  function draw() {
    if (destroyed) return;
    const current = clampVideoSeek(video.currentTime, duration), chapter = chapterAt(chapters, current);
    time.textContent = `${formatVideoTime(current)} / ${formatVideoTime(duration)}`;
    seek.value = String(current);
    seek.setAttribute('aria-valuetext', `${formatVideoTime(current)} of ${formatVideoTime(duration)}${chapters.length > 1 && chapter ? ` · ${chapter.title}` : ''}`);
    scene.textContent = chapters.length > 1 ? chapter?.title || '' : '';
    scene.title = chapters.length > 1 ? 'Scenes detected from visual changes in this recording' : '';
    for (let index = 0; index < chapters.length; index++) {
      const item = chapters[index], fraction = Math.max(0, Math.min(1, (current - item.start) / (item.end - item.start)));
      segments.children[index]?.style.setProperty('--segment-progress', `${fraction * 100}%`);
    }
    play.innerHTML = icons[video.paused || video.ended ? 'play' : 'pause'];
    play.setAttribute('aria-label', video.paused || video.ended ? 'Play video' : 'Pause video');
    mute.innerHTML = icons[video.muted ? 'muted' : 'sound'];
    mute.setAttribute('aria-label', video.muted ? 'Unmute video' : 'Mute video');
    mute.setAttribute('aria-pressed', String(Boolean(video.muted)));
    speed.value = String(video.playbackRate || 1);
    if (!pointerPreview && doc.activeElement === seek) showPreview(current);
  }
  function applyChapters(record) {
    chapters = normaliseVideoChapters(record, duration);
    segments.replaceChildren();
    for (const chapter of chapters) {
      const node = create('span', {class: 'video-player-segment'}, segments);
      node.style.flexGrow = String(Math.max(.001, chapter.end - chapter.start));
    }
    controls.toggleAttribute('data-segmented', chapters.length > 1);
    draw();
  }
  function metadata() {
    if (destroyed) return;
    duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
    seek.max = String(duration || 1); seek.disabled = !duration;
    applyChapters(null);
    const token = ++generation, source = video.currentSrc || video.getAttribute('src');
    const key = source && videoAssetKey(source, win.location.href);
    if (!key || !duration || typeof win.fetch !== 'function') return;
    fetchManifest(manifestURL, win).then(manifest => {
      if (destroyed || token !== generation || source !== (video.currentSrc || video.getAttribute('src'))) return;
      applyChapters(manifest?.videos?.[key]);
    });
  }
  function showPreview(value) {
    const bounded = clampVideoSeek(value, duration), chapter = chapterAt(chapters, bounded);
    tooltip.textContent = `${chapters.length > 1 && chapter ? `${chapter.title} · ` : ''}${formatVideoTime(bounded)}`;
    tooltip.hidden = !duration;
    const rect = track.getBoundingClientRect();
    const half = Math.min(rect.width / 2, tooltip.getBoundingClientRect().width / 2 + 4);
    const x = Math.max(half, Math.min(rect.width - half, duration ? bounded / duration * rect.width : rect.width / 2));
    track.style.setProperty('--seek-position', `${x}px`);
  }
  on(play, 'click', () => {
    if (!active) return;
    if (!video.paused && !video.ended) { video.pause(); draw(); return; }
    if (video.ended) video.currentTime = 0;
    status('');
    const token = generation;
    try {
      const request = video.play();
      request?.catch(() => {
        if (!destroyed && active && token === generation) { status('Playback did not start. Press play to try again.'); draw(); }
      });
    } catch { status('Playback did not start. Press play to try again.'); }
    draw();
  });
  on(mute, 'click', () => { video.muted = !video.muted; draw(); });
  on(speed, 'change', () => {
    const rate = Number(speed.value);
    if ([.5, .75, 1, 1.25, 1.5, 2].includes(rate)) video.playbackRate = rate;
    draw();
  });
  function commitSeek(proposal) {
    const value = clampVideoSeek(proposal, duration);
    if (duration) { try { video.currentTime = value; status(''); } catch { status('This part of the video is not ready yet.'); } }
    draw(); showPreview(value);
  }
  on(seek, 'input', () => commitSeek(Number(seek.value)));
  on(seek, 'keydown', event => {
    if (!duration || event.altKey || event.ctrlKey || event.metaKey) return;
    const amount = {ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -10, PageUp: 10}[event.key];
    if (amount == null && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    commitSeek(event.key === 'Home' ? 0 : event.key === 'End' ? duration : video.currentTime + amount);
  });
  on(seek, 'focus', () => showPreview(video.currentTime));
  on(seek, 'blur', () => { tooltip.hidden = true; pointerPreview = false; });
  on(track, 'pointermove', event => {
    pointerPreview = true; showPreview(pointerSeek(event.clientX, track.getBoundingClientRect(), duration));
  });
  on(track, 'pointerleave', () => { pointerPreview = false; tooltip.hidden = doc.activeElement !== seek; });
  for (const type of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'click', 'dblclick']) {
    on(controls, type, event => event.stopPropagation());
  }
  on(controls, 'keydown', event => { if (event.key !== 'Escape') event.stopPropagation(); });
  on(video, 'loadedmetadata', metadata); on(video, 'durationchange', metadata);
  for (const type of ['timeupdate', 'play', 'pause', 'ended', 'volumechange', 'ratechange']) on(video, type, draw);
  on(video, 'waiting', () => { if (active && !video.paused) status('Buffering video…'); });
  on(video, 'playing', () => status(''));
  on(video, 'error', () => {
    if (active) { hideControls(); video.controls = true; }
  });
  const api = {
    setActive(value) {
      if (destroyed) return;
      active = Boolean(value);
      if (active && video.error) { hideControls(); video.controls = true; return; }
      video.controls = false;
      if (active) controls.hidden = false; else hideControls();
      if (active) { if (!duration) metadata(); draw(); }
      else { tooltip.hidden = true; pointerPreview = false; status(''); }
    },
    reset() {
      if (destroyed) return;
      generation++; active = false; hideControls(); video.controls = false;
      pointerPreview = false; tooltip.hidden = true; duration = 0; chapters = [];
      seek.value = '0'; seek.max = '1'; seek.disabled = true; segments.replaceChildren();
      video.playbackRate = 1; speed.value = '1'; status(''); draw();
    },
    destroy() {
      if (destroyed) return;
      api.reset(); destroyed = true;
      listeners.forEach(([node, type, callback, options]) => node.removeEventListener(type, callback, options));
      controls.remove(); instances.delete(video);
      video.controls = true;
    }
  };
  instances.set(video, api); metadata(); draw();
  return api;
}
