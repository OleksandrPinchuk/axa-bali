(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  console.log("start")

  const toggleMenu = () => {
    const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
    mobileMenu.classList.toggle('is-open');
    console.log("tooogle")
    document.body.classList.toggle('no-scroll', !isMenuOpen);
  };

  openMenuBtn?.addEventListener('click', toggleMenu);
  closeMenuBtn?.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('no-scroll')
});
})();

// const burgerBtn = document.getElementById('burger-btn');
// const navLinks = document.getElementById('nav-links');

// burgerBtn.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });