// Navbar bekommt 'is-scrolled' nach geringem Scroll.
function init() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
init();
document.addEventListener('astro:after-swap', init);
