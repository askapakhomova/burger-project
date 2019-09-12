var hamburgerButton = document.querySelector('#hamburgerBtn');
var hamburgerMenu = document.querySelector('#hamburgerMenu');

hamburgerButton.addEventListener('click', function (e) {
  e.preventDefault();
  hamburgerMenu.classList.add('active');
});