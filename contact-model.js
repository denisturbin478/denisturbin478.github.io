/* Pure brief and calendar helpers. Prices and availability stay in caller config. */
import { mergeAttachments, attachmentMetadata, formatAttachmentSize } from './brief-attachments-model.js';

export const SERVICE_CHOICES = Object.freeze([
  ['website', 'Website design & build'],
  ['framer', 'Framer development'],
  ['product', 'Product design'],
  ['visual-direction', 'Motion & interactive visuals'],
  ['photo', 'Photography'],
  ['video', 'Videography'],
  ['editing', 'Video editing'],
  ['unsure', 'Not sure yet'],
].map(([value, label]) => Object.freeze({ value, label })));

export const SERVICE_ALIASES = Object.freeze({
  'photo-video': 'photo', visual: 'photo', photography: 'photo', 'video-editing': 'editing',
});

export const PROJECT_GUIDANCE = Object.freeze({
  website: 'What are you building, and do you need design, development, or both?',
  framer: 'Do you already have approved designs? Share the pages, CMS needs and interactions you have in mind.',
  product: 'Who will use the product, what should they be able to do, and which flows need design?',
  'visual-direction': 'What is the project, and what should the motion or interactive visuals help communicate?',
  photo: 'What would you like photographed, and where would the shoot take place?',
  video: 'What are we filming, where, and do you also need the finished edit?',
  editing: 'Do you already have footage, and what length and format should the finished video be?',
  unsure: 'What are you hoping to achieve? A rough idea is enough to begin.',
});

export const WHATSAPP_NUMBER = '37444166101';
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const trim = value => typeof value === 'string' ? value.trim() : '';

const PROJECT_EXAMPLES = Object.freeze({
  website: 'a five-page studio website with an enquiry form.',
  framer: 'a Framer build from our approved Figma designs.',
  product: 'a dashboard that helps our team manage orders.',
  'visual-direction': 'a product launch with motion and interactive visuals.',
  photo: 'a portrait session for our team.',
  video: 'a short brand film for our new product.',
  editing: 'a 60-second edit from footage we already have.',
  unsure: 'a new idea you would like help bringing to life.',
});

export function projectPlaceholder(name, service) {
  const firstName = trim(name).split(/\s+/)[0].slice(0, 40);
  const example = PROJECT_EXAMPLES[normalizeService(service) || 'unsure'];
  return firstName ? `${firstName}, for example: ${example}` : `For example: ${example}`;
}

// One optional reply field accepts either an email or an international WhatsApp number.
// Detecting a phone's format does not claim that the number has a WhatsApp account.
export function replyContact(value, { emailIsValid = null } = {}) {
  const entered = trim(value);
  if (!entered) return { type: null, value: '', valid: true };
  if (entered.includes('@')) {
    const syntax = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/.test(entered);
    return { type: 'email', value: entered, valid: entered.length <= 254 && syntax && emailIsValid === true };
  }
  if (/^\+[\d\s().-]+$/.test(entered)) {
    const digits = entered.replace(/\D/g, '');
    return { type: 'whatsapp', value: `+${digits}`, valid: entered.length <= 254 && /^[1-9]\d{6,14}$/.test(digits) };
  }
  return { type: null, value: entered, valid: false };
}

export function normalizeService(value) {
  const requested = trim(value);
  const chosen = own(SERVICE_ALIASES, requested) ? SERVICE_ALIASES[requested] : requested;
  return SERVICE_CHOICES.some(item => item.value === chosen) ? chosen : null;
}

export function normalizeBrief(raw = {}) {
  const input = raw && typeof raw === 'object' ? raw : {};
  const fields = Object.fromEntries(['name', 'email', 'project', 'budget', 'timing', 'links', 'estimate'].map(key => [key, trim(input[key])]));
  fields.project = fields.project.replace(/\r\n?/g, '\n');
  fields.service = normalizeService(input.service);
  fields.attachments = briefAttachments(input).files.map(attachmentMetadata);
  return fields;
}

function briefAttachments(input) {
  if (input?.attachments != null && !Array.isArray(input.attachments)) {
    return { files: [], rejected: [{ error: 'Choose the brief files again.' }] };
  }
  return mergeAttachments([], input?.attachments || []);
}

