overlayTriggers = document.querySelectorAll('.overlayTrigger');
overlay = document.querySelector('#overlay');

window.addEventListener('load', init);

function init() {
  for (const trigger of overlayTriggers){
    trigger.addEventListener('click', toggleOverlay)
  }
}

function toggleOverlay() {
  overlay.classList.toggle('visibleMobileNav');
  closeIcon.classList.toggle('hidden');
}
