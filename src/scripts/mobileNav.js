// Mobile Burger + Submenü-Akkordeon. Re-init nach View-Transitions.
function init() {
  const burger = document.querySelector('[data-nav-burger]');
  const menu = document.querySelector('[data-nav-menu]');

  if (burger && menu && !burger.dataset.bound) {
    burger.dataset.bound = '1';
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    });
  }

  document.querySelectorAll('[data-sub-toggle]').forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      if (window.innerWidth > 900) return;
      e.preventDefault();
      const parent = btn.closest('.navbar__has-sub');
      parent?.classList.toggle('is-expanded');
    });
  });

  if (!window.__navResizeBound) {
    window.__navResizeBound = true;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        document.querySelector('[data-nav-menu]')?.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        document.querySelector('[data-nav-burger]')?.setAttribute('aria-expanded', 'false');
      }
    });
  }
}
init();
document.addEventListener('astro:after-swap', init);