export function validateBrief(raw, { emailIsValid = null } = {}) {
  const fields = normalizeBrief(raw);
  const errors = {};
  if (!fields.name) errors.name = 'Enter your name.';
  const reply = replyContact(fields.email, { emailIsValid });
  if (!reply.valid) errors.email = 'Enter an email or an international WhatsApp number, e.g. +44 7700 900123.';
  if (!fields.service) errors.service = 'Choose one of the listed services.';
  if (!fields.project && !fields.attachments.length) errors.project = 'Describe your project or attach an existing brief.';
  const attachments = briefAttachments(raw);
  if (attachments.rejected.length) errors.attachments = attachments.rejected[0].error;
  return { valid: Object.keys(errors).length === 0, fields, errors };
}

export function buildBrief(raw) {
  const fields = normalizeBrief(raw);
  const service = SERVICE_CHOICES.find(item => item.value === fields.service);
  if (!fields.name || (!fields.project && !fields.attachments.length) || !service || briefAttachments(raw).rejected.length) throw new TypeError('Validate the required brief fields before composing a draft.');
  const lines = [`Hi Denis, I’m ${fields.name}.`, `Project: ${service.label}`, ''];
  if (fields.project) lines.push(fields.project);
  if (fields.email) {
    const reply = replyContact(fields.email, { emailIsValid: true });
    if (!reply.valid) throw new TypeError('Validate the reply contact before composing a draft.');
    lines.push(`${reply.type === 'whatsapp' ? 'WhatsApp' : 'Email'}: ${reply.value}`);
  }
  for (const [key, label] of [['budget', 'Budget range'], ['timing', 'Target date'], ['links', 'Useful links'], ['estimate', 'Estimate']]) {
    if (fields[key]) lines.push(`${label}: ${fields[key]}`);
  }
  if (fields.attachments.length) {
    if (lines.at(-1) !== '') lines.push('');
    lines.push('Files to attach:');
    for (const file of fields.attachments) {
      const name = file.name.replace(/[\u0000-\u001f\u007f\u202a-\u202e\u2066-\u2069]/g, ' ').trim();
      lines.push(`- ${name} (${formatAttachmentSize(file.size)})`);
    }
  }
  return lines.join('\n');
}

