// Geometry and a critically damped spring for the image-origin viewer.
// One uniform scale preserves the complete media ratio throughout the transition.
export const cornerKeys = ['radiusTLX', 'radiusTLY', 'radiusTRX', 'radiusTRY', 'radiusBRX', 'radiusBRY', 'radiusBLX', 'radiusBLY'];
export const squareCorners = () => Object.fromEntries(cornerKeys.map(key => [key, 0]));

// Radii live in screen pixels, independent of the media's native resolution.
export function resolveCornerRadii(style, width, height) {
  const result = squareCorners();
  const properties = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'];
  const pixels = (value, basis) => {
    const number = parseFloat(value) || 0;
    return Math.max(0, String(value).endsWith('%') ? number * basis / 100 : number);
  };
  properties.forEach((property, index) => {
    const values = String(style[property] || '0').trim().split(/\s+/);
    result[cornerKeys[index * 2]] = pixels(values[0], width);
    result[cornerKeys[index * 2 + 1]] = pixels(values[1] || values[0], height);
  });
  // Match CSS's common reduction factor when adjacent radii would overlap.
  const factor = Math.min(1,
    width / (result.radiusTLX + result.radiusTRX || 1),
    width / (result.radiusBLX + result.radiusBRX || 1),
    height / (result.radiusTLY + result.radiusBLY || 1),
    height / (result.radiusTRY + result.radiusBRY || 1));
  for (const key of cornerKeys) result[key] *= factor;
  return result;
}

export function cornerCss(pose) {
  const scale = Math.max(.001, pose.scale);
  const radius = key => `${Math.max(0, pose[key] || 0) / scale}px`;
  return cornerKeys.filter((_, index) => index % 2 === 0).map(radius).join(' ') + ' / ' +
    cornerKeys.filter((_, index) => index % 2 === 1).map(radius).join(' ');
}

export function containMedia(width, height, viewportWidth, viewportHeight, inset = 64) {
  const w = Math.max(1, width), h = Math.max(1, height);
  const padX = typeof inset === 'number' ? inset : inset.x;
  const padY = typeof inset === 'number' ? inset : inset.y;
  const scale = Math.max(.001, Math.min(1, (viewportWidth - padX * 2) / w, (viewportHeight - padY * 2) / h));
  return {x: (viewportWidth - w * scale) / 2, y: (viewportHeight - h * scale) / 2, scale, shade: 1, ...squareCorners()};
}

// Exact solution of a critically damped spring; velocity survives retargeting.
// A slightly softer response gives expansion/zoom a longer settling tail while
// keeping more than half of the travel within the first 100 ms.
export const mediaResponse = Object.freeze({geometry: .36, slide: .34});
export function springStep(value, velocity, target, seconds, response = mediaResponse.geometry) {
  const dt = Math.max(0, seconds);
  const omega = 2 * Math.PI / response;
  const displacement = value - target;
  const c = velocity + omega * displacement;
  const decay = Math.exp(-omega * dt);
  return {
    value: target + (displacement + c * dt) * decay,
    velocity: (velocity - omega * c * dt) * decay
  };
}

export function originPose(rect, width, height, viewportWidth, viewportHeight, radii = squareCorners(), {allowOffscreen = false} = {}) {
  if (!rect || ![rect.left, rect.top, rect.width, rect.height, width, height, viewportWidth, viewportHeight].every(Number.isFinite) ||
      ![rect.left + rect.width, rect.top + rect.height].every(Number.isFinite) ||
      rect.width <= 0 || rect.height <= 0 || width <= 0 || height <= 0 || viewportWidth <= 0 || viewportHeight <= 0) return null;
  if (!allowOffscreen && (rect.left + rect.width <= 0 || rect.top + rect.height <= 0 || rect.left >= viewportWidth || rect.top >= viewportHeight)) return null;
  const mediaRatio = width / height, sourceRatio = rect.width / rect.height, scale = rect.width / width;
  if (![mediaRatio, sourceRatio, scale].every(value => Number.isFinite(value) && value > 0) ||
      Math.abs(sourceRatio - mediaRatio) / mediaRatio > .025) return null;
  return {x: rect.left, y: rect.top, scale, shade: 0, ...radii};
}

// Very distant thumbnails still determine the exit direction. Finish just
// beyond the viewport so a long gallery cannot throw the image away in one
// frame; its final scale and mask remain those of the real thumbnail.
export function returnPose(destination, current, width, height, viewportWidth, viewportHeight) {
  if (!destination || !current) return destination;
  const halfWidth = width * destination.scale / 2, halfHeight = height * destination.scale / 2;
  const x = current.x + width * current.scale / 2, y = current.y + height * current.scale / 2;
  const dx = destination.x + halfWidth - x, dy = destination.y + halfHeight - y;
  if (![halfWidth, halfHeight, x, y, dx, dy, viewportWidth, viewportHeight].every(Number.isFinite) ||
      viewportWidth <= 0 || viewportHeight <= 0) return destination;
  const offscreen = destination.x + halfWidth * 2 <= 0 || destination.y + halfHeight * 2 <= 0 ||
    destination.x >= viewportWidth || destination.y >= viewportHeight;
  if (!offscreen || Math.hypot(dx, dy) <= Math.max(viewportWidth, viewportHeight) * 2) return destination;
  const exits = [];
  if (dx > 0) exits.push((viewportWidth + halfWidth + 24 - x) / dx);
  else if (dx < 0) exits.push((-halfWidth - 24 - x) / dx);
  if (dy > 0) exits.push((viewportHeight + halfHeight + 24 - y) / dy);
  else if (dy < 0) exits.push((-halfHeight - 24 - y) / dy);
  const candidates = exits.filter(value => value > 0 && value < 1);
  if (!candidates.length) return destination;
  const progress = Math.min(...candidates);
  return {...destination, x: x + dx * progress - halfWidth, y: y + dy * progress - halfHeight};
}
