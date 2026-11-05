// Country hints only: no city inference, location permissions or external requests.
const TIME_ZONE_COUNTRIES = Object.freeze({
  'Asia/Yerevan': 'AM',
  'Asia/Tbilisi': 'GE',
  'Europe/Paris': 'FR',
  'America/New_York': 'US',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/Phoenix': 'US',
  'America/Detroit': 'US',
  'America/Anchorage': 'US',
  'America/Juneau': 'US',
  'America/Adak': 'US',
  'Pacific/Honolulu': 'US',
});
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const text = value => typeof value === 'string' && value.trim().length > 0;
const countryAllowed = (country, countries) => typeof country === 'string' &&
  /^[A-Z]{2}$/.test(country) && record(countries) &&
  Object.prototype.propertyIsEnumerable.call(countries, country);

/** Signals describe a country, never a city. Browser language is intentionally unused. */
export function inferRegion(signals = {}, countries = {}) {
  const input = record(signals) ? signals : {};
  if (countryAllowed(input.serverCountry, countries)) {
    return { country: input.serverCountry, source: 'server' };
  }
  const hint = typeof input.timeZone === 'string' && own(TIME_ZONE_COUNTRIES, input.timeZone)
    ? TIME_ZONE_COUNTRIES[input.timeZone] : null;
  return countryAllowed(hint, countries) ? { country: hint, source: 'timezone' } : null;
}

// Require a complete ISO timestamp with an explicit offset. Calendar checks reject
// invalid dates that Date.parse would otherwise silently roll into another month.
function timestamp(value) {
  if (typeof value !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(?:Z|([+-])(\d{2}):(\d{2}))$/.exec(value);
  if (!match) return null;
  const [, year, month, day, hour, minute, second, , , offsetHour, offsetMinute] = match;
  const values = [year, month, day, hour, minute, second].map(Number);
  const [y, m, d, h, min, s] = values;
  if (m < 1 || m > 12 || d < 1 || d > 31 || h > 23 || min > 59 || s > 59 ||
      (offsetHour !== undefined && (Number(offsetHour) > 23 || Number(offsetMinute) > 59))) return null;
  const calendar = new Date(0);
  calendar.setUTCFullYear(y, m - 1, d);
  calendar.setUTCHours(h, min, s, 0);
  if (calendar.getUTCFullYear() !== y || calendar.getUTCMonth() !== m - 1 || calendar.getUTCDate() !== d) return null;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

/** Only explicit, complete and currently active approved commercial terms qualify. */
export function resolveOffer(country, config, now = Date.now()) {
  if (!record(config) || config.enabled !== true || !countryAllowed(country, config.countries) ||
      !Array.isArray(config.offers) || typeof now !== 'number' || !Number.isFinite(now)) return null;
  for (const offer of config.offers) {
    if (!record(offer) || offer.country !== country || offer.approved !== true ||
        !Number.isInteger(offer.percent) || !Number.isFinite(offer.percent) ||
        offer.percent < 1 || offer.percent > 50 ||
        !text(offer.id) || !text(offer.scope) || !text(offer.copy)) continue;
    const start = offer.startsAt === undefined ? null : timestamp(offer.startsAt);
    const end = offer.expiresAt === undefined ? null : timestamp(offer.expiresAt);
    if ((offer.startsAt !== undefined && start === null) ||
        (offer.expiresAt !== undefined && end === null) ||
        (start !== null && end !== null && start >= end) ||
        (start !== null && now < start) || (end !== null && now >= end)) continue;
    // A fresh record keeps consumer edits from changing the configured terms.
    return { ...offer };
  }
  return null;
}

/** Offer/country changes retain dismissal until the explicit content version changes. */
export function dismissKey(config) {
  const version = record(config) && typeof config.version === 'string' &&
    /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(config.version)
    ? config.version : 'regional-v1';
  return `regional-welcome:${version}`;
}