export function briefWhatsAppURL(brief) {
  if (typeof brief !== 'string' || !brief.trim()) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(brief)}`;
}

export function parseLocalDate(value) {
  if (typeof value !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!match) return null;
  const [year, month, day] = match.slice(1).map(Number);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) return null;
  // Local noon avoids shifting the selected day through UTC or DST midnight.
  const date = new Date(0);
  date.setHours(12, 0, 0, 0);
  date.setFullYear(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
}

export function toLocalISO(value) {
  if (!(value instanceof Date) || !Number.isFinite(value.getTime())) return null;
  const year = value.getFullYear();
  if (year < 1 || year > 9999) return null;
  return `${String(year).padStart(4, '0')}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`;
}

export function addCalendarDays(value, days) {
  if (!Number.isSafeInteger(days)) return null;
  const date = typeof value === 'string' ? parseLocalDate(value) : value;
  if (!toLocalISO(date)) return null;
  const result = new Date(date.getTime());
  result.setDate(result.getDate() + days);
  return toLocalISO(result) ? result : null;
}

export function validatePricingInputs(raw, schema) {
  // Declarative rules: {type:'integer'|'number'|'choice'|'boolean', min?, max?, choices?, required?}.
  // No default price, scope limit or unapproved rate is invented here.
  const values = {}, errors = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw) || !schema || typeof schema !== 'object' || Array.isArray(schema)) {
    return { valid: false, values, errors: { schema: 'Pricing inputs require explicit field rules.' } };
  }
  const supported = ['integer', 'number', 'choice', 'boolean'];
  const safeKey = key => /^[a-zA-Z][\w-]*$/.test(key) && !['__proto__', 'constructor', 'prototype'].includes(key);
  for (const key of Object.keys(raw)) {
    if (!safeKey(key)) errors.schema = 'Pricing field names must be explicit and safe.';
    else if (!own(schema, key)) errors[key] = 'This field is outside the configured scope.';
  }
  for (const [key, rule] of Object.entries(schema)) {
    if (!safeKey(key)) { errors.schema = 'Pricing field names must be explicit and safe.'; continue; }
    const supplied = own(raw, key) ? raw[key] : undefined;
    if (!rule || typeof rule !== 'object' || Array.isArray(rule) || !supported.includes(rule.type) ||
        (rule.required !== undefined && typeof rule.required !== 'boolean') ||
        (rule.type === 'choice' && (!Array.isArray(rule.choices) || !rule.choices.length)) ||
        ((rule.type === 'integer' || rule.type === 'number') &&
          ((rule.min !== undefined && !Number.isFinite(rule.min)) || (rule.max !== undefined && !Number.isFinite(rule.max)) ||
           (rule.min !== undefined && rule.max !== undefined && rule.min > rule.max)))) {
      errors[key] = 'A valid field rule is required.'; continue;
    }
    if (supplied === undefined || supplied === null || (typeof supplied === 'string' && !supplied.trim())) {
      if (rule.required) errors[key] = 'Enter a value.';
      continue;
    }
    if (rule.type === 'boolean') {
      if (typeof supplied === 'boolean') values[key] = supplied;
      else errors[key] = 'Choose yes or no.';
    } else if (rule.type === 'choice') {
      if (Array.isArray(rule.choices) && rule.choices.includes(supplied)) values[key] = supplied;
      else errors[key] = 'Choose a listed option.';
    } else if (rule.type === 'integer' || rule.type === 'number') {
      const numeric = typeof supplied === 'number' ? supplied :
        typeof supplied === 'string' && /^-?(?:\d+\.?\d*|\.\d+)$/.test(supplied.trim()) ? Number(supplied.trim()) : NaN;
      if (!Number.isFinite(numeric) || (rule.type === 'integer' && !Number.isSafeInteger(numeric))) errors[key] = 'Enter a valid number.';
      else if ((rule.min !== undefined && (!Number.isFinite(rule.min) || numeric < rule.min)) ||
               (rule.max !== undefined && (!Number.isFinite(rule.max) || numeric > rule.max))) errors[key] = 'Enter a value within the configured range.';
      else values[key] = numeric;
    } else errors[key] = 'An explicit supported field type is required.';
  }
  return { valid: Object.keys(errors).length === 0, values, errors };
}

function publicSource(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}

export function estimateQuote(config, { mode, packageId, hours } = {}) {
  const invalid = (key, message) => ({ valid: false, errors: { [key]: message }, quote: null });
  if (!config || typeof config !== 'object' || Array.isArray(config)) return invalid('config', 'The published pricing is unavailable.');
  const currency = config.currency || config.rate?.currency;
  if (typeof currency !== 'string' || !/^[A-Z]{3}$/.test(currency)) return invalid('config', 'The pricing currency is unavailable.');
  let money;
  try { money = new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 2 }); }
  catch { return invalid('config', 'The pricing currency is unavailable.'); }
  const amount = value => money.format(value).replace(/\.00$/, '');
  const range = (min, max) => min === max ? amount(min) : `${amount(min)}–${amount(max)}`;
  if (mode === 'project') {
    if (packageId === 'custom') return invalid('packageId', 'Custom quote. Share your project in the brief below.');
    const selected = Array.isArray(config.packages) ? config.packages.filter(item => item?.id === packageId) : [];
    if (selected.length !== 1) return invalid('packageId', 'Choose one of the listed project packages.');
    const item = selected[0], source = publicSource(item.source), service = normalizeService(item.service);
    if (!Number.isFinite(item.starting_price) || item.starting_price <= 0 || !trim(item.label) || !source || !service) {
      return invalid('config', 'The selected published package is unavailable.');
    }
    const label = trim(item.label), price = `From ${amount(item.starting_price)}`;
    return { valid: true, errors: {}, quote: {
      mode, packageId, service, currency, min: item.starting_price, max: item.starting_price,
      label, source, price, context: `Starting price for ${label}. Final scope is agreed before work begins.`,
      text: `${label} — starting at ${amount(item.starting_price)} ${currency}.`,
    } };
  }
  if (mode === 'hourly') {
    const checked = validatePricingInputs({ hours }, { hours: { type: 'integer', min: 1, max: 1000, required: true } });
    if (!checked.valid) return invalid('hours', 'Enter a whole number of hours between 1 and 1,000.');
    const rate = config.rate, source = publicSource(rate?.source);
    if (!rate || !Number.isFinite(rate.min) || !Number.isFinite(rate.max) || rate.min <= 0 || rate.max < rate.min || !source) {
      return invalid('config', 'The published hourly rate is unavailable.');
    }
    const count = checked.values.hours, min = count * rate.min, max = count * rate.max;
    if (!Number.isFinite(min) || !Number.isFinite(max)) return invalid('config', 'The published hourly rate is unavailable.');
    const price = range(min, max), rateText = `${range(rate.min, rate.max)}/hr`, hourText = `${count} ${count === 1 ? 'hour' : 'hours'}`;
    return { valid: true, errors: {}, quote: {
      mode, hours: count, currency, min, max, label: 'Hourly work', source, price,
      context: `${hourText} at ${rateText}. Final scope and time are agreed before work begins.`,
      text: `${price} ${currency} for ${hourText} at ${rateText}.`,
    } };
  }
  return invalid('mode', 'Choose a project package or hourly estimate.');
}
