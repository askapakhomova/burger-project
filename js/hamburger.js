var hamburgerButton = document.querySelector('#hamburgerButton');
var hamburgerMenu = document.querySelector('#hamburgerMenu');

function openHaburger() {
  hamburgerMenu.classList.add('active');
  hamburgerButton.classList.add('is-active');
}

function closeHamburger() {
  hamburgerMenu.classList.remove('active');
  hamburgerButton.classList.remove('is-active');
}


hamburgerButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (hamburgerButton.classList.contains('is-active')) {
    closeHamburger();
  } else {
    openHaburger();
  }
});

hamburgerMenu.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    hamburgerMenu.classList.add('fadeOut');
    setTimeout(() => {
      closeHamburger();
      hamburgerMenu.classList.remove('fadeOut');
    }, 400);
  }
});