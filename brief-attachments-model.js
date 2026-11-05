// Local selection metadata only. These checks do not inspect or upload file contents.
export const ATTACHMENT_LIMITS = Object.freeze({
  maxFiles: 3, maxFileBytes: 10 * 1024 * 1024, maxTotalBytes: 25 * 1024 * 1024,
});
export const ACCEPTED_EXTENSIONS = Object.freeze(['pdf', 'docx', 'txt', 'md', 'png', 'jpg', 'jpeg', 'webp']);
export const ATTACHMENT_ACCEPT = ACCEPTED_EXTENSIONS.map(extension => `.${extension}`).join(',');

const MIME_BY_EXTENSION = Object.freeze({
  pdf: ['application/pdf'],
  docx: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  txt: ['text/plain'],
  md: ['text/markdown', 'text/x-markdown', 'text/plain'],
  png: ['image/png'], jpg: ['image/jpeg'], jpeg: ['image/jpeg'], webp: ['image/webp'],
});
const failure = (code, error) => ({ valid: false, code, error });
const modified = file => Number.isFinite(file?.lastModified) ? file.lastModified : 0;
const mime = file => typeof file?.type === 'string' ? file.type.trim().toLowerCase() : '';

export function validateAttachment(file) {
  if (!file || typeof file !== 'object' || typeof file.name !== 'string' || !file.name.trim()) {
    return failure('name', 'Choose a file with a visible filename.');
  }
  if (/[\/\\\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/u.test(file.name)) {
    return failure('name', 'The filename contains hidden characters or a path. Rename it before attaching.');
  }
  if (!Number.isSafeInteger(file.size) || file.size < 0) return failure('invalid-size', 'This file has an invalid size.');
  if (file.size === 0) return failure('empty', 'Empty files cannot be attached.');
  const extension = /\.([^.]+)$/.exec(file.name)?.[1].toLowerCase();
  if (!ACCEPTED_EXTENSIONS.includes(extension)) return failure('type', 'Choose PDF, DOCX, TXT, MD, PNG, JPG or WEBP.');
  const type = mime(file);
  if (type && !MIME_BY_EXTENSION[extension].includes(type)) return failure('mime', 'This file’s type does not match its extension.');
  if (file.size > ATTACHMENT_LIMITS.maxFileBytes) return failure('file-size', 'Each file must be 10 MiB or smaller.');
  return { valid: true, code: null, error: '' };
}

export function attachmentMetadata(file) {
  return { name: file.name, size: file.size, type: mime(file), lastModified: modified(file) };
}

export function fileKey(file) {
  return JSON.stringify([file.name, file.size, modified(file)]);
}

export function formatAttachmentSize(bytes) {
  if (!Number.isSafeInteger(bytes) || bytes < 0) return '—';
  if (bytes < 1024) return `${bytes} ${bytes === 1 ? 'byte' : 'bytes'}`;
  const divisor = bytes < 1024 * 1024 ? 1024 : 1024 * 1024;
  const value = Math.round(bytes / divisor * 10) / 10;
  return `${value.toLocaleString('en-US', { maximumFractionDigits: 1 })} ${divisor === 1024 ? 'KiB' : 'MiB'}`;
}

function fileArray(value) {
  try { return value ? Array.from(value) : []; } catch { return []; }
}

export function mergeAttachments(existing = [], batch = []) {
  const files = [], added = [], duplicates = [], rejected = [], seen = new Set();
  let totalBytes = 0;
  function accept(file, incoming) {
    const checked = validateAttachment(file);
    if (!checked.valid) { rejected.push({ file, code: checked.code, error: checked.error }); return; }
    const key = fileKey(file);
    if (seen.has(key)) { duplicates.push(file); return; }
    if (files.length >= ATTACHMENT_LIMITS.maxFiles) {
      rejected.push({ file, code: 'file-count', error: 'Only 3 files can be selected.' }); return;
    }
    if (totalBytes + file.size > ATTACHMENT_LIMITS.maxTotalBytes) {
      rejected.push({ file, code: 'total-size', error: 'Selected files must total 25 MiB or less.' }); return;
    }
    files.push(file); seen.add(key); totalBytes += file.size;
    if (incoming) added.push(file);
  }
  fileArray(existing).forEach(file => accept(file, false));
  fileArray(batch).forEach(file => accept(file, true));
  return { files, added, duplicates, rejected, totalBytes };
}
