mobileMenuOverlay = document.querySelector('#overlay');
hamburgerIcon = document.querySelector('#hamburgerIcon');

window.addEventListener('load', init);

function init() {
  hamburgerIcon.addEventListener('click', openMobileNav);
}

function openMobileNav() {
  mobileMenuOverlay.classList.toggle('visibleMobileNav');
}
