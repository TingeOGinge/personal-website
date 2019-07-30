closeIcon = document.querySelector('#closeIcon');
hamburgerIcon = document.querySelector('#hamburgerIcon');
mobileMenuLinks = document.querySelectorAll('.mobileNavA');
mobileMenuOverlay = document.querySelector('#overlay');

window.addEventListener('load', init);

function init() {
  closeIcon.addEventListener('click', toggleMobileNav);
  hamburgerIcon.addEventListener('click', toggleMobileNav);

  for (const link of mobileMenuLinks){
    link.addEventListener('click', toggleMobileNav)
  }
}

function toggleMobileNav() {
  mobileMenuOverlay.classList.toggle('visibleMobileNav');
  closeIcon.classList.toggle('hidden');
}
