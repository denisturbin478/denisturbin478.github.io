// Local dictionary lookup only. Locale names deliberately remain in their own language.
export const LOCALES = Object.freeze([
  ['en', 'English'], ['ru', 'Русский'], ['es', 'Español'], ['fr', 'Français'],
  ['de', 'Deutsch'], ['pt', 'Português'], ['it', 'Italiano'], ['nl', 'Nederlands'],
  ['pl', 'Polski'], ['uk', 'Українська'], ['tr', 'Türkçe'], ['ar', 'العربية'],
  ['he', 'עברית'], ['fa', 'فارسی'], ['hi', 'हिन्दी'], ['bn', 'বাংলা'],
  ['ur', 'اردو'], ['id', 'Bahasa Indonesia'], ['ms', 'Bahasa Melayu'],
  ['vi', 'Tiếng Việt'], ['th', 'ไทย'], ['zh-Hans', '中文（简体）'],
  ['zh-Hant', '中文（繁體）'], ['ja', '日本語'], ['ko', '한국어'],
  ['ro', 'Română'], ['cs', 'Čeština'], ['sv', 'Svenska'], ['el', 'Ελληνικά'],
  ['hu', 'Magyar'],
].map(([code, name]) => Object.freeze({ code, name })));

export const PREFERENCE_KEY = 'portfolio-language:v1';
const supported = new Set(LOCALES.map(locale => locale.code));
const rtl = new Set(['ar', 'he', 'fa', 'ur']);
const has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

export function normalizeLocale(value) {
  if (typeof value !== 'string') return null;
  const parts = value.trim().replaceAll('_', '-').toLowerCase().split('-');
  const base = parts[0];
  if (base === 'zh') {
    if (parts.includes('hant')) return 'zh-Hant';
    if (parts.includes('hans')) return 'zh-Hans';
    return parts.some(part => ['tw', 'hk', 'mo'].includes(part)) ? 'zh-Hant' : 'zh-Hans';
  }
  // Browser implementations can still return the older Hebrew and Indonesian tags.
  const canonical = ({ iw: 'he', in: 'id' })[base] || base;
  return supported.has(canonical) ? canonical : null;
}

export function normalizePreference(value) {
  return value === 'auto' || value == null ? 'auto' : normalizeLocale(value) || 'auto';
}

export function availableLocales(values) {
  const result = new Set(['en']);
  if (Array.isArray(values)) for (const value of values) {
    const code = normalizeLocale(value);
    if (code) result.add(code);
  }
  return result;
}

export function resolveLocale(preference, languages, available = new Set(['en'])) {
  const choice = normalizePreference(preference);
  if (choice !== 'auto') return available.has(choice) ? choice : 'en';
  for (const language of Array.isArray(languages) ? languages : []) {
    const code = normalizeLocale(language);
    if (code && available.has(code)) return code;
  }
  return 'en';
}

export const localeDirection = locale => rtl.has(normalizeLocale(locale)) ? 'rtl' : 'ltr';

export function readDictionary(payload, locale, sourceDigest = '') {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload) ||
      payload.locale !== locale || !payload.strings || typeof payload.strings !== 'object' ||
      Array.isArray(payload.strings) || typeof payload.source_digest !== 'string' ||
      (sourceDigest && payload.source_digest !== sourceDigest)) {
    throw new Error('Local dictionary does not match this page.');
  }
  const result = Object.create(null);
  for (const [source, translation] of Object.entries(payload.strings)) {
    if (typeof translation !== 'string') throw new Error('Invalid local dictionary string.');
    result[source] = translation;
  }
  return Object.freeze(result);
}

// Exact keys retain paragraph boundaries. Collapsed whitespace permits formatted HTML.
export function splitWhitespace(value) {
  const match = String(value).match(/^(\s*)([\s\S]*?)(\s*)$/);
  return { before: match[1], text: match[2], after: match[3] };
}
const collapse = value => value.replace(/\s+/g, ' ');
const literalPattern = /(?:https?:\/\/|www\.)[^\s<>]+|[\w.+-]+@[\w.-]+\.[a-z]{2,}|\d+(?:[.,:/-]\d+)*/gi;
const literals = value => (value.match(literalPattern) || []).sort();

export function preservesLiterals(source, translation, protectedTerms = []) {
  const original = literals(source), translated = literals(translation);
  if (original.length !== translated.length || original.some((value, index) => value !== translated[index])) return false;
  for (const term of protectedTerms) {
    if (typeof term !== 'string' || !term) continue;
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // X is a platform name; the X in UX is not. Punctuation in full names is literal.
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, 'gu');
    const occurrences = value => (value.match(pattern) || []).length;
    if (occurrences(source) !== occurrences(translation)) return false;
  }
  return true;
}

