// Quiet Bencho-informed voice recipes, using our own procedural playback engine.
// There are no media downloads, cue queues or autoplay.
import { UI_SOUND_PRESETS } from './ui-sound-presets.js';

const instances = new WeakMap();
const preferenceKey = 'portfolio-ui-sounds:v1';
const cueNames = new Set(Object.keys(UI_SOUND_PRESETS));
const interactive = 'a[href],button,summary,[role="button"]';
const silent = 'video,audio,input,textarea,select,[contenteditable]:not([contenteditable="false"]),[data-ui-sound-skip]';
const unavailable = '[disabled],[aria-disabled="true"],[inert],[hidden]';
const isUnavailable = target => Boolean(target?.disabled || target?.closest?.(unavailable));
let current = null;

/** Safe from any component: inactive, suspended and hidden documents stay silent. */
export function playUISound(name) {
  return current?.play(name) || false;
}

export function initUISounds(root = document) {
  if (instances.has(root)) return instances.get(root);
  const doc = root.ownerDocument || root;
  const win = doc.defaultView;
  const controls = [...root.querySelectorAll('[data-ui-sound-toggle]')];
  const AudioContext = win?.AudioContext || win?.webkitAudioContext;
  const voices = new Set();
  const cooldowns = new Map();
  const now = () => win?.performance?.now?.() ?? Date.now();
  let enabled = false, alive = true, authorized = false, context = null;
  let epoch = 0, resumePending = false, lastAction = -Infinity, lastManual = -Infinity;
  try { enabled = win.localStorage.getItem(preferenceKey) === 'on'; } catch { /* Storage is optional. */ }

  function render() {
    for (const button of controls) {
      button.setAttribute('aria-pressed', String(enabled));
      button.setAttribute('aria-label', enabled ? 'Interface sounds on. Turn off' : 'Interface sounds off. Turn on');
      button.title = enabled ? 'Interface sounds on. Turn off' : 'Interface sounds off. Turn on';
      const label = button.querySelector('[data-ui-sound-label]');
      if (label) label.textContent = enabled ? 'Sound on' : 'Sound off';
      button.disabled = typeof AudioContext !== 'function';
      if (button.disabled) {
        button.title = 'Interface sounds are unavailable in this browser';
        button.setAttribute('aria-label', 'Interface sounds unavailable');
      }
    }
  }

  function stopVoices() {
    for (const voice of [...voices]) voice.stop();
  }

  // A preference authorizes sound; only a real, current input unlocks Web Audio.
  function unlock(event) {
    if (!alive || !enabled || doc.hidden || event?.isTrusted !== true || isUnavailable(event.target) || typeof AudioContext !== 'function') return;
    authorized = true;
    try {
      if (!context || context.state === 'closed') {
        context = new AudioContext({ latencyHint: 'interactive' });
      }
      if (context.state === 'running' || resumePending) return;
      resumePending = true;
      const generation = epoch;
      const resumedContext = context;
      Promise.resolve(context.resume()).then(() => {
        // Resuming never replays the activation or actions taken while suspended.
        if (!alive || !enabled || doc.hidden || !authorized) {
          try { Promise.resolve(resumedContext.suspend()).catch(() => {}); } catch {}
        }
      }, () => { /* A denied activation simply leaves feedback silent. */ }).finally(() => {
        if (generation === epoch) resumePending = false;
      });
    } catch { resumePending = false; /* Audio cannot prevent the underlying action. */ }
  }

  function suspend() {
    epoch++;
    resumePending = false;
    authorized = false;
    cooldowns.clear();
    lastAction = lastManual = -Infinity;
    stopVoices();
    try { if (context && context.state !== 'closed') Promise.resolve(context.suspend()).catch(() => {}); } catch {}
  }

  function setEnabled(value, event, persist = false) {
    enabled = Boolean(value);
    if (persist) {
      try { win.localStorage.setItem(preferenceKey, enabled ? 'on' : 'off'); } catch {}
    }
    render();
    if (!enabled) suspend();
    else unlock(event);
  }

  // Every source owns its envelope and disconnects at the end, or immediately on mute.
  function sourceVoice(source, filter, duration, amplitude, start, end, attack) {
    let gain;
    try { gain = context.createGain(); }
    catch {
      for (const node of [source, filter]) { try { node?.disconnect(); } catch {} }
      return false;
    }
    const nodes = [source, ...(filter ? [filter] : []), gain];
    const at = context.currentTime;
    let disposed = false;
    const finish = () => {
      if (disposed) return;
      disposed = true;
      voices.delete(voice);
      for (const node of nodes) { try { node.disconnect(); } catch {} }
    };
    const voice = {
      stop() {
        if (disposed) return;
        try { gain.gain.cancelScheduledValues(context.currentTime); gain.gain.setValueAtTime(0, context.currentTime); } catch {}
        try { source.stop(); } catch {}
        finish();
      },
    };
    try {
      if (filter) { source.connect(filter); filter.connect(gain); }
      else source.connect(gain);
      gain.connect(context.destination);
      gain.gain.setValueAtTime(0.0001, at);
      gain.gain.exponentialRampToValueAtTime(amplitude, at + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + duration);
      if (source.frequency) {
        source.frequency.setValueAtTime(start, at);
        source.frequency.exponentialRampToValueAtTime(end, at + duration);
      } else if (filter) {
        filter.frequency.setValueAtTime(start, at);
        filter.frequency.exponentialRampToValueAtTime(end, at + duration);
      }
      source.onended = finish;
      // Rapid input can never accumulate an unbounded set of audible sources.
      while (voices.size >= 4) voices.values().next().value.stop();
      voices.add(voice);
      source.start(at);
      source.stop(at + duration + 0.004);
      return true;
    } catch { voice.stop(); return false; }
  }

  function recipeVoice(voice, level) {
    let oscillator, filter;
    try {
      oscillator = context.createOscillator();
      oscillator.type = voice.wave;
      const duration = voice.ms / 1000;
      if (voice.cut) {
        filter = context.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(voice.cut, context.currentTime);
      }
      return sourceVoice(oscillator, filter, duration, voice.gain * level,
        voice.hz, voice.to ?? voice.hz, Math.min((voice.atk ?? 4) / 1000, duration * .6));
    } catch {
      // Even a partial graph must not survive a failed construction.
      for (const node of [oscillator, filter]) { try { node?.disconnect(); } catch {} }
      return false;
    }
  }

  function play(name) {
    if (!alive || !enabled || !authorized || doc.hidden || !cueNames.has(name) || context?.state !== 'running') return false;
    const at = now();
    const pause = name === 'hover' ? 550 : 65;
    if (at - (cooldowns.get(name) ?? -Infinity) < pause ||
        (name === 'hover' && at - lastAction < 180)) return false;
    cooldowns.set(name, at);
    if (name !== 'hover') lastAction = at;
    if (name === 'switch' || name === 'swipe') lastManual = at;
    try {
      const preset = UI_SOUND_PRESETS[name];
      return preset.voices.reduce((played, voice) => recipeVoice(voice, preset.level) || played, false);
    } catch { return false; }
  }

  const toggle = event => {
    const button = event.target?.closest?.('[data-ui-sound-toggle]');
    if (!button || !root.contains(button) || event.isTrusted !== true || !alive) return;
    setEnabled(!enabled, event, true);
    // An already running context gives an immediate, quiet confirmation; no async replay.
    if (enabled) play('click');
  };
  const activatePointer = event => {
    if (event.button != null && event.button !== 0) return;
    if (event.isPrimary === false) return;
    unlock(event);
  };
  const activateKey = event => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || event.target?.closest?.(silent)) return;
    if (['Enter', ' ', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) unlock(event);
  };
  const hover = event => {
    if (event.isTrusted !== true || event.pointerType !== 'mouse' || event.target?.closest?.(silent) || isUnavailable(event.target)) return;
    const button = event.target?.closest?.(interactive);
    if (!button || button.disabled || button.closest('[data-ui-sound-toggle],.lightbox-stage') ||
        (event.relatedTarget && button.contains(event.relatedTarget))) return;
    play('hover');
  };
  const click = event => {
    if (event.isTrusted !== true || event.target?.closest?.(silent) || isUnavailable(event.target)) return;
    const button = event.target?.closest?.(interactive);
    if (!button || button.disabled || button.closest('[data-ui-sound-toggle],[data-ui-sound-manual],.lightbox-stage,#image-prev,#image-next')) return;
    // A component's successful switch/swipe owns its cue, even when initiated by click.
    if (now() - lastManual < 100) return;
    play('click');
  };
  const visibility = () => { if (doc.hidden) suspend(); };
  const pagehide = () => suspend();
  const pageshow = () => { if (!doc.hidden) render(); };
  const storage = event => {
    if (event.key === preferenceKey) setEnabled(event.newValue === 'on');
  };
  root.addEventListener('pointerdown', activatePointer, true);
  root.addEventListener('keydown', activateKey, true);
  root.addEventListener('pointerover', hover);
  root.addEventListener('click', toggle);
  root.addEventListener('click', click);
  doc.addEventListener('visibilitychange', visibility);
  win?.addEventListener('pagehide', pagehide);
  win?.addEventListener('pageshow', pageshow);
  win?.addEventListener('storage', storage);
  render();
  const instance = {
    play,
    destroy() {
      if (!alive) return;
      alive = false;
      suspend();
      root.removeEventListener('pointerdown', activatePointer, true);
      root.removeEventListener('keydown', activateKey, true);
      root.removeEventListener('pointerover', hover);
      root.removeEventListener('click', toggle);
      root.removeEventListener('click', click);
      doc.removeEventListener('visibilitychange', visibility);
      win?.removeEventListener('pagehide', pagehide);
      win?.removeEventListener('pageshow', pageshow);
      win?.removeEventListener('storage', storage);
      try { if (context?.state !== 'closed') Promise.resolve(context?.close()).catch(() => {}); } catch {}
      if (current === instance) current = null;
      instances.delete(root);
    },
  };
  instances.set(root, instance);
  current = instance;
  return instance;
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initUISounds(), { once: true });
  else initUISounds();
}
