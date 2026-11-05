import { initializeTrustCounters } from './trust-counter.js';

export function validLikeState(value) {
  return value && typeof value === 'object' && !Array.isArray(value)
    && Object.keys(value).length === 3 && value.schema_version === 1
    && Number.isSafeInteger(value.count) && value.count >= 0 && typeof value.liked === 'boolean'
    && (!value.liked || value.count > 0);
}

export async function initializePortfolioLikes(doc = globalThis.document) {
  const section = doc?.querySelector?.('[data-portfolio-likes]');
  if (!section || section.dataset.likeInitialized) return;
  section.dataset.likeInitialized = 'true';
  const button = section.querySelector('[data-portfolio-like]');
  const output = section.querySelector('[data-portfolio-like-total]');
  const externalNode = section.querySelector('[data-trust-total]');
  const status = section.querySelector('[data-portfolio-like-status]');
  if (!button || !output || !externalNode || !status) return;
  let internal = 0, liked = false, busy = false, generation = 0;
  const endpoint = new URL(section.dataset.portfolioLikes, doc.baseURI);
  if (endpoint.origin !== new URL(doc.baseURI).origin) return;
  function paint() {
    const external = Number(externalNode.textContent.replaceAll(',', '').trim());
    if (!Number.isSafeInteger(external) || external < 0 || !Number.isSafeInteger(external + internal)) return;
    output.textContent = new Intl.NumberFormat('en-US').format(external + internal);
    button.setAttribute('aria-pressed', String(liked));
    const action = liked ? 'Remove your portfolio like' : 'Like this portfolio';
    const label = `${action}. ${external.toLocaleString('en-US')} verified external reactions and ${internal.toLocaleString('en-US')} portfolio likes.`;
    button.setAttribute('aria-label', label);
    button.title = label;
  }
  async function read(likedValue) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    try {
      const response = await fetch(endpoint, { method: likedValue === undefined ? 'GET' : 'POST',
        credentials: 'same-origin', mode: 'same-origin', cache: 'no-store', redirect: 'error',
        headers: { Accept: 'application/json', ...(likedValue === undefined ? {} : { 'Content-Type': 'application/json' }) },
        ...(likedValue === undefined ? {} : { body: JSON.stringify({ liked: likedValue }) }), signal: controller.signal });
      if (!response.ok || !/^application\/json\b/i.test(response.headers.get('content-type') || '')) throw Error('Unavailable');
      const body = await response.text();
      if (body.length > 256) throw Error('Invalid response');
      const data = JSON.parse(body);
      if (!validLikeState(data)) throw Error('Invalid response');
      return data;
    } finally { clearTimeout(timer); }
  }
  function apply(data, version) {
    if (version !== generation) return;
    internal = data.count; liked = data.liked; paint();
  }
  // Wait for the visitor cookie before the first write. A late read cannot undo
  // a click, and retrying an uncertain write always sends the same desired state.
  const ready = read().then(data => apply(data, 0)).catch(paint);
  button.addEventListener('click', async () => {
    if (busy) return;
    const desired = !liked, version = ++generation;
    busy = true; button.setAttribute('aria-busy', 'true'); status.textContent = '';
    try {
      await ready;
      apply(await read(desired), version);
      status.textContent = liked ? 'Thanks for your like.' : 'Your like was removed.';
    } catch {
      status.textContent = 'Could not save your like. Please try again.';
    } finally { busy = false; button.removeAttribute('aria-busy'); }
  });
  const observer = new MutationObserver(paint);
  observer.observe(externalNode, { childList: true, characterData: true, subtree: true });
  void initializeTrustCounters().then(paint);
  globalThis.addEventListener?.('pageshow', event => {
    if (!event.persisted || busy) return;
    const version = ++generation;
    void ready.then(() => read()).then(data => apply(data, version)).catch(() => {});
  });
  await ready;
}

if (globalThis.document?.querySelector) void initializePortfolioLikes();
