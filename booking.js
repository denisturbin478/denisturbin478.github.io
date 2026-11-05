// The provider remains responsible for live availability, time zones and booking.
// No private form values or API credentials are passed to the calendar.
const calendar = document.querySelector('[data-booking-calendar]');
if (calendar) {
  let started = false;
  let timeout;
  let attempt = 0;
  let mount;
  let widgetScript;
  const status = calendar.querySelector('.booking-load-status');
  const retry = calendar.parentElement.querySelector('[data-booking-retry]');
  const url = calendar.dataset.bookingUrl;
  const showFailure = version => {
    if (version !== attempt || calendar.dataset.bookingState !== 'loading') return;
    clearTimeout(timeout);
    calendar.dataset.bookingState = 'error';
    calendar.style.height = 'auto';
    calendar.removeAttribute('aria-busy');
    if (mount) mount.hidden = true;
    if (status) {
      status.hidden = false;
      status.textContent = 'The calendar could not load. Please try again.';
    }
    if (retry) { retry.hidden = false; retry.disabled = false; }
  };
  window.addEventListener('message', event => {
    const frame = mount?.querySelector('iframe');
    if (calendar.dataset.bookingState !== 'loading' || !frame || event.origin !== 'https://calendly.com' || event.source !== frame.contentWindow ||
        event.data?.event !== 'calendly.event_type_viewed') return;
    clearTimeout(timeout);
    calendar.dataset.bookingState = 'ready';
    calendar.removeAttribute('aria-busy');
    calendar.style.height = '660px';
    mount.hidden = false;
    if (status) status.hidden = true;
    if (retry) retry.hidden = true;
  });
  const start = () => {
    if (started || calendar.clientWidth <= 0 || getComputedStyle(calendar).display === 'none') return;
    started = true;
    const version = ++attempt;
    clearTimeout(timeout);
    widgetScript?.remove();
    mount?.remove();
    mount = document.createElement('div');
    mount.className = 'booking-calendar-frame';
    calendar.append(mount);
    calendar.dataset.bookingState = 'loading';
    calendar.style.height = '660px';
    calendar.setAttribute('aria-busy', 'true');
    if (status) { status.hidden = false; status.textContent = 'Loading available dates…'; }
    if (retry) { retry.hidden = true; retry.disabled = true; }
    const script = widgetScript = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.addEventListener('error', () => showFailure(version), { once: true });
    script.addEventListener('load', () => {
      if (version !== attempt || calendar.dataset.bookingState !== 'loading') return;
      if (!window.Calendly?.initInlineWidget) { showFailure(version); return; }
      try {
        const destination = new URL(url);
        if (destination.origin !== 'https://calendly.com' || destination.pathname !== '/denis-trbn/30min') {
          showFailure(version); return;
        }
        destination.searchParams.set('hide_event_type_details', '1');
        destination.searchParams.set('background_color', '1b1b1b');
        destination.searchParams.set('text_color', 'f5f5f5');
        destination.searchParams.set('primary_color', 'd9ccff');
        window.Calendly.initInlineWidget({ url: destination.href, parentElement: mount });
        mount.querySelector('iframe')?.setAttribute('title', 'Book a 30-minute call with Denis Turbin');
      } catch { showFailure(version); }
    }, { once: true });
    timeout = setTimeout(() => showFailure(version), 20000);
    document.head.append(script);
  };
  retry?.addEventListener('click', () => {
    if (calendar.dataset.bookingState !== 'error' || retry.disabled) return;
    started = false;
    start();
  });
  // Initialize only after this section enters its independently scrolling pane.
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) start();
      }, { root: matchMedia('(min-width:810px)').matches ? calendar.closest('.sidebar') : null, rootMargin: '160px 0px' })
    : null;
  if (observer) observer.observe(calendar);
  else start();
  // A collapsed section waits until its inline calendar has a measurable width.
  if ('ResizeObserver' in window) new ResizeObserver(() => {
    if (!observer) start();
    else { observer.unobserve(calendar); observer.observe(calendar); }
  }).observe(calendar);
}
