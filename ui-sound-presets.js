// Four voice recipes informed by the numeric Web Audio parameters exposed at
// https://bencho.dev/sounds (Lorenzo Cabra). The playback engine is our own.
// No Bencho site UI, branding, audio exports or dependencies are used.
const preset = (name, level, voice) => Object.freeze({
  name, level, voices: Object.freeze([Object.freeze(voice)]),
});

export const UI_SOUND_PRESETS = Object.freeze({
  hover: preset('lift', .22, { hz: 660, to: 720, ms: 38, gain: .028, wave: 'sine' }),
  click: preset('tock', .60, { hz: 250, ms: 28, gain: .045, wave: 'triangle', cut: 1700, atk: 10 }),
  switch: preset('notch', .45, { hz: 230, ms: 49, gain: .048, wave: 'sine', cut: 820, atk: 6 }),
  swipe: preset('whisk', .40, { hz: 124, to: 65, ms: 130, gain: .067, wave: 'sine', cut: 560, atk: 50 }),
});