// Only these known controller phrases interpolate; arbitrary user content is never templated.
const templates = [
  { source: 'Hello, {name}.', pattern: /^Hello, (.+)\.$/, tokens: ['name'], translatedTokens: ['name'] },
  { source: '{percent}% for {name}.', pattern: /^(\d+(?:\.\d+)?)% for (.+)\.$/, tokens: ['percent', 'name'], translatedTokens: ['name'] },
  { source: 'Copy email address {email}', pattern: /^Copy email address ([\w.+-]+@[\w.-]+\.[a-z]{2,})$/i, tokens: ['email'] },
  { source: 'Copied. {email}', pattern: /^Copied\. ([\w.+-]+@[\w.-]+\.[a-z]{2,})$/i, tokens: ['email'] },
  { source: '{name}, for example: {example}', pattern: /^(.+), for example: (.+)$/, tokens: ['name', 'example'], translatedTokens: ['example'] },
  { source: 'For example: {example}', pattern: /^For example: (.+)$/, tokens: ['example'], translatedTokens: ['example'] },
  { source: 'That text exceeds this field’s {limit}-character limit. Paste a shorter excerpt.', pattern: /^That text exceeds this field’s ([\d,]+)-character limit\. Paste a shorter excerpt\.$/, tokens: ['limit'] },
  { source: 'Clipboard access is unavailable. Paste here with {shortcut} or your device’s Paste action.', pattern: /^Clipboard access is unavailable\. Paste here with (⌘V|Ctrl\+V) or your device’s Paste action\.$/, tokens: ['shortcut'] },
  { source: '{count} file ready to share.', pattern: /^(\d+) file ready to share\.$/, tokens: ['count'] },
  { source: '{count} files ready to share.', pattern: /^(\d+) files ready to share\.$/, tokens: ['count'] },
  { source: '{count} files are already selected.', pattern: /^(\d+) files are already selected\.$/, tokens: ['count'] },
  { source: '{count} file was not added.', pattern: /^(\d+) file was not added\.$/, tokens: ['count'] },
  { source: '{count} files were not added.', pattern: /^(\d+) files were not added\.$/, tokens: ['count'] },
  { source: '{size} · Ready to share', pattern: /^(\d+(?:[.,]\d+)* (?:byte|bytes|KiB|MiB)) · Ready to share$/, tokens: ['size'] },
  { source: 'Removed {filename}.', pattern: /^Removed (.+)\.$/, tokens: ['filename'] },
  { source: 'From {amount}', pattern: /^From ((?:[$€£¥₩₹₽]|[A-Z]{3}\s*)\d[\d,.]*)$/, tokens: ['amount'] },
  { source: 'Starting price for {package}. Final scope is agreed before work begins.', pattern: /^Starting price for (.+)\. Final scope is agreed before work begins\.$/, tokens: ['package'], translatedTokens: ['package'] },
  { source: '{hours} hour at {rate}/hr. Final scope and time are agreed before work begins.', pattern: /^(\d+) hour at (.+)\/hr\. Final scope and time are agreed before work begins\.$/, tokens: ['hours', 'rate'] },
  { source: '{hours} hours at {rate}/hr. Final scope and time are agreed before work begins.', pattern: /^(\d+) hours at (.+)\/hr\. Final scope and time are agreed before work begins\.$/, tokens: ['hours', 'rate'] },
];
export const TEMPLATE_SOURCES = Object.freeze(templates.map(template => template.source));
const attachmentMessagePrefix = /^(?:\d+ files? ready to share\.|That file is already selected\.|\d+ files are already selected\.|\d+ files? (?:was|were) not added\.) /;

export function translateString(value, dictionary, protectedTerms = []) {
  if (!dictionary || typeof value !== 'string') return value;
  const parts = splitWhitespace(value);
  if (!parts.text || !/[\p{L}]/u.test(parts.text)) return value;
  const key = has(dictionary, parts.text) ? parts.text : collapse(parts.text);
  let translation = has(dictionary, key) ? dictionary[key] : null;
  if (translation === null) for (const template of templates) {
    const match = parts.text.match(template.pattern);
    if (!match || !has(dictionary, template.source)) continue;
    translation = dictionary[template.source];
    if (template.tokens.some(token => translation.split(`{${token}}`).length !== 2) ||
        (translation.match(/\{[a-z]+\}/g) || []).length !== template.tokens.length) {
      translation = null; break;
    }
    for (let index = 0; index < template.tokens.length; index++) {
      const token = template.tokens[index], original = match[index + 1];
      const translated = template.translatedTokens?.includes(token) && has(dictionary, original) ? dictionary[original] : original;
      translation = translation.split(`{${token}}`).join(translated);
    }
    // A broken or omitted placeholder must not discard an address or number.
    if (/\{[a-z]+\}/.test(translation)) translation = null;
    break;
  }
  // This controller joins its fixed selection/error sentences. No general prose splitting.
  if (translation === null && attachmentMessagePrefix.test(parts.text)) {
    const messages = parts.text.split(/(?<=\.) (?=[A-Z0-9])/u);
    if (messages.length > 1) translation = messages.map(message => translateString(message, dictionary, protectedTerms)).join(' ');
  }
  if (translation === null || !preservesLiterals(parts.text, translation, protectedTerms)) return value;
  return parts.before + translation + parts.after;
}

export function reverseDictionary(dictionaries) {
  const reverse = new Map(), ambiguous = new Set();
  for (const dictionary of dictionaries) for (const [source, translation] of Object.entries(dictionary)) {
    if (!translation || source === translation) continue;
    const existing = reverse.get(translation);
    if (existing && existing !== source) ambiguous.add(translation);
    else reverse.set(translation, source);
  }
  for (const key of ambiguous) reverse.delete(key);
  return reverse;
}

export function canonicalString(value, dictionary, reverse) {
  if (typeof value !== 'string' || !reverse?.size) return value;
  const parts = splitWhitespace(value);
  // A legitimate English source key wins over a coincidentally identical translation.
  if (dictionary && (has(dictionary, parts.text) || has(dictionary, collapse(parts.text)))) return value;
  const source = reverse.get(parts.text);
  return source ? parts.before + source + parts.after : value;
}
