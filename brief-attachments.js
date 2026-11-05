import { mergeAttachments, attachmentMetadata, fileKey, formatAttachmentSize } from './brief-attachments-model.js';

const instances = new WeakMap();
const selector = '[data-brief-attachments]';

function isFileDrag(event) {
  const transfer = event.dataTransfer;
  if (!transfer) return false;
  return Array.from(transfer.types || []).includes('Files') ||
    Array.from(transfer.items || []).some(item => item.kind === 'file') || transfer.files?.length > 0;
}

export function initBriefAttachments(rootElement) {
  if (!rootElement?.querySelector) return null;
  const root = rootElement.matches?.(selector) ? rootElement : rootElement.querySelector(selector);
  if (!root) return null;
  if (instances.has(root)) return instances.get(root);
  const input = root.querySelector('[data-brief-file-input]');
  const zone = root.querySelector('[data-brief-file-dropzone]');
  const list = root.querySelector('[data-brief-file-list]');
  const status = root.querySelector('[data-brief-file-status]');
  if (!input || !zone || !list || !status) return null;
  const doc = root.ownerDocument;
  const win = doc?.defaultView;
  const form = root.closest?.('form');
  let selected = [], dragDepth = 0, alive = true;
  const listeners = [];
  const listen = (target, type, handler) => {
    target?.addEventListener?.(type, handler);
    listeners.push(() => target?.removeEventListener?.(type, handler));
  };

  function clearDrag() {
    dragDepth = 0;
    zone.removeAttribute('data-dragging');
  }

  function emitChange() {
    const CustomEventCtor = win?.CustomEvent || globalThis.CustomEvent;
    if (!alive || !CustomEventCtor) return;
    root.dispatchEvent(new CustomEventCtor('brief-attachments-change', {
      bubbles: true,
      detail: {
        files: selected.map(attachmentMetadata), count: selected.length,
        totalBytes: selected.reduce((sum, file) => sum + file.size, 0),
      },
    }));
  }

  function render() {
    const rows = selected.map(file => {
      const row = doc.createElement('li'); row.className = 'brief-file-row';
      const mark = doc.createElement('span'); mark.className = 'brief-file-ready-mark'; mark.setAttribute('aria-hidden', 'true');
      const information = doc.createElement('span'); information.className = 'brief-file-information';
      const name = doc.createElement('span'); name.className = 'brief-file-name'; name.textContent = file.name; name.title = file.name;
      const meta = doc.createElement('span'); meta.className = 'brief-file-meta'; meta.textContent = `${formatAttachmentSize(file.size)} · Ready to share`;
      information.append(name, meta);
      const remove = doc.createElement('button'); remove.className = 'brief-file-remove'; remove.type = 'button';
      remove.setAttribute('data-brief-file-remove', fileKey(file)); remove.setAttribute('aria-label', `Remove ${file.name}`);
      row.append(mark, information, remove);
      return row;
    });
    list.replaceChildren(...rows);
    list.hidden = rows.length === 0;
    root.setAttribute('data-file-count', String(rows.length));
  }

  function clearSelection({ emit = true, restoreFocus = true } = {}) {
    const changed = selected.length > 0;
    const hadListFocus = list.contains?.(doc.activeElement);
    selected = [];
    input.value = '';
    clearDrag(); render(); status.textContent = '';
    if (restoreFocus && hadListFocus) input.focus?.({ preventScroll: true });
    if (changed && emit) emitChange();
  }

  function acceptBatch(files) {
    if (!alive) return;
    const previous = selected.map(fileKey), result = mergeAttachments(selected, files);
    selected = result.files;
    const changed = previous.length !== selected.length || selected.some((file, index) => fileKey(file) !== previous[index]);
    if (changed) render();
    const messages = [];
    if (result.added.length) messages.push(`${result.added.length} ${result.added.length === 1 ? 'file' : 'files'} ready to share.`);
    if (result.duplicates.length) messages.push(`${result.duplicates.length === 1 ? 'That file is' : `${result.duplicates.length} files are`} already selected.`);
    if (result.rejected.length) {
      messages.push(`${result.rejected.length} ${result.rejected.length === 1 ? 'file was' : 'files were'} not added.`);
      messages.push(...[...new Set(result.rejected.map(item => item.error))].slice(0, 2));
    }
    status.textContent = messages.join(' ') || 'No files were selected. Choose individual files to attach.';
    if (changed) emitChange();
  }

  listen(input, 'change', () => {
    if (!alive) return;
    const files = Array.from(input.files || []);
    // Clear the native value immediately so choosing the same file fires change again.
    input.value = '';
    if (files.length) acceptBatch(files);
  });
  listen(zone, 'dragenter', event => {
    if (!alive || !isFileDrag(event)) return;
    event.preventDefault(); dragDepth += 1; zone.setAttribute('data-dragging', 'true');
  });
  listen(zone, 'dragover', event => {
    if (!alive || !isFileDrag(event)) return;
    event.preventDefault();
    try { event.dataTransfer.dropEffect = 'copy'; } catch { /* Some browsers expose a read-only transfer. */ }
    zone.setAttribute('data-dragging', 'true');
  });
  listen(zone, 'dragleave', () => {
    dragDepth = Math.max(0, dragDepth - 1);
    if (!dragDepth) zone.removeAttribute('data-dragging');
  });
  listen(zone, 'drop', event => {
    if (!alive || !isFileDrag(event)) return;
    event.preventDefault(); clearDrag();
    acceptBatch(Array.from(event.dataTransfer.files || []));
  });
  listen(zone, 'dragend', clearDrag);
  listen(zone, 'pointercancel', clearDrag);
  listen(list, 'click', event => {
    if (!alive) return;
    const button = event.target.closest?.('[data-brief-file-remove]');
    if (!button || !list.contains(button)) return;
    const index = selected.findIndex(file => fileKey(file) === button.getAttribute('data-brief-file-remove'));
    if (index < 0) return;
    const removed = selected[index], focused = doc.activeElement === button || button.contains?.(doc.activeElement);
    selected = selected.filter((_, candidate) => candidate !== index);
    render(); status.textContent = `Removed ${removed.name}.`;
    if (focused) {
      const controls = list.querySelectorAll('[data-brief-file-remove]');
      (controls[Math.min(index, controls.length - 1)] || input).focus?.({ preventScroll: true });
    }
    emitChange();
  });
  listen(form, 'reset', () => clearSelection());
  listen(win, 'pagehide', () => clearSelection({ restoreFocus: false }));
  input.value = ''; render(); status.textContent = '';

  const controller = {
    files() { return selected.slice(); },
    clear() { if (alive) clearSelection(); },
    destroy() {
      if (!alive) return;
      clearSelection({ emit: false, restoreFocus: false });
      alive = false;
      listeners.splice(0).forEach(remove => remove());
      if (instances.get(root) === controller) instances.delete(root);
    },
  };
  instances.set(root, controller);
  return controller;
}
