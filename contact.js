import { normalizeService, PROJECT_GUIDANCE, projectPlaceholder, replyContact, validateBrief, buildBrief, briefWhatsAppURL, estimateQuote } from './contact-model.js';
import { initBriefAttachments } from './brief-attachments.js';

const instances = new WeakMap();
const keys = ['name', 'email', 'service', 'project', 'budget', 'timing', 'links', 'estimate'];
const validationKeys = ['name', 'email', 'service', 'project'];
const shakes = new WeakMap();

function shakeUnavailable(button, win) {
  shakes.get(button)?.cancel();
  if (win?.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || !button.animate) return;
  const animation = button.animate([
    { transform: 'translateX(0)' }, { transform: 'translateX(-3px)' },
    { transform: 'translateX(3px)' }, { transform: 'translateX(-2px)' },
    { transform: 'translateX(1px)' }, { transform: 'translateX(0)' },
  ], { duration: 240, easing: 'ease-out' });
  shakes.set(button, animation);
  animation.finished?.catch?.(() => {});
}

function actionAvailability(button, available) {
  // aria-disabled keeps an unavailable action reachable so its reason can be explained.
  button.disabled = false;
  button.setAttribute('aria-disabled', available ? 'false' : 'true');
}

function setButtonState(button, state, fallbackLabel = '') {
  button.setAttribute('data-state', state);
  const label = button.querySelector(`[data-evil-label="${state}"]`)?.textContent || fallbackLabel;
  if (label) button.setAttribute('aria-label', label);
  if (state === 'loading') button.setAttribute('aria-busy', 'true');
  else button.removeAttribute('aria-busy');
}

function setIdleLabel(button, label) {
  const mounted = button.querySelector('[data-evil-label="idle"]');
  if (mounted) mounted.textContent = label;
  else button.textContent = label;
  if (!button.getAttribute('data-state') || button.getAttribute('data-state') === 'idle') button.setAttribute('aria-label', label);
}

function copyFallback(doc, text) {
  const previousFocus = doc.activeElement;
  let field;
  try {
    field = doc.createElement('textarea');
    field.value = text;
    field.readOnly = true;
    field.setAttribute('aria-hidden', 'true');
    field.tabIndex = -1;
    field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none';
    doc.body.append(field);
    field.focus({ preventScroll: true });
    field.select();
    return doc.execCommand?.('copy') === true;
  } catch { return false; }
  finally {
    field?.remove();
    previousFocus?.focus?.({ preventScroll: true });
  }
}

