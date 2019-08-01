const overlayTriggers = document.querySelectorAll('.overlayTrigger');
const overlay = document.querySelector('#overlay');

const navElements = {
  desktop: {
    home: {
      button: document.querySelector('#widescreenHome'),
      destination: document.querySelector('#introFPara'),
      blockStyle: 'center',
    },
    highlights: {
      button: document.querySelector('#widescreenHighlights'),
      destination: document.querySelector('#highlightsFPara'),
      blockStyle: 'center',
    },
    university: {
      button: document.querySelector('#widescreenUniversity'),
      destination: document.querySelector('#universityFPara'),
      blockStyle: 'center',
    },
  },
  mobile: {
    home: {
      button: document.querySelector('#mobileHome'),
      destination: document.querySelector('#introHeading'),
      blockStyle: 'center',
    },
    highlights: {
      button: document.querySelector('#mobileHighlights'),
      destination: document.querySelector('#highlightsHeading'),
      blockStyle: 'start',
    },
    university: {
      button: document.querySelector('#mobileUniversity'),
      destination: document.querySelector('#universityHeading'),
      blockStyle: 'start',
    },
  },
}

window.addEventListener('load', init);

function init() {
  for (const trigger of overlayTriggers) {
    trigger.addEventListener('click', toggleOverlay);
  }

  for (const nav of Object.values(navElements)) {
    for (const navElement of Object.values(nav)) {
      navElement.button.addEventListener('click', () => {
        scrollToSection(navElement.destination, navElement.blockStyle)
      });
    }
  }
}

function scrollToSection(destination, blockStyle) {
  destination.scrollIntoView({ behaviour: 'smooth', block: blockStyle, inline: 'start'});
}

function toggleOverlay() {
  overlay.classList.toggle('visibleMobileNav');
  closeIcon.classList.toggle('hidden');
}
