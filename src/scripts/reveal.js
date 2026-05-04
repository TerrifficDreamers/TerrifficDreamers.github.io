// Scroll-Reveal mit Varianten, Stagger & Letter-Splits.
// Re-läuft bei View-Transitions damit neue Pages animieren.

function splitLetters(el) {
  if (el.dataset.lettersSplit) return;
  const text = el.textContent || '';
  el.textContent = '';
  let i = 0;
  for (const ch of text) {
    const span = document.createElement('span');
    span.className = 'ltr';
    span.style.setProperty('--li', i++);
    span.textContent = ch === ' ' ? ' ' : ch;
    el.appendChild(span);
  }
  el.dataset.lettersSplit = '1';
}

function applyStagger(root) {
  root.querySelectorAll('[data-reveal-stagger]').forEach((parent) => {
    const kids = parent.querySelectorAll('[data-reveal]');
    kids.forEach((k, i) => k.style.setProperty('--stagger', i));
  });
}

function init() {
  document.querySelectorAll('[data-letters]').forEach(splitLetters);
  applyStagger(document);

  const els = document.querySelectorAll('[data-reveal], [data-letters]');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

init();
document.addEventListener('astro:after-swap', init);
