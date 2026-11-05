// Pure, bounded helpers for the custom player and detected scene timeline.
export function formatVideoTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00';
  const seconds = Math.floor(value);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}` : `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
}

export function videoAssetKey(value, base) {
  try {
    const source = new URL(value, base), origin = new URL(base);
    if (source.origin !== origin.origin || !['http:', 'https:'].includes(source.protocol)) return null;
    const marker = '/assets/', offset = source.pathname.lastIndexOf(marker);
    if (offset < 0) return null;
    const path = decodeURIComponent(source.pathname.slice(offset + marker.length));
    return /^[A-Za-z0-9_./-]{1,240}\.(mp4|webm)$/.test(path) && !path.split('/').some(part => !part || part === '.' || part === '..') ? path : null;
  } catch { return null; }
}

export function normaliseVideoChapters(record, duration) {
  if (!Number.isFinite(duration) || duration <= 0) return [];
  const fallback = [{start: 0, end: duration, title: 'Full demonstration'}];
  if (!record || !Array.isArray(record.segments) || record.segments.length < 2 || record.segments.length > 100 ||
      !Number.isFinite(record.duration) || Math.abs(record.duration - duration) > Math.max(1, duration * .01)) return fallback;
  const starts = [];
  for (const item of record.segments) {
    if (!item || !Number.isFinite(item.start) || item.start < 0 || item.start >= duration ||
        typeof item.title !== 'string' || !item.title.trim() || item.title.length > 120 || /[\x00-\x1f\x7f]/.test(item.title) ||
        (starts.length && item.start <= starts.at(-1).start)) return fallback;
    starts.push({start: item.start, title: item.title.trim()});
  }
  if (starts[0].start !== 0) return fallback;
  return starts.map((item, index) => ({...item, end: starts[index + 1]?.start ?? duration}));
}

export function chapterAt(chapters, time) {
  if (!chapters.length) return null;
  let selected = chapters[0];
  for (const chapter of chapters) {
    if (time < chapter.start) break;
    selected = chapter;
  }
  return selected;
}

export function clampVideoSeek(value, duration) {
  return Number.isFinite(value) && Number.isFinite(duration) && duration > 0 ? Math.max(0, Math.min(duration, value)) : 0;
}

export function pointerSeek(clientX, rect, duration) {
  if (!rect || !(rect.width > 0) || !Number.isFinite(clientX)) return 0;
  return clampVideoSeek((clientX - rect.left) / rect.width * duration, duration);
}
