// Explicit user action only. Clipboard contents are never read.
const instances = new WeakMap();

function fallbackCopy(text, doc) {
  if (!doc.body || typeof doc.execCommand !== 'function') return false;
  const focused = doc.activeElement;
  const ranges = [];
  let selection, inputSelection;
  try {
    selection = doc.getSelection?.();
    for (let i = 0; i < (selection?.rangeCount || 0); i++) ranges.push(selection.getRangeAt(i).cloneRange());
    if (typeof focused?.selectionStart === 'number') {
      inputSelection = [focused.selectionStart, focused.selectionEnd, focused.selectionDirection];
    }
  } catch { /* Copy can proceed even if selection cannot be inspected. */ }
  const area = doc.createElement('textarea');
  area.value = text;
  area.readOnly = true;
  area.tabIndex = -1;
  area.setAttribute('aria-hidden', 'true');
  area.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;padding:0;border:0;opacity:0;font-size:16px;pointer-events:none';
  try {
    doc.body.append(area);
    area.focus({ preventScroll: true });
    area.select();
    area.setSelectionRange(0, text.length);
    return doc.execCommand('copy') === true;
  } catch {
    return false;
  } finally {
    area.remove();
    try { if (focused?.isConnected) focused.focus({ preventScroll: true }); } catch { /* Preserve copy result. */ }
    try {
      if (selection) {
        selection.removeAllRanges();
        ranges.forEach(range => selection.addRange(range));
      }
      if (inputSelection && focused?.isConnected) focused.setSelectionRange(...inputSelection);
    } catch { /* A removed selection or input does not invalidate a successful copy. */ }
  }
}

export async function copyEmail(text, doc = document, nav = doc.defaultView?.navigator, isCurrent = () => true) {
  if (!text || !isCurrent()) return false;
  try {
    if (typeof nav?.clipboard?.writeText === 'function') {
      await nav.clipboard.writeText(text);
      return true;
    }
  } catch { /* Embedded browsers may deny the async API; use the user-triggered fallback. */ }
  return isCurrent() ? fallbackCopy(text, doc) : false;
}

export function initEmailCopy(root = document) {
  if (instances.has(root)) return instances.get(root);
  const doc = root.ownerDocument || root;
  const win = doc.defaultView;
  const states = [];
  let alive = true;
  function render(state, value) {
    state.button.setAttribute('data-state', value);
    const label = value === 'success' ? `Copied. ${state.button.dataset.copyEmail}` :
      value === 'error' ? 'Could not copy. Try again or copy the address manually.' :
      value === 'loading' ? 'Copying email…' : state.idleLabel;
    state.button.setAttribute('aria-label', label);
    if (state.idleLang) state.button.setAttribute('lang', state.idleLang);
    else state.button.removeAttribute('lang');
    if (value === 'loading') state.button.setAttribute('aria-disabled', 'true');
    else state.button.removeAttribute('aria-disabled');
    if (value === 'idle') state.control.removeAttribute('data-copy-state');
    else state.control.dataset.copyState = value;
  }
  const reset = state => {
    state.generation++;
    state.pending = false;
    win.clearTimeout(state.timer);
    state.timer = 0;
    state.button.removeAttribute('aria-busy');
    render(state, 'idle');
    state.status.textContent = '';
  };
  root.querySelectorAll('button[data-copy-email]').forEach(button => {
    const control = button.closest('.email-copy-control');
    const status = control?.querySelector('.email-copy-feedback');
    if (!status) return;
    const state = { button, control, status, generation: 0, pending: false, timer: 0,
      idleLabel: button.getAttribute?.('aria-label') || `Copy email address ${button.dataset.copyEmail}`,
      idleLang: button.getAttribute?.('lang') || null };
    state.click = async () => {
      if (!alive || state.pending) return;
      reset(state);
      const generation = state.generation;
      state.pending = true;
      button.setAttribute('aria-busy', 'true');
      render(state, 'loading');
      const copied = await copyEmail(button.dataset.copyEmail, doc, win.navigator,
        () => alive && generation === state.generation && button.isConnected);
      if (!alive || generation !== state.generation || !button.isConnected) return;
      state.pending = false;
      button.removeAttribute('aria-busy');
      render(state, copied ? 'success' : 'error');
      status.textContent = copied ? 'Copied' : 'Could not copy. Copy manually.';
      state.timer = win.setTimeout(() => reset(state), copied ? 2200 : 5000);
    };
    button.addEventListener('click', state.click);
    render(state, 'idle');
    states.push(state);
  });
  const clear = () => states.forEach(reset);
  win?.addEventListener('pagehide', clear);
  win?.addEventListener('pageshow', clear);
  const instance = {
    destroy() {
      if (!alive) return;
      alive = false;
      clear();
      states.forEach(state => state.button.removeEventListener('click', state.click));
      win?.removeEventListener('pagehide', clear);
      win?.removeEventListener('pageshow', clear);
      instances.delete(root);
    },
  };
  instances.set(root, instance);
  return instance;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initEmailCopy(), { once: true });
  else initEmailCopy();
}
