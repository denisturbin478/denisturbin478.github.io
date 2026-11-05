/* Read a public, same-origin cache once. Retain verified static values on failure. */
export const METRIC_IDS = Object.freeze([
  'contra_overall_likes_received',
  'behance_profile_appreciations',
  'threads_portfolio_likes',
]);

const allowedIds = new Set(METRIC_IDS);
const initializedDocuments = new WeakMap();
const numberFormat = new Intl.NumberFormat('en-US');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const maxCacheBytes = 65536;

function formatDate(epochMs) {
  const date = new Date(epochMs);
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function object(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && [Object.prototype, null].includes(Object.getPrototypeOf(value));
}

function exactKeys(value, expected) {
  return object(value) && Object.keys(value).length === expected.length
    && expected.every(key => Object.hasOwn(value, key));
}

function utcStamp(value, nowMs) {
  if (typeof value !== 'string' || !Number.isFinite(nowMs)) return null;
  const match = /^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})(?:\.(\d{1,6}))?(?:Z|\+00:00)$/.exec(value);
  if (!match) return null;
  const epochMs = Date.parse(value);
  if (!Number.isFinite(epochMs)) return null;
  const date = new Date(epochMs);
  if (date.toISOString().slice(0, 19) !== match[1]) return null;
  const fraction = (match[2] || '').padEnd(6, '0');
  if (epochMs > nowMs || (epochMs === nowMs && /[1-9]/.test(fraction.slice(3)))) return null;
  return { utc: `${match[1]}.${fraction}Z`, epochMs };
}

/** Validate the envelope and each allowlisted record. Unknown IDs are ignored. */
export function validateCache(payload, nowMs = Date.now()) {
  if (!exactKeys(payload, ['schema_version', 'metrics']) || payload.schema_version !== 1
      || !object(payload.metrics) || !Number.isFinite(nowMs)) return null;
  const metrics = Object.create(null);
  for (const id of METRIC_IDS) {
    if (!Object.hasOwn(payload.metrics, id)) continue;
    const item = payload.metrics[id];
    if (!exactKeys(item, ['value', 'observed_at'])
        || !Number.isSafeInteger(item.value) || item.value < 0) continue;
    const stamp = utcStamp(item.observed_at, nowMs);
    if (stamp) metrics[id] = Object.freeze({ value: item.value, observed_at: stamp.utc });
  }
  return Object.freeze({ schema_version: 1, metrics: Object.freeze(metrics) });
}

function displayedCount(value) {
  if (typeof value !== 'string') return null;
  const text = value.trim();
  if (!/^(?:0|[1-9]\d*|[1-9]\d{0,2}(?:,\d{3})+)$/.test(text)) return null;
  const count = Number(text.replaceAll(',', ''));
  return Number.isSafeInteger(count) && count >= 0 ? count : null;
}

function totalFromAnchors(anchors, nowMs) {
  const grouped = new Map(METRIC_IDS.map(id => [id, []]));
  for (const anchor of anchors) {
    const id = anchor.getAttribute('data-trust-metric');
    if (grouped.has(id)) grouped.get(id).push(anchor);
  }
  let value = 0, oldest = null;
  for (const id of METRIC_IDS) {
    const matches = grouped.get(id);
    // A missing or repeated source never becomes a partial or doubled total.
    if (matches.length !== 1) return null;
    const anchor = matches[0];
    const count = displayedCount(anchor.querySelector('strong[data-trust-value]')?.textContent);
    const stamp = utcStamp(anchor.getAttribute('data-trust-observed-at'), nowMs);
    if (count === null || !stamp || !Number.isSafeInteger(value + count)) return null;
    value += count;
    if (!oldest || stamp.utc < oldest.utc) oldest = stamp;
  }
  return Object.freeze({ value, observed_at: oldest.utc, checked_at: oldest.utc.slice(0, 10), epochMs: oldest.epochMs });
}

/** Sum the three displayed, dated sources once each. Never infer a lifetime total. */
export function deriveTrustTotal(section, nowMs = Date.now()) {
  if (!section || typeof section.querySelectorAll !== 'function' || !Number.isFinite(nowMs)) return null;
  return totalFromAnchors([...section.querySelectorAll('[data-trust-metric]')], nowMs);
}

function totalSlot(section) {
  // The total is optional on earlier documents; their per-source refresh remains usable.
  try { return section.querySelector?.('strong[data-trust-total]') || null; }
  catch { return null; }
}

