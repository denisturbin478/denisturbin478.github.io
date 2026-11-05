import {containMedia, springStep, mediaResponse, originPose, returnPose, cornerKeys, squareCorners, resolveCornerRadii, cornerCss} from './media-motion.js';
import {initMediaGestures, clampPan, zoomAround, resistedOffset, swipeDestination} from './media-gestures.js';
import {playUISound} from './ui-sounds.js';
import {initVideoPlayer} from './video-player.js';

export function initMediaViewer(root = document) {
  const box = root.querySelector('.lightbox');
  if (!box) return null;
  const image = box.querySelector('#lightbox-image');
  const video = box.querySelector('#lightbox-video');
  const stage = box.querySelector('.lightbox-stage');
  const scrim = box.querySelector('.lightbox-scrim');
  const closeButton = box.querySelector('[data-lightbox-close]');
  const previous = box.querySelector('#image-prev'), next = box.querySelector('#image-next');
  const count = box.querySelector('#image-count'), caption = box.querySelector('#image-caption');
  const captionTitle = box.querySelector('#image-title'), gear = box.querySelector('#image-gear');
  const status = box.querySelector('#image-status');
  const zoomButton = box.querySelector('#image-zoom');
  const loading = box.querySelector('.image-loading');
  const player = initVideoPlayer(video, {host: stage, manifestURL: video?.ownerDocument ? new URL('./video-chapters.json', import.meta.url) : null});
  const photos = JSON.parse(root.querySelector('#photo-data')?.textContent || '[]');
  const projectTriggers = [...root.querySelectorAll('[data-image],[data-video]')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const keys = ['x', 'y', 'scale', 'shade', ...cornerKeys];
  let phase = 'closed', mode = 'project', index = 0, opener = null, currentTrigger = null;
  let hiddenSource = null, sourceVisibility = '', width = 1, height = 1, session = 0;
  let pose = null, target = null, velocity = {}, frame = 0, previousTime = null;
  let playbackRequested = false, videoFailed = false, incomingReady = false;
  let sequence = [], slideOffset = 0, slideVelocity = 0, outgoing = [], closingLayer = null;
  let gestures = null, zoomFactor = 1, dragBase = null;

  const viewport = () => ({width: window.innerWidth, height: window.innerHeight});
  function fitMedia(w = width, h = height) {
    const v = viewport();
    const top = Math.min(v.width < 600 ? 104 : 72, v.height * .2);
    // Reserve the player beneath the recording, without spending the same
    // space above it. All video pixels remain visible at their native ratio.
    const bottom = mode === 'video' ? Math.min(v.width < 600 || matchMedia('(pointer: coarse)').matches ? 176 : 152, Math.max(0, v.height - top - 40)) : top;
    return containMedia(w, h, v.width, Math.max(1, v.height - (bottom - top)), {
      x: v.width < 600 ? 12 : sequence.length > 1 ? 64 : 32,
      y: top
    });
  }
  const contained = () => fitMedia();
  function viewDestination() {
    const fit = contained();
    if (zoomFactor <= 1) return fit;
    const scale = Math.min(1, fit.scale * zoomFactor);
    if (scale <= fit.scale * 1.02) { zoomFactor = 1; return fit; }
    return clampPan({...fit, x: pose.x, y: pose.y, scale}, width, height, viewport());
  }
  function updateZoomControl() {
    const fit = contained(), zoomed = zoomFactor > 1.01;
    box.toggleAttribute('data-zoomed', zoomed);
    if (!zoomButton) return;
    zoomButton.hidden = mode === 'video';
    if (zoomButton.hidden && root.activeElement === zoomButton) closeButton.focus({preventScroll: true});
    zoomButton.disabled = !incomingReady || (!zoomed && Math.min(fit.scale * 3, 1) <= fit.scale * 1.02);
    zoomButton.setAttribute('aria-pressed', String(zoomed));
    zoomButton.setAttribute('aria-label', zoomed ? 'Fit image' : 'Zoom image');
  }
  function updateCaption(item) {
    const title = item.title || item.alt || 'Expanded media';
    if (captionTitle && gear) {
      captionTitle.textContent = title; gear.textContent = [item.camera, item.lens].filter(Boolean).join(' · ');
      gear.hidden = !gear.textContent;
    } else caption.textContent = [title, item.camera, item.lens].filter(Boolean).join(' · ');
    if (status) { status.textContent = item.status === 'concept' ? 'Concept' : ''; status.hidden = !status.textContent; }
    count.hidden = sequence.length < 2; previous.hidden = next.hidden = sequence.length < 2;
    count.textContent = `${index + 1} / ${sequence.length}`;
    previous.disabled = index === 0; next.disabled = index === sequence.length - 1;
  }
  function sourceMedia(trigger) { return trigger?.querySelector('img,video'); }
  function sourceCorners(source, rect) {
    const radii = squareCorners();
    // The gallery clips on the figure, not the img. Only a coincident clipping
    // boundary can supply the shape of the clicked image itself.
    for (let node = source; node && node !== root.body; node = node.parentElement) {
      const style = getComputedStyle(node);
      if (node !== source && ![style.overflowX, style.overflowY].some(value => value === 'hidden' || value === 'clip')) continue;
      const bounds = node === source ? rect : node.getBoundingClientRect();
      if (['left', 'top', 'width', 'height'].some(key => Math.abs(bounds[key] - rect[key]) > .75)) continue;
      const candidate = resolveCornerRadii(style, rect.width, rect.height);
      for (const key of cornerKeys) radii[key] = Math.max(radii[key], candidate[key]);
    }
    return radii;
  }
  function origin({allowOffscreen = false} = {}) {
    const source = sourceMedia(currentTrigger), v = viewport();
    if (!source?.isConnected) return null;
    const rect = source.getBoundingClientRect();
    const start = originPose(rect, width, height, v.width, v.height, squareCorners(), {allowOffscreen});
    return start ? {...start, ...sourceCorners(source, rect)} : null;
  }
  function returnDestination() {
    const v = viewport();
    return returnPose(origin({allowOffscreen: true}), pose, width, height, v.width, v.height);
  }
  function restoreSource() {
    if (hiddenSource) hiddenSource.style.visibility = sourceVisibility;
    hiddenSource = null;
  }
  function hideSource() {
    restoreSource();
    // A video tile includes play/duration overlays. Hide its whole button so
    // those controls cannot remain behind the expanding poster.
    hiddenSource = mode === 'video' || currentTrigger?.dataset.mediaStatus === 'concept' ? currentTrigger : sourceMedia(currentTrigger);
    if (hiddenSource) { sourceVisibility = hiddenSource.style.visibility; hiddenSource.style.visibility = 'hidden'; }
  }
  function draw() {
    if (!pose) return;
    const transform = `translate3d(${pose.x + slideOffset}px,${pose.y}px,0) scale(${Math.max(.001, pose.scale)})`;
    const corners = cornerCss(pose);
    image.style.transform = transform;
    video.style.transform = transform;
    // Compensate for transform scale so the first and last masks exactly match
    // the thumbnail; native-resolution swaps do not change the visible curve.
    image.style.borderRadius = corners;
    video.style.borderRadius = corners;
    box.style.setProperty('--viewer-shade', Math.max(0, Math.min(1, pose.shade)));
    updateZoomControl();
    if (closingLayer) {
      closingLayer.node.style.transform = transform;
      closingLayer.node.style.borderRadius = corners;
      closingLayer.node.style.opacity = box.hasAttribute('data-fade') ? String(Math.max(0, pose.shade)) : '1';
    }
    for (const layer of outgoing) {
      if (layer === closingLayer) continue;
      layer.node.style.transform = `translate3d(${layer.pose.x + layer.offset}px,${layer.pose.y}px,0) scale(${Math.max(.001, layer.pose.scale)})`;
      layer.node.style.opacity = phase === 'closing' ? String(Math.max(0, pose.shade)) : '1';
    }
  }
  function removeOutgoing() {
    outgoing.forEach(layer => layer.node.remove());
    outgoing = []; closingLayer = null;
  }
  function freezeCurrent() {
    if (!pose || (!incomingReady && (video.hidden || video.readyState < 2))) return;
    const visible = {...pose, x: pose.x + slideOffset};
    const v = viewport();
    if (visible.x >= v.width || visible.x + width * visible.scale <= 0) return;
    let node;
    // Keep the decoded video frame while the next medium is loading. This
    // canvas stays in the viewer; it is not exported or added to the gallery.
    if (!video.hidden && video.readyState >= 2 && root.createElement) {
      try {
        const canvas = root.createElement('canvas');
        const ratio = Math.min(1, 1600 / Math.max(width, height));
        canvas.width = Math.max(1, Math.round(width * ratio));
        canvas.height = Math.max(1, Math.round(height * ratio));
        const context = canvas.getContext('2d');
        if (context) { context.drawImage(video, 0, 0, canvas.width, canvas.height); node = canvas; }
      } catch { /* A poster is still available when a decoded frame cannot be drawn. */ }
    }
    if (!node && !image.hidden && image.src) node = image.cloneNode(false);
    if (!node && video.poster) {
      node = image.cloneNode(false); node.src = video.poster;
    }
    if (!node) return;
    node.removeAttribute('id'); node.removeAttribute('alt'); node.hidden = false;
    node.className = 'lightbox-outgoing'; node.setAttribute('aria-hidden', 'true');
    node.style.width = `${width}px`; node.style.height = `${height}px`;
    node.style.borderRadius = cornerCss(pose);
    outgoing.push({node, index, width, height, returnable: true, pose: {...pose}, poseVelocity: {...velocity}, offset: slideOffset, velocity: slideVelocity, target: 0});
    stage.append(node);
  }
  function dimensions(w, h) {
    if (!(w > 0 && h > 0)) return;
    // If metadata arrives during motion, keep the current on-screen width.
    if (pose) { pose.scale *= width / w; velocity.scale = (velocity.scale || 0) * width / w; }
    if (dragBase) dragBase.pose.scale *= width / w;
    width = w; height = h;
    for (const media of [image, video]) { media.style.width = `${width}px`; media.style.height = `${height}px`; }
    if (box.open) target = phase === 'closing' ? returnDestination() || {...pose, shade: 0} : viewDestination();
  }
  function showVideoWhenReady() {
    if (videoFailed) return;
    if (mode === 'video' && video.readyState >= 2 && phase === 'switching') {
      incomingReady = true; video.hidden = false; video.controls = false;
      image.hidden = true; loading.hidden = true; animate();
    }
    if (mode === 'video' && phase === 'open' && video.readyState < 2) {
      loading.textContent = 'Loading video…'; loading.hidden = false;
    }
    if (mode === 'video' && video.readyState >= 2 && phase === 'open') {
      incomingReady = true;
      video.hidden = false; video.controls = !player; image.hidden = true; loading.hidden = true;
      box.removeAttribute('data-video-loading'); player?.setActive(true);
      if (!playbackRequested && !root.hidden) {
        playbackRequested = true;
        // The gallery button is a play action. Start once a decoded frame and
        // the expansion are ready; native controls remain usable if blocked.
        try { video.play()?.catch(() => {}); } catch {}
      }
    }
  }
  function settle() {
    if (phase === 'closing') { box.close(); return; }
    slideOffset = slideVelocity = 0; removeOutgoing();
    phase = 'open'; box.dataset.state = phase; box.removeAttribute('data-fade'); showVideoWhenReady();
  }
  function tick(time) {
    frame = 0;
    if (!box.open || !target || !pose) return;
    // The spring has an exact solution, so use real elapsed time. A frame cap
    // makes a throttled background tab take seconds to finish a short return.
    const dt = Math.max(0, previousTime == null ? 0 : (time - previousTime) / 1000);
    previousTime = time;
    let settled = true;
    for (const key of keys) {
      const nextValue = springStep(pose[key], velocity[key] || 0, target[key], dt);
      pose[key] = nextValue.value; velocity[key] = nextValue.velocity;
      const pixelScale = key === 'scale' ? Math.max(width, height) : key === 'shade' ? 120 : 1;
      if (Math.abs(pose[key] - target[key]) * pixelScale > .2 || Math.abs(velocity[key]) * pixelScale > 3) settled = false;
    }
    if (slideOffset || slideVelocity) {
      const value = springStep(slideOffset, slideVelocity, 0, dt, mediaResponse.slide);
      slideOffset = value.value; slideVelocity = value.velocity;
      if (Math.abs(slideOffset) > .2 || Math.abs(slideVelocity) > 3) settled = false;
      else slideOffset = slideVelocity = 0;
    }
    outgoing = outgoing.filter(layer => {
      if (layer === closingLayer) return true;
      const value = springStep(layer.offset, layer.velocity, layer.target, dt, mediaResponse.slide);
      layer.offset = value.value; layer.velocity = value.velocity;
      const left = layer.pose.x + layer.offset, right = left + layer.width * layer.pose.scale;
      if ((right <= 0 && layer.target < 0) || (left >= viewport().width && layer.target > 0)) {
        layer.node.remove(); return false;
      }
      if (Math.abs(layer.offset - layer.target) > .2 || Math.abs(layer.velocity) > 3) {
        settled = false; return true;
      }
      layer.node.remove(); return false;
    });
    if (settled) { pose = {...target}; velocity = {}; }
    draw();
    if (settled) settle(); else frame = requestAnimationFrame(tick);
  }
  function animate() {
    if (phase === 'dragging') return;
    // Keep the last decoded frame visible while a lazy neighbour is loading.
    if (phase === 'switching' && !incomingReady) return;
    if (reduceMotion.matches || root.hidden) {
      cancelAnimationFrame(frame); frame = 0; slideOffset = slideVelocity = 0; removeOutgoing();
      pose = {...target}; velocity = {}; draw(); settle(); return;
    }
    if (!frame) {
      // Include the wait before the first frame, using the same clock as RAF.
      // Lazy media starts this clock only after its first frame is ready.
      previousTime = window.performance.now();
      frame = requestAnimationFrame(tick);
    }
  }
  function adoptVisibleFrame() {
    if (phase !== 'switching' || incomingReady) return;
    const v = viewport();
    const visibleArea = layer => {
      if (!layer.returnable) return 0;
      const x = layer.pose.x + layer.offset, y = layer.pose.y;
      return Math.max(0, Math.min(v.width, x + layer.width * layer.pose.scale) - Math.max(0, x)) *
        Math.max(0, Math.min(v.height, y + layer.height * layer.pose.scale) - Math.max(0, y));
    };
    const layer = outgoing.reduce((best, candidate) => visibleArea(candidate) > visibleArea(best || {}) ? candidate : best, null);
    if (!layer || visibleArea(layer) <= 0 || !sequence[layer.index]) return;
    const entry = sequence[layer.index];
    closingLayer = layer; index = layer.index; currentTrigger = entry.trigger; mode = entry.kind;
    width = layer.width; height = layer.height; zoomFactor = 1;
    pose = {...layer.pose, x: layer.pose.x + layer.offset};
    velocity = {...layer.poseVelocity, x: (layer.poseVelocity.x || 0) + layer.velocity};
    slideOffset = slideVelocity = 0;
    image.hidden = video.hidden = true;
    box.dataset.mode = mode;
    updateCaption(entry.item);
    hideSource();
  }
  function requestClose() {
    if (!box.open || phase === 'closing') return;
    session++; video.pause(); video.controls = false; player?.setActive(false); loading.hidden = true;
    box.removeAttribute('data-video-loading');
    gestures?.reset(); dragBase = null;
    // A lazy incoming item is still offscreen. Return the decoded frame the
    // visitor can actually see, preserving its dimensions and current velocity.
    adoptVisibleFrame();
    // Close from the image's presentation position even in the middle of a swipe.
    pose.x += slideOffset; velocity.x = (velocity.x || 0) + slideVelocity;
    slideOffset = slideVelocity = 0;
    phase = 'closing'; box.dataset.state = phase;
    // Offscreen thumbnails still have real geometry. Travel toward that source
    // without moving the gallery; only missing or invalid sources fade in place.
    const destination = returnDestination();
    box.toggleAttribute('data-fade', !destination);
    target = destination || {...pose, shade: 0};
    animate();
  }
  function cleanup() {
    session++; cancelAnimationFrame(frame); frame = 0; previousTime = null;
    phase = 'closed'; box.dataset.state = phase; root.body.classList.remove('image-open');
    restoreSource(); player?.reset(); video.pause(); video.hidden = true; video.removeAttribute('src'); video.load();
    image.onload = image.onerror = null;
    gestures?.reset(); dragBase = null; zoomFactor = 1;
    loading.hidden = true; pose = null; target = null;
    slideOffset = slideVelocity = 0; removeOutgoing();
    if (opener?.isConnected) opener.focus({preventScroll: true});
  }
  function prepare(trigger, item, kind) {
    const token = ++session, source = sourceMedia(trigger);
    gestures?.reset(); dragBase = null; zoomFactor = 1;
    currentTrigger = trigger; mode = kind; box.dataset.mode = mode;
    player?.reset(); box.toggleAttribute('data-video-loading', kind === 'video');
    video.pause(); video.hidden = true; video.controls = false; image.hidden = false;
    video.onloadedmetadata = video.onloadeddata = video.onerror = null;
    video.removeAttribute('src'); video.load();
    playbackRequested = false; videoFailed = false;
    incomingReady = false;
    video.muted = true;
    const w = Number(item.width) || source?.naturalWidth || source?.videoWidth || Number(source?.getAttribute('width')) || 1920;
    const h = Number(item.height) || source?.naturalHeight || source?.videoHeight || Number(source?.getAttribute('height')) || 1080;
    dimensions(w, h);
    updateCaption(item);
    image.alt = item.alt || item.title || 'Expanded media';
    const preview = mode === 'video' ? item.poster || source?.poster : source?.currentSrc || source?.src;
    incomingReady = Boolean(preview && source?.naturalWidth > 0);
    image.onload = () => {
      if (token !== session || !box.open || phase === 'closing') return;
      incomingReady = true;
      if (!videoFailed) loading.hidden = true;
      animate();
    };
    image.onerror = () => {
      if (token !== session || !box.open || phase === 'closing') return;
      loading.textContent = 'Image unavailable. Try the next item or close this view.'; loading.hidden = false;
    };
    image.removeAttribute('src');
    if (preview) image.src = preview; else image.hidden = true;
    loading.textContent = mode === 'video' ? 'Loading video…' : 'Loading image…'; loading.hidden = incomingReady;
    if (mode === 'video') {
      video.poster = preview || ''; video.src = item.src;
      video.onloadedmetadata = () => {
        if (token !== session || !box.open || phase === 'closing') return;
        dimensions(video.videoWidth, video.videoHeight);
        draw(); animate(); showVideoWhenReady();
      };
      video.onloadeddata = () => { if (token === session && box.open && phase !== 'closing') showVideoWhenReady(); };
      video.onerror = () => { if (token === session && box.open) { videoFailed = true; box.removeAttribute('data-video-loading'); player?.setActive(false); loading.textContent = 'Video unavailable. Close this view and try again.'; loading.hidden = false; } };
      video.load();
    } else {
      const full = new Image();
      full.onload = () => {
        if (token !== session || !box.open || phase === 'closing') return;
        image.src = item.src; image.hidden = false; loading.hidden = true; incomingReady = true;
        dimensions(full.naturalWidth, full.naturalHeight);
        draw(); animate();
      };
      full.onerror = () => { if (token === session && box.open) { loading.textContent = preview ? 'Full-resolution image unavailable.' : 'Image unavailable. Close this view and try again.'; loading.hidden = false; } };
      full.src = item.src;
    }
    hideSource();
  }
  function open(trigger, item, kind) {
    if (box.open) return;
    pose = null; velocity = {}; slideOffset = slideVelocity = 0; removeOutgoing();
    opener = trigger; phase = 'opening';
    prepare(trigger, item, kind);
    const start = origin();
    box.toggleAttribute('data-fade', !start);
    pose = start || {...contained(), shade: 0}; target = contained();
    box.dataset.state = phase; draw(); box.showModal(); root.body.classList.add('image-open');
    closeButton.focus({preventScroll: true}); animate();
  }
  function changeMedia(newIndex, cue = 'switch') {
    if (!box.open || phase === 'closing' || newIndex < 0 || newIndex >= sequence.length || newIndex === index) return;
    const direction = newIndex > index ? 1 : -1;
    const candidate = outgoing.find(layer => layer.index === newIndex);
    const startOffset = candidate ? candidate.offset : direction * viewport().width;
    const startVelocity = candidate ? candidate.velocity : 0;
    freezeCurrent();
    for (const layer of outgoing) layer.target = -direction * viewport().width;
    if (candidate) {
      candidate.node.remove(); outgoing = outgoing.filter(layer => layer !== candidate);
    }
    index = newIndex;
    const entry = sequence[index];
    prepare(entry.trigger, entry.item, entry.kind);
    // Fit each aspect ratio before translating it. Never stretch the old frame
    // into a differently shaped new photograph or artboard.
    cancelAnimationFrame(frame); frame = 0;
    target = contained();
    if (candidate) {
      // A quick reversal resumes the same visible frame, including a partially
      // expanded thumbnail mask. Resolution changes preserve its screen size.
      const ratio = candidate.width / width;
      pose = {...candidate.pose, scale: candidate.pose.scale * ratio};
      velocity = {...candidate.poseVelocity, scale: (candidate.poseVelocity.scale || 0) * ratio};
    } else {
      pose = {...target}; velocity = {};
    }
    slideOffset = startOffset; slideVelocity = startVelocity; phase = 'switching';
    box.dataset.state = phase; box.removeAttribute('data-fade'); draw(); animate();
    playUISound(cue);
  }
  function toggleZoom(point = {x: viewport().width / 2, y: viewport().height / 2}) {
    if (!box.open || phase === 'closing' || mode === 'video' || !incomingReady) return;
    const fit = contained(), maxScale = Math.min(fit.scale * 3, 1);
    if (zoomFactor <= 1.01 && maxScale <= fit.scale * 1.02) return;
    gestures?.reset(); dragBase = null;
    cancelAnimationFrame(frame); frame = 0;
    // Retarget a swipe into zoom from its actual presentation position and
    // velocity. A quick double-click must not stop the moving frame abruptly.
    pose.x += slideOffset; velocity.x = (velocity.x || 0) + slideVelocity;
    slideOffset = slideVelocity = 0; removeOutgoing();
    if (zoomFactor > 1.01) { zoomFactor = 1; target = fit; }
    else {
      zoomFactor = maxScale / fit.scale;
      target = {...zoomAround(pose, maxScale, point, width, height, viewport()), ...squareCorners(), shade: 1};
    }
    phase = 'zooming'; box.dataset.state = phase; draw(); animate(); playUISound('click');
  }
  function neighbourPreview(direction) {
    const neighbour = index + direction;
    if (neighbour < 0 || neighbour >= sequence.length || outgoing.some(layer => layer.index === neighbour)) return;
    const entry = sequence[neighbour], source = sourceMedia(entry.trigger);
    const src = entry.kind === 'video' ? entry.item.poster : source?.currentSrc || source?.src || entry.item.thumbnail || entry.item.src;
    if (!src) return;
    const w = Number(entry.item.width) || source?.naturalWidth || width;
    const h = Number(entry.item.height) || source?.naturalHeight || height;
    const node = image.cloneNode(false);
    node.removeAttribute('id'); node.removeAttribute('alt'); node.className = 'lightbox-outgoing';
    node.setAttribute('aria-hidden', 'true'); node.src = src; node.hidden = false;
    node.style.width = `${w}px`; node.style.height = `${h}px`; node.style.borderRadius = '0';
    outgoing.push({node, index: neighbour, width: w, height: h, returnable: false, pose: fitMedia(w, h), poseVelocity: {},
      offset: direction * viewport().width, velocity: 0, target: direction * viewport().width});
    stage.append(node);
  }
  function beginGesture({kind}) {
    cancelAnimationFrame(frame); frame = 0;
    if (kind === 'pan') {
      pose.x += slideOffset; slideOffset = slideVelocity = 0; removeOutgoing();
    } else { neighbourPreview(-1); neighbourPreview(1); }
    dragBase = {pose: {...pose}, offset: slideOffset};
    for (const layer of outgoing) layer.dragOffset = layer.offset;
    phase = 'dragging'; box.dataset.state = phase;
  }
  function moveGesture({kind, dx, dy, vx, vy}) {
    if (!dragBase || phase !== 'dragging') return;
    if (kind === 'pan') {
      const proposal = {...dragBase.pose, x: dragBase.pose.x + dx, y: dragBase.pose.y + dy};
      const bounded = clampPan(proposal, width, height, viewport());
      pose = {...proposal, x: bounded.x + resistedOffset(proposal.x - bounded.x, viewport().width),
        y: bounded.y + resistedOffset(proposal.y - bounded.y, viewport().height)};
      velocity.x = vx; velocity.y = vy;
    } else {
      const edge = (index === 0 && dx > 0) || (index === sequence.length - 1 && dx < 0);
      const offset = edge ? resistedOffset(dx, viewport().width) : dx;
      slideOffset = dragBase.offset + offset; slideVelocity = edge ? vx * .35 : vx;
      for (const layer of outgoing) { layer.offset = layer.dragOffset + offset; layer.velocity = slideVelocity; }
    }
    draw();
  }
  function releaseGesture({kind, dx, vx, vy, cancelled}) {
    if (!dragBase || phase !== 'dragging') return;
    dragBase = null;
    if (kind === 'pan') {
      target = clampPan({...pose, x: pose.x + vx * .08, y: pose.y + vy * .08}, width, height, viewport());
      velocity.x = vx; velocity.y = vy;
      zoomFactor = pose.scale / contained().scale;
      phase = 'zooming'; box.dataset.state = phase; animate(); return;
    }
    const step = cancelled ? 0 : swipeDestination(dx, vx, viewport().width);
    if (step && index + step >= 0 && index + step < sequence.length) { changeMedia(index + step, 'swipe'); return; }
    for (const layer of outgoing) layer.target = (layer.index < index ? -1 : 1) * viewport().width;
    if (cancelled) slideVelocity = 0;
    target = contained(); phase = 'switching'; box.dataset.state = phase; animate();
  }
  root.querySelectorAll('[data-photo]').forEach(trigger => trigger.addEventListener('click', () => {
    sequence = photos.map((item, i) => ({trigger: root.querySelector(`[data-photo="${i}"]`), item, kind: 'photo'}));
    index = Number(trigger.dataset.photo); if (photos[index]) open(trigger, photos[index], 'photo');
  }));
  projectTriggers.forEach(trigger => trigger.addEventListener('click', () => {
    sequence = projectTriggers.map(node => ({trigger: node, kind: node.dataset.video ? 'video' : 'project',
      item: {src: node.dataset.video || node.dataset.image, alt: node.dataset.alt, title: node.dataset.mediaTitle,
        status: node.dataset.mediaStatus, poster: node.dataset.poster, width: node.dataset.width, height: node.dataset.height}}));
    index = projectTriggers.indexOf(trigger);
    const entry = sequence[index]; open(trigger, entry.item, entry.kind);
  }));
  closeButton.addEventListener('click', requestClose);
  box.addEventListener('cancel', e => { e.preventDefault(); requestClose(); });
  box.addEventListener('close', cleanup);
  box.addEventListener('click', e => {
    if (e.target !== box && e.target !== stage && e.target !== scrim) return;
    if (gestures?.suppressClick()) return;
    requestClose();
  });
  previous.addEventListener('click', () => changeMedia(index - 1));
  next.addEventListener('click', () => changeMedia(index + 1));
  zoomButton?.addEventListener('click', () => toggleZoom());
  box.addEventListener('keydown', e => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.target?.closest?.('[data-player-control]') || e.target?.matches?.('video,input,textarea,select,[contenteditable]:not([contenteditable="false"])')) return;
    const destination = {ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: sequence.length - 1}[e.key];
    if (destination !== undefined && sequence.length > 1) { e.preventDefault(); changeMedia(destination); }
  });
  gestures = initMediaGestures(stage, {
    getState: () => ({enabled: box.open && phase !== 'closing' && incomingReady,
      canSwipe: sequence.length > 1, zoomed: zoomFactor > 1.01}),
    onStart: beginGesture, onMove: moveGesture, onRelease: releaseGesture, onZoom: toggleZoom
  });
  window.addEventListener('resize', () => {
    if (!box.open) return;
    const wasDragging = phase === 'dragging'; gestures?.reset(); dragBase = null;
    if (wasDragging) { pose.x += slideOffset; slideOffset = slideVelocity = 0; removeOutgoing(); phase = 'open'; }
    const destination = phase === 'closing' ? returnDestination() : null;
    if (phase === 'closing') box.toggleAttribute('data-fade', !destination);
    target = phase === 'closing' ? destination || {...pose, shade: 0} : viewDestination(); animate();
  });
  reduceMotion.addEventListener('change', () => { if (box.open) animate(); });
  root.addEventListener('visibilitychange', () => {
    if (!root.hidden) { if (box.open && phase === 'open') showVideoWhenReady(); return; }
    if (root.hidden && box.open && target) {
      gestures?.reset(); dragBase = null;
      if (phase === 'dragging') { phase = 'open'; target = viewDestination(); }
      video.pause(); playbackRequested = false;
      if (phase === 'switching' && !incomingReady) {
        cancelAnimationFrame(frame); frame = 0; return;
      }
      cancelAnimationFrame(frame); frame = 0; slideOffset = slideVelocity = 0; removeOutgoing();
      pose = {...target}; draw(); settle();
    }
  });
  return {requestClose};
}

if (typeof document !== 'undefined') initMediaViewer();
