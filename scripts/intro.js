function parallax() {
  const intro = document.getElementById('intro');

  intro.style.backgroundPositionY = `${pageYOffset / 1.5}px`;
}

document.addEventListener('scroll', parallax)