/** Update existing numeric slots only. Never insert, remove or hide a metric. */
export function applyCache(section, payload, nowMs = Date.now()) {
  const cache = validateCache(payload, nowMs);
  if (!cache || !section || typeof section.querySelectorAll !== 'function') {
    return { status: 'invalid-cache', updated: [], checked_at: null };
  }
  const anchors = [...section.querySelectorAll('[data-trust-metric]')];
  const occurrences = new Map();
  for (const anchor of anchors) {
    const id = anchor.getAttribute('data-trust-metric');
    occurrences.set(id, (occurrences.get(id) || 0) + 1);
  }
  const plans = [];
  for (const anchor of anchors) {
    const id = anchor.getAttribute('data-trust-metric');
    if (!allowedIds.has(id) || occurrences.get(id) !== 1 || !Object.hasOwn(cache.metrics, id)) continue;
    const before = utcStamp(anchor.getAttribute('data-trust-observed-at'), nowMs);
    const after = utcStamp(cache.metrics[id].observed_at, nowMs);
    const valueNode = anchor.querySelector('strong[data-trust-value]');
    const label = anchor.getAttribute('data-trust-label');
    if (!before || !after || after.utc <= before.utc || !valueNode
        || typeof label !== 'string' || !label.trim() || label.length > 256) continue;
    plans.push({ anchor, id, after, valueNode, label, value: cache.metrics[id].value });
  }
  for (const plan of plans) {
    const count = numberFormat.format(plan.value);
    plan.valueNode.textContent = count;
    plan.anchor.setAttribute('data-trust-observed-at', plan.after.utc);
    plan.anchor.setAttribute('aria-label', `${count} ${plan.label}. Checked ${formatDate(plan.after.epochMs)}`);
  }
  let checkedAt = null;
  const totalNode = totalSlot(section);
  const total = totalNode ? totalFromAnchors(anchors, nowMs) : null;
  if (total) {
    const count = numberFormat.format(total.value);
    const label = `${count} verified likes and appreciations across Contra, Behance and the linked Threads portfolio post. Verified through ${formatDate(total.epochMs)}.`;
    if (totalNode.textContent !== count) totalNode.textContent = count;
    if (totalNode.getAttribute('data-trust-observed-at') !== total.observed_at) totalNode.setAttribute('data-trust-observed-at', total.observed_at);
    if (totalNode.getAttribute('aria-label') !== label) totalNode.setAttribute('aria-label', label);
    const time = section.querySelector('time[data-trust-checked]');
    checkedAt = total.checked_at;
    if (time) {
      if (time.getAttribute('datetime') !== checkedAt) time.setAttribute('datetime', checkedAt);
      const label = formatDate(total.epochMs);
      if (time.textContent !== label) time.textContent = label;
    }
  } else if (!totalNode && plans.length) {
    // Missing or invalid dates never make all displayed values appear fresh.
    const stamps = anchors.map(anchor => utcStamp(anchor.getAttribute('data-trust-observed-at'), nowMs));
    const time = section.querySelector('time[data-trust-checked]');
    if (time && stamps.length && stamps.every(Boolean)) {
      const oldest = stamps.reduce((a, b) => a.utc < b.utc ? a : b);
      checkedAt = oldest.utc.slice(0, 10);
      time.setAttribute('datetime', checkedAt);
      time.textContent = formatDate(oldest.epochMs);
    }
  }
  return { status: plans.length ? 'updated' : 'unchanged', updated: plans.map(plan => plan.id), checked_at: checkedAt };
}

function cacheUrl(section, location, document) {
  try {
    const base = new URL(location?.href || document.baseURI);
    const url = new URL(section.getAttribute('data-trust-cache'), base);
    if (!['https:', 'http:'].includes(base.protocol) || url.origin !== base.origin
        || url.username || url.password || url.hash
        || !url.pathname.endsWith('/assets/trust/metrics.json')) return null;
    return url.href;
  } catch {
    return null;
  }
}

/** One bounded public-cache request per document, with no session credentials. */
export function initializeTrustCounters({
  document = globalThis.document, location = globalThis.location,
  fetch = globalThis.fetch, now = Date.now, timeoutMs = 4000,
} = {}) {
  if (!document || typeof document.querySelector !== 'function') {
    return Promise.resolve({ status: 'no-section', updated: [], checked_at: null });
  }
  if (initializedDocuments.has(document)) return initializedDocuments.get(document);
  const section = document.querySelector('.profile-trust[data-trust-cache]');
  if (!section) return Promise.resolve({ status: 'no-section', updated: [], checked_at: null });
  const url = cacheUrl(section, location, document);
  if (!url || typeof fetch !== 'function') {
    const result = Promise.resolve({ status: 'unavailable', updated: [], checked_at: null });
    initializedDocuments.set(document, result);
    return result;
  }
  const delay = Number.isInteger(timeoutMs) && timeoutMs > 0 ? Math.min(timeoutMs, 10000) : 4000;
  const result = (async () => {
    const controller = new AbortController();
    let timer;
    try {
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => {
          controller.abort();
          reject(new Error('Cache timeout'));
        }, delay);
      });
      const read = (async () => {
        const response = await fetch(url, {
          method: 'GET', mode: 'same-origin', credentials: 'omit', redirect: 'error',
          cache: 'no-store', headers: { Accept: 'application/json' }, signal: controller.signal,
        });
        if (!response.ok) throw new Error('Cache unavailable');
        const type = response.headers?.get('content-type');
        if (type && !/^application\/(?:[\w.+-]+\+)?json(?:\s*;|$)/i.test(type)) throw new Error('Cache format');
        const body = await response.text();
        if (new TextEncoder().encode(body).byteLength > maxCacheBytes) throw new Error('Cache size');
        return JSON.parse(body);
      })();
      const payload = await Promise.race([read, timeout]);
      return applyCache(section, payload, now());
    } catch {
      return { status: 'unavailable', updated: [], checked_at: null };
    } finally {
      clearTimeout(timer);
    }
  })();
  initializedDocuments.set(document, result);
  return result;
}

// ESM runs after parsing; the guard also supports early inclusion and Node import.
if (globalThis.document?.querySelector) {
  if (globalThis.document.readyState === 'loading') {
    globalThis.document.addEventListener('DOMContentLoaded', () => { void initializeTrustCounters(); }, { once: true });
  } else {
    void initializeTrustCounters();
  }
}