function initEstimator(root, { service, onApply, onEdit }) {
  const section = root.querySelector('[data-project-estimator]');
  if (!section) return null;
  const doc = section.ownerDocument || root;
  const win = doc.defaultView || globalThis.window;
  const packageField = section.querySelector('#estimate-package');
  const hoursField = section.querySelector('#estimate-hours');
  const hoursError = section.querySelector('#estimate-hours-error');
  const projectPanel = section.querySelector('[data-estimate-project]');
  const hourlyPanel = section.querySelector('[data-estimate-hourly]');
  const price = section.querySelector('#estimate-price');
  const context = section.querySelector('#estimate-context');
  const source = section.querySelector('#estimate-source');
  const apply = section.querySelector('[data-apply-estimate]');
  const status = section.querySelector('#estimate-status');
  if (!packageField || !hoursField || !hoursError || !projectPanel || !hourlyPanel || !price || !context || !source || !apply || !status) return null;
  let config = null;
  try { config = JSON.parse(doc.querySelector('#contact-pricing-data')?.textContent || 'null'); } catch { /* Keep the apply control disabled. */ }
  const current = () => {
    const mode = section.querySelector('[name="estimate-mode"]:checked')?.value;
    return { mode, packageId: packageField.value, hours: hoursField.value };
  };
  function render() {
    const input = current(), model = estimateQuote(config, input);
    const custom = input.mode === 'project' && input.packageId === 'custom' && !model.errors.config;
    projectPanel.hidden = input.mode !== 'project';
    hourlyPanel.hidden = input.mode !== 'hourly';
    actionAvailability(apply, model.valid);
    const hoursMessage = input.mode === 'hourly' ? model.errors.hours || '' : '';
    hoursError.textContent = hoursMessage;
    hoursError.hidden = !hoursMessage;
    hoursField.setAttribute('aria-invalid', hoursMessage ? 'true' : 'false');
    packageField.setAttribute('aria-invalid', input.mode === 'project' && model.errors.packageId && !custom ? 'true' : 'false');
    price.textContent = model.valid ? model.quote.price : custom ? 'Let’s discuss' : '—';
    context.textContent = model.valid ? model.quote.context : Object.values(model.errors)[0];
    if (model.valid) {
      source.href = model.quote.source;
      source.removeAttribute('aria-disabled');
    } else {
      source.removeAttribute('href');
      source.setAttribute('aria-disabled', 'true');
    }
    return model;
  }
  function chooseService(value) {
    const canonical = normalizeService(value);
    const matching = ['website', 'framer', 'product'].includes(canonical) && Array.isArray(config?.packages) ?
      config.packages.find(item => item.service === canonical) : null;
    const next = matching?.id || 'custom';
    if ([...packageField.options].some(option => option.value === next)) packageField.value = next;
    else packageField.value = '';
    status.textContent = '';
    render();
  }
  function edited() {
    onEdit();
    status.textContent = '';
    render();
  }
  const applied = () => {
    const model = render();
    if (!model.valid) {
      shakeUnavailable(apply, win);
      status.textContent = Object.values(model.errors)[0];
      if (current().mode === 'hourly' && model.errors.hours) hoursField.focus?.();
      else packageField.focus?.();
      return;
    }
    onApply(model.quote);
    status.textContent = 'Estimate added to your brief. Your budget and project details stay as entered.';
  };
  section.addEventListener('input', edited);
  section.addEventListener('change', edited);
  apply.addEventListener('click', applied);
  chooseService(service);
  return {
    clearApplied() { status.textContent = ''; },
    chooseService,
    destroy() {
      section.removeEventListener('input', edited);
      section.removeEventListener('change', edited);
      apply.removeEventListener('click', applied);
      apply.disabled = true;
      shakes.get(apply)?.cancel();
    },
  };
}

function selectPreview(doc, preview) {
  try {
    const range = doc.createRange();
    range.selectNodeContents(preview);
    const selection = doc.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    return true;
  } catch { return false; }
}

