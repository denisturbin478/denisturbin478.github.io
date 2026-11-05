// Small moments of feedback, shared by every page.
// - toast(): a calm confirmation that slides in, settles and leaves
//   (after Max Podgorski's "A toast that arrives well"), used for likes.
// - Like button: the heart pops and the count bumps (after Malay's reaction bar).
// - Email copy: the check pops in place (after Noe's "Article actions").
// - Phone tab bar: the active pill stretches to the tab you chose before the
//   page changes (after Elia's "A tab bar that stretches to the label").
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- Toast ---------- */
  let stack;
  function toast(message) {
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'trbn-toasts';
      stack.setAttribute('role', 'status');
      stack.setAttribute('aria-live', 'polite');
      document.body.append(stack);
    }
    const item = document.createElement('div');
    item.className = 'trbn-toast';
    item.textContent = message;
    stack.append(item);
    requestAnimationFrame(() => requestAnimationFrame(() => item.classList.add('is-in')));
    setTimeout(() => {
      item.classList.remove('is-in');
      item.classList.add('is-out');
      setTimeout(() => item.remove(), 320);
    }, 2200);
    while (stack.children.length > 3) stack.firstElementChild.remove();
  }
  window.trbnToast = toast;

  /* ---------- Like button ---------- */
  document.querySelectorAll('[data-portfolio-like]').forEach(button => {
    let last = button.getAttribute('aria-pressed');
    new MutationObserver(() => {
      const now = button.getAttribute('aria-pressed');
      if (now === last) return;
      const wasUser = button.dataset.userClick === '1';
      last = now;
      if (!wasUser) return;
      button.dataset.userClick = '';
      if (now === 'true') {
        button.classList.remove('is-popping');
        void button.offsetWidth;
        button.classList.add('is-popping');
        toast('Thanks for the like');
      }
    }).observe(button, { attributes: true, attributeFilter: ['aria-pressed'] });
    button.addEventListener('click', () => { button.dataset.userClick = '1'; });
    button.addEventListener('animationend', () => button.classList.remove('is-popping'));
  });

  /* ---------- Email copy: the button already says "Copied"; give it a pop. ---------- */
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    new MutationObserver(() => {
      if (button.getAttribute('data-state') !== 'success') return;
      button.classList.remove('is-confirmed');
      void button.offsetWidth;
      button.classList.add('is-confirmed');
    }).observe(button, { attributes: true, attributeFilter: ['data-state'] });
  });

  /* ---------- Card tool piles: measure where each chip rests in the pile ---------- */
  function pileTools() {
    document.querySelectorAll('.card-tools').forEach(group => {
      const chips = [...group.children];
      const end = group.offsetWidth;
      chips.forEach((chip, i) => {
        const rest = end - 28 - (chips.length - 1 - i) * 18;
        chip.style.setProperty('--sx', `${rest - chip.offsetLeft}px`);
      });
    });
  }
  pileTools();
  addEventListener('resize', pileTools);
  document.fonts?.ready.then(pileTools);

  /* ---------- Phone tab bar ---------- */
  const nav = document.querySelector('.mobile-switch');
  if (!nav) return;
  const phone = matchMedia('(max-width: 809px)');
  let going = false;

  // Stretch the highlight from the current tab to the target, then shrink onto it.
  function stretchTo(target) {
    const current = nav.querySelector('a[aria-current]');
    if (!current || current === target || reduced.matches) return Promise.resolve();
    const box = nav.getBoundingClientRect();
    const a = current.getBoundingClientRect();
    const b = target.getBoundingClientRect();
    const pill = document.createElement('span');
    pill.className = 'tab-stretch';
    nav.prepend(pill);
    nav.classList.add('is-stretching');
    const left = Math.min(a.left, b.left) - box.left;
    const right = Math.max(a.right, b.right) - box.left;
    const frames = [
      { left: `${a.left - box.left}px`, width: `${a.width}px` },
      { left: `${left}px`, width: `${right - left}px`, offset: 0.55 },
      { left: `${b.left - box.left}px`, width: `${b.width}px` },
    ];
    target.classList.add('is-target');
    return pill.animate(frames, { duration: 300, easing: 'cubic-bezier(.22,.68,0,1)', fill: 'forwards' }).finished.catch(() => {});
  }

  function go(target) {
    if (going) return;
    going = true;
    stretchTo(target).then(() => { location.assign(target.href); });
  }
  window.trbnTabGo = go;

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      if (link.hasAttribute('aria-current') || reduced.matches) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      go(link);
    });
  });
  addEventListener('pageshow', () => {
    going = false;
    nav.classList.remove('is-stretching');
    nav.querySelectorAll('.tab-stretch').forEach(n => n.remove());
    nav.querySelectorAll('.is-target').forEach(n => n.classList.remove('is-target'));
  });
})();
