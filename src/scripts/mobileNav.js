// Mobile Burger + Submenü-Akkordeon
const burger = document.querySelector('[data-nav-burger]');
const menu = document.querySelector('[data-nav-menu]');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });
}

// Submenü-Toggle nur auf Mobile
document.querySelectorAll('[data-sub-toggle]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.innerWidth > 900) return;
    e.preventDefault();
    const parent = btn.closest('.navbar__has-sub');
    parent?.classList.toggle('is-expanded');
  });
});

// Menü beim Resize zurücksetzen
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    menu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    burger?.setAttribute('aria-expanded', 'false');
  }
});
