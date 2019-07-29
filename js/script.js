mobileMenuOverlay = document.querySelector('#overlay');
mobileMenuLinks = document.querySelectorAll('.mobileNavA');
hamburgerIcon = document.querySelector('#hamburgerIcon');

window.addEventListener('load', init);

function init() {
  hamburgerIcon.addEventListener('click', toggleMobileNav);

  for (const link of mobileMenuLinks){
    link.addEventListener('click', toggleMobileNav)
  }
}

function toggleMobileNav() {
  mobileMenuOverlay.classList.toggle('visibleMobileNav');
}
