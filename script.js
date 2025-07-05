// Store Buttons 
const whyButton = document.getElementById('whyButton')
const serviceButton = document.getElementById('serviceButton')
const homeButton = document.getElementById('homeButton')

//Store Sections
const heroSection = document.getElementById('hero');
const serviceSection = document.getElementById('services')
const whySection = document.getElementById('whySection')

// On load listeners
window.addEventListener('load', updateButtons);
window.addEventListener('load', initialDisplay);

// Button Listener
whyButton.addEventListener('click', displayWhySection)
serviceButton.addEventListener('click', displayServiceSection)
homeButton.addEventListener('click', displayHeroSection)

function updateButtons() {
  const desktopButton = document.getElementById('desktopButton');
  const mobileButton = document.getElementById('mobileButton');

  if (window.innerWidth > 900) {
    desktopButton.style.display = 'inline-block';
    mobileButton.style.display = 'none';
  } else {
    desktopButton.style.display = 'none';
    mobileButton.style.display = 'inline-block';
  }
}

function initialDisplay() {
  heroSection.style.opacity = '1'
  whySection.style.opacity = '0'
  serviceSection.style.opacity = '0'

  if (window.innerWidth <= 550) {
    serviceSection.style.height = '80vh'
  }
}

function displayHeroSection() {
  heroSection.style.opacity = '1'
  whySection.style.opacity = '0'
  serviceSection.style.opacity = '0'

  if (window.innerWidth <= 550) {
    serviceSection.style.height = '70vh'
    homeButton.style.display = 'none'
    whyButton.style.display = 'inline-block'
    serviceButton.style.display = 'inline-block'
  }

}

function displayWhySection() {
  heroSection.style.opacity = '0'
  whySection.style.opacity = '1'
  serviceSection.style.opacity = '0'

  if (window.innerWidth <= 550) {
    serviceSection.style.height = '70vh'
    homeButton.style.display = 'inline-block'
    whyButton.style.display = 'none'
    serviceButton.style.display = 'inline-block'
  }

}

function displayServiceSection() {
  heroSection.style.opacity = '0'
  whySection.style.opacity = '0'
  serviceSection.style.opacity = '1'

  if (window.innerWidth <= 550) {
    serviceSection.style.height = '115vh'
    homeButton.style.display = 'inline-block'
    whyButton.style.display = 'inline-block'
    serviceButton.style.display = 'none' 
  }
}


