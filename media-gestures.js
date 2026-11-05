// Continuous pointer gestures; the viewer owns presentation and spring motion.
export function clampPan(pose, width, height, viewport) {
  const result = {...pose};
  for (const [axis, size, extent, inset] of [['x', width, viewport.width, 12], ['y', height, viewport.height, 64]]) {
    const rendered = size * pose.scale, available = Math.max(1, extent - inset * 2);
    result[axis] = rendered <= available ? (extent - rendered) / 2 : Math.min(inset, Math.max(extent - inset - rendered, pose[axis]));
  }
  return result;
}

export function zoomAround(pose, scale, point, width, height, viewport) {
  const ratio = scale / pose.scale;
  return clampPan({...pose, scale, x: point.x - (point.x - pose.x) * ratio,
    y: point.y - (point.y - pose.y) * ratio}, width, height, viewport);
}

export function resistedOffset(offset, extent) {
  return offset * .55 * extent / (extent + Math.abs(offset) * .55);
}

export function swipeDestination(distance, speed, extent) {
  const projected = distance + speed * .15;
  return Math.abs(projected) >= Math.min(160, extent * .18) ? (projected < 0 ? 1 : -1) : 0;
}

export function initMediaGestures(stage, {getState, onStart, onMove, onRelease, onZoom}) {
  let active = null, suppressedUntil = 0;
  const handlers = [];
  const listen = (name, callback, options) => {
    stage.addEventListener(name, callback, options); handlers.push([name, callback, options]);
  };
  const nativeControl = target => Boolean(target?.closest?.('video,audio,button,a,input,textarea,select,[contenteditable]'));
  const time = event => Number.isFinite(event.timeStamp) ? event.timeStamp : performance.now();
  const releaseCapture = pointer => {
    try { if (stage.hasPointerCapture?.(pointer)) stage.releasePointerCapture(pointer); } catch {}
  };
  function finish(event, cancelled = false) {
    if (!active || event.pointerId !== active.id) return;
    const gesture = active; active = null;
    stage.removeAttribute('data-dragging'); releaseCapture(gesture.id);
    if (!gesture.started) return;
    suppressedUntil = Date.now() + 400;
    const fresh = time(event) - gesture.lastTime <= 90;
    onRelease({kind: gesture.kind, dx: gesture.dx, dy: gesture.dy,
      vx: cancelled || !fresh ? 0 : gesture.vx, vy: cancelled || !fresh ? 0 : gesture.vy, cancelled});
  }
  listen('pointerdown', event => {
    const state = getState();
    if (event.isPrimary !== false && (event.button == null || event.button === 0)) suppressedUntil = 0;
    if (active) {
      // A second touch belongs to the browser's pinch gesture.
      if (event.pointerId !== active.id) finish({pointerId: active.id, timeStamp: time(event)}, true);
      return;
    }
    if (!state.enabled || event.isPrimary === false || (event.button != null && event.button !== 0) || nativeControl(event.target)) return;
    if (!state.zoomed && !state.canSwipe) return;
    active = {id: event.pointerId, x: event.clientX, y: event.clientY, lastX: event.clientX,
      lastY: event.clientY, lastTime: time(event), dx: 0, dy: 0, vx: 0, vy: 0,
      started: false, kind: state.zoomed ? 'pan' : 'swipe'};
  });
  listen('pointermove', event => {
    if (!active || event.pointerId !== active.id) return;
    const gesture = active, dx = event.clientX - gesture.x, dy = event.clientY - gesture.y;
    if (!gesture.started) {
      if (Math.hypot(dx, dy) < 10) return;
      if (gesture.kind === 'swipe' && Math.abs(dx) < Math.abs(dy) * 1.2) { active = null; return; }
      gesture.started = true;
      try { stage.setPointerCapture(gesture.id); } catch {}
      stage.setAttribute('data-dragging', gesture.kind); onStart({kind: gesture.kind});
    }
    event.preventDefault();
    const dt = Math.max(.008, (time(event) - gesture.lastTime) / 1000);
    gesture.vx = Math.max(-3000, Math.min(3000, (event.clientX - gesture.lastX) / dt));
    gesture.vy = Math.max(-3000, Math.min(3000, (event.clientY - gesture.lastY) / dt));
    gesture.lastX = event.clientX; gesture.lastY = event.clientY; gesture.lastTime = time(event);
    gesture.dx = dx; gesture.dy = dy;
    onMove({kind: gesture.kind, dx, dy, vx: gesture.vx, vy: gesture.vy});
  }, {passive: false});
  listen('pointerup', event => finish(event));
  listen('pointercancel', event => finish(event, true));
  listen('lostpointercapture', event => finish(event, true));
  listen('dragstart', event => { if (event.target?.tagName === 'IMG') event.preventDefault(); });
  listen('click', event => {
    if (Date.now() >= suppressedUntil) return;
    event.preventDefault(); event.stopPropagation();
  }, true);
  listen('dblclick', event => {
    if (Date.now() < suppressedUntil || !getState().enabled || nativeControl(event.target) || event.target?.tagName !== 'IMG') return;
    event.preventDefault(); onZoom({x: event.clientX, y: event.clientY});
  });
  return {
    suppressClick: () => Date.now() < suppressedUntil,
    reset() {
      const gesture = active; active = null;
      stage.removeAttribute('data-dragging');
      if (gesture) { releaseCapture(gesture.id); if (gesture.started) suppressedUntil = Date.now() + 400; }
    },
    destroy() { this.reset(); handlers.forEach(([name, callback, options]) => stage.removeEventListener(name, callback, options)); }
  };
}
