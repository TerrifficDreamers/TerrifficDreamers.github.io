// Scroll-Reveal via IntersectionObserver
const els = document.querySelectorAll('[data-reveal]');
if (!els.length) { /* nichts zu tun */ }
else if (!('IntersectionObserver' in window)) {
  els.forEach(el => el.classList.add('is-visible'));
} else {
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
