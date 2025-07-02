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

window.addEventListener('load', updateButtons);