export function initContact(root = globalThis.document) {
  if (!root?.querySelector) return null;
  const form = root.querySelector('.brief-form');
  if (!form) return null;
  if (instances.has(form)) return instances.get(form);
  const doc = form.ownerDocument || root;
  const win = doc.defaultView || globalThis.window;
  const fields = Object.fromEntries(keys.map(key => [key, form.elements?.namedItem?.(key) || form.querySelector(`[name="${key}"]`)]));
  const errors = Object.fromEntries(validationKeys.map(key => [key, doc.querySelector(`#brief-${key}-error`)]));
  const summary = doc.querySelector('#brief-error-summary');
  const guidance = doc.querySelector('#project-guidance');
  const replyHint = doc.querySelector('#brief-email-hint');
  const reviewHint = doc.querySelector('#brief-review-hint');
  const estimateSummary = doc.querySelector('[data-brief-estimate-summary]');
  const estimateValue = estimateSummary?.querySelector('[data-brief-estimate-value]');
  const attachmentsSummary = doc.querySelector('[data-brief-attachments-summary]');
  const submit = form.querySelector('[data-brief-submit]');
  const result = doc.querySelector('.brief-result');
  const preview = doc.querySelector('#brief-preview');
  const copy = doc.querySelector('#copy-brief');
  const whatsapp = doc.querySelector('[data-brief-whatsapp]');
  const status = result?.querySelector('.brief-status');
  // Keep the static disabled state when any required markup is unavailable.
  if (!submit || !summary || !guidance || !result || !preview || !copy || !whatsapp || !status ||
      Object.values(fields).some(field => !field) || Object.values(errors).some(error => !error)) return null;
  const attachments = initBriefAttachments(form.querySelector('[data-brief-attachments]'));
  let draft = '', generation = 0, submitted = false, destroyed = false;
  let copyTimer = 0, copyPending = false;
  const listeners = [];
  const pasteControls = [];
  const listen = (target, event, handler, options) => {
    target?.addEventListener?.(event, handler, options);
    listeners.push(() => target?.removeEventListener?.(event, handler, options));
  };
  const callShortcut = doc.querySelector('.contact-entry-options a[href="#book-a-call"]');
  const callSection = doc.querySelector('#book-a-call');
  listen(callShortcut, 'click', event => {
    if (event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    // A repeated click can keep the same hash, so open before native anchor navigation.
    if (callSection?.tagName === 'DETAILS') callSection.open = true;
  });

  function invalidate() {
    generation += 1;
    draft = '';
    result.hidden = true;
    preview.textContent = '';
    status.textContent = '';
    copy.disabled = true;
    copyPending = false;
    copy.removeAttribute('aria-disabled');
    win?.clearTimeout?.(copyTimer);
    copyTimer = 0;
    setButtonState(submit, 'idle', submit.textContent);
    setButtonState(copy, 'idle', 'Copy brief');
    whatsapp.removeAttribute('href');
    whatsapp.setAttribute('aria-disabled', 'true');
    for (const control of pasteControls) {
      control.pending = null;
      control.button.disabled = false;
      control.button.removeAttribute('aria-busy');
      control.feedback.textContent = '';
    }
  }

  function values() {
    return { ...Object.fromEntries(keys.map(key => [key, fields[key].value])), attachments: attachments?.files() || [] };
  }

  function validation() {
    return validateBrief(values(), { emailIsValid: fields.email.validity?.valid === true });
  }

  function renderErrors(model) {
    for (const key of validationKeys) {
      const message = model.errors[key] || '';
      errors[key].textContent = message;
      errors[key].hidden = !message;
      if (message) fields[key].setAttribute('aria-invalid', 'true');
      else fields[key].removeAttribute('aria-invalid');
    }
    summary.hidden = model.valid;
    summary.textContent = model.valid ? '' : 'Check the highlighted fields before preparing your brief.';
  }

  function updateGuidance() {
    const fileCount = attachments?.files().length || 0;
    fields.project.required = !fileCount;
    if (attachmentsSummary) attachmentsSummary.textContent = fileCount ?
      `${fileCount} ${fileCount === 1 ? 'file' : 'files'} selected` : 'Attach a brief or references';
    guidance.textContent = PROJECT_GUIDANCE[normalizeService(fields.service.value) || 'unsure'];
    fields.project.setAttribute('placeholder', projectPlaceholder(fields.name.value, fields.service.value));
    const reply = replyContact(fields.email.value, { emailIsValid: fields.email.validity?.valid === true });
    const phoneInput = /^\+?[\d\s().-]+$/.test(fields.email.value.trim());
    fields.email.setAttribute('inputmode', phoneInput ? 'tel' : 'email');
    if (replyHint) replyHint.textContent = reply.valid && reply.type === 'email' ? 'Reply contact: email.' :
      reply.valid && reply.type === 'whatsapp' ? 'Reply contact: WhatsApp.' : phoneInput ?
      'Include the country code, e.g. +44 7700 900123.' : 'A reply email or WhatsApp number with country code.';
    setIdleLabel(submit, 'Review brief');
    const model = validation();
    actionAvailability(submit, model.valid);
    if (reviewHint) reviewHint.textContent = model.valid ? 'Review your message before sharing it.' :
      model.errors.name || model.errors.email || model.errors.service || model.errors.project || model.errors.attachments;
  }

  for (const key of validationKeys) {
    const described = new Set((fields[key].getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
    described.add(errors[key].id);
    if (key === 'email' && replyHint) described.add(replyHint.id);
    fields[key].setAttribute('aria-describedby', [...described].join(' '));
  }
  const requested = normalizeService(new URLSearchParams(win?.location?.search || '').get('service'));
  if (requested && [...fields.service.options].some(option => option.value === requested)) {
    fields.service.value = requested;
    const disclosure = form.closest?.('.contact-brief');
    if (disclosure?.tagName === 'DETAILS') disclosure.open = true;
  }
  form.noValidate = true;
  updateGuidance();
  renderErrors({ valid: true, errors: {} });
  invalidate();

  let estimator = null;
  function clearEstimate() {
    fields.estimate.value = '';
    if (estimateValue) estimateValue.textContent = '';
    if (estimateSummary) estimateSummary.hidden = true;
    estimator?.clearApplied();
  }
  function onEdit(event) {
    invalidate();
    if (event.target === fields.service) {
      clearEstimate();
      estimator?.chooseService(fields.service.value);
    }
    updateGuidance();
    if (submitted) renderErrors(validation());
  }
  listen(form, 'input', onEdit);
  listen(form, 'change', onEdit);
  listen(form, 'brief-attachments-change', onEdit);
  function prepareBrief(event) {
    event.preventDefault();
    if (destroyed) return;
    invalidate();
    submitted = true;
    for (const key of ['name', 'email', 'project']) fields[key].value = fields[key].value.trim();
    const model = validation();
    updateGuidance();
    renderErrors(model);
    if (!model.valid) {
      setButtonState(submit, 'error', 'Check fields');
      shakeUnavailable(submit, win);
      fields[validationKeys.find(key => model.errors[key])]?.focus?.();
      return;
    }
    // Composing is synchronous; keep loading truthful without an artificial wait.
    setButtonState(submit, 'loading', 'Preparing…');
    try { draft = buildBrief(model.fields); }
    catch {
      setButtonState(submit, 'error', 'Check fields');
      summary.hidden = false;
      summary.textContent = 'The draft could not be prepared. Check your project details and try again.';
      summary.setAttribute('tabindex', '-1');
      summary.focus?.();
      return;
    }
    preview.textContent = draft;
    whatsapp.href = briefWhatsAppURL(draft);
    whatsapp.removeAttribute('aria-disabled');
    copy.disabled = false;
    status.textContent = attachments?.files().length ?
      'Review your message, then copy it or continue on WhatsApp. Attach the selected files in your conversation.' :
      'Review your brief, then copy it or continue on WhatsApp.';
    result.hidden = false;
    setButtonState(submit, 'success', 'Brief ready');
    result.focus({ preventScroll: true });
    result.scrollIntoView?.({ behavior: win?.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ? 'instant' : 'smooth', block: 'start' });
  }
  listen(form, 'submit', prepareBrief);
  listen(submit, 'click', event => {
    if (!validation().valid) prepareBrief(event);
  });
  for (const button of form.querySelectorAll('[data-paste-field]')) {
    const name = button.getAttribute('data-paste-field');
    if (!['project', 'links'].includes(name)) continue;
    const field = fields[name], feedback = doc.querySelector(`#brief-${name}-paste-status`);
    if (!feedback) continue;
    const control = { button, feedback, pending: null };
    pasteControls.push(control);
    button.disabled = false;
    button.removeAttribute('aria-busy');
    feedback.textContent = '';
    listen(button, 'click', async () => {
      if (destroyed || button.disabled) return;
      const token = generation, entered = field.value;
      const operation = {};
      control.pending = operation;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      feedback.textContent = 'Reading clipboard…';
      try {
        if (!win?.navigator?.clipboard?.readText) throw new Error('Clipboard reading unavailable');
        const copied = await win.navigator.clipboard.readText();
        if (destroyed || token !== generation || entered !== field.value) return;
        const text = typeof copied === 'string' ? copied.trim() : '';
        if (!text) { feedback.textContent = 'The clipboard is empty. Copy some text, then try again.'; return; }
        const pasted = name === 'links' ? text.replace(/[\r\n\t]+/g, ' ') : text;
        const next = entered ? `${entered}${name === 'links' ? ' ' : '\n'}${pasted}` : pasted;
        const limit = Number(field.getAttribute('maxlength')) || (name === 'project' ? 5000 : 2000);
        if (next.length > limit) {
          feedback.textContent = `That text exceeds this field’s ${limit.toLocaleString('en-US')}-character limit. Paste a shorter excerpt.`;
          field.focus?.(); return;
        }
        // Clipboard content is literal field text, never HTML or an automatically opened URL.
        field.value = next;
        onEdit({ target: field });
        field.focus?.();
        feedback.textContent = entered ? 'Clipboard text added. Your existing text is preserved.' : 'Text pasted from clipboard.';
      } catch {
        if (destroyed || token !== generation) return;
        field.focus?.();
        const modifier = /Mac|iPhone|iPad/.test(win?.navigator?.platform || '') ? '⌘V' : 'Ctrl+V';
        feedback.textContent = `Clipboard access is unavailable. Paste here with ${modifier} or your device’s Paste action.`;
      } finally {
        if (control.pending === operation) {
          control.pending = null;
          if (!destroyed) button.disabled = false;
          button.removeAttribute('aria-busy');
        }
      }
    });
  }
  listen(whatsapp, 'click', event => { if (!draft || destroyed) event.preventDefault(); });
  listen(copy, 'click', async () => {
    if (!draft || destroyed || copy.disabled || copyPending) return;
    const token = generation, text = draft;
    win?.clearTimeout?.(copyTimer);
    copyTimer = 0;
    // Keep keyboard focus while the actual clipboard promise is pending.
    copyPending = true;
    copy.setAttribute('aria-disabled', 'true');
    setButtonState(copy, 'loading', 'Copying…');
    let copied = false;
    try {
      if (!win?.navigator?.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await win.navigator.clipboard.writeText(text);
      copied = true;
    } catch {
      if (token === generation && !destroyed) copied = copyFallback(doc, text);
    }
    if (token !== generation || destroyed) return;
    copyPending = false;
    copy.removeAttribute('aria-disabled');
    copy.disabled = false;
    setButtonState(copy, copied ? 'success' : 'error', copied ? 'Copied' : 'Copy failed');
    if (copied) status.textContent = attachments?.files().length ?
      'Message copied. Paste it into your conversation and attach the selected files.' :
      'Brief copied. Paste it into your conversation.';
    else status.textContent = selectPreview(doc, preview) ?
      'The brief is selected. Copy it with your keyboard and paste it into your conversation.' :
      'Select the brief above and copy it into your conversation.';
    copyTimer = win?.setTimeout?.(() => {
      if (token === generation && !destroyed && draft) setButtonState(copy, 'idle', 'Copy brief');
      copyTimer = 0;
    }, 1800) || 0;
  });
  listen(form, 'reset', () => {
    submitted = false;
    invalidate();
    clearEstimate();
    renderErrors({ valid: true, errors: {} });
    // Reset applies native default values after its event dispatch.
    queueMicrotask(() => { if (!destroyed) updateGuidance(); });
  });
  listen(win, 'pagehide', invalidate);
  estimator = initEstimator(root, {
    service: fields.service.value,
    onApply(quote) {
      invalidate();
      if (quote.mode === 'project' && [...fields.service.options].some(option => option.value === quote.service)) {
        fields.service.value = quote.service;
        updateGuidance();
        if (submitted) renderErrors(validation());
      }
      fields.estimate.value = quote.text;
      if (estimateSummary && estimateValue) {
        estimateValue.textContent = quote.price;
        estimateSummary.hidden = false;
      }
    },
    onEdit() { invalidate(); clearEstimate(); },
  });
  const controller = {
    invalidate,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      invalidate();
      submit.disabled = true;
      shakes.get(submit)?.cancel();
      estimator?.destroy();
      attachments?.destroy();
      listeners.splice(0).forEach(remove => remove());
      if (instances.get(form) === controller) instances.delete(form);
    },
  };
  instances.set(form, controller);
  updateGuidance();
  return controller;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initContact(document), { once: true });
  else initContact(document);
}
