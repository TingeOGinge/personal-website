const overlayTriggers = document.querySelectorAll('.overlayTrigger');
const overlay = document.querySelector('#overlay');

const navElements = {
  desktop: {
    home: {
      button: document.querySelector('#widescreenHome'),
      destination: document.querySelector('#introFPara'),
      scrollStyle: 'center',
    },
    highlights: {
      button: document.querySelector('#widescreenHighlights'),
      destination: document.querySelector('#highlightsFPara'),
      scrollStyle: 'center',
    },
    university: {
      button: document.querySelector('#widescreenUniversity'),
      destination: document.querySelector('#universityFPara'),
      scrollStyle: 'center',
    },
  },
  mobile: {
    home: {
      button: document.querySelector('#mobileHome'),
      destination: document.querySelector('#introHeading'),
      scrollStyle: 'center',
    },
    highlights: {
      button: document.querySelector('#mobileHighlights'),
      destination: document.querySelector('#highlightsHeading'),
      scrollStyle: 'start',
    },
    university: {
      button: document.querySelector('#mobileUniversity'),
      destination: document.querySelector('#universityHeading'),
      scrollStyle: 'start',
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
        scrollToSection(navElement.destination, navElement.scrollStyle)
      });
    }
  }
}

function scrollToSection(destination, blockStyle = 'center') {
  destination.scrollIntoView({
    behaviour: 'smooth',
    block: blockStyle,
    inline: 'start'
  });
}

function toggleOverlay() {
  overlay.classList.toggle('visibleMobileNav');
  closeIcon.classList.toggle('hidden');
}
