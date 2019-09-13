var hamburgerButton = document.querySelector('#hamburgerButton');
var hamburgerMenu = document.querySelector('#hamburgerMenu');

hamburgerButton.addEventListener('click', function (e) {
  e.preventDefault();
  if(hamburgerButton.classList.contains('is-active')){
  hamburgerMenu.classList.remove('active');
  hamburgerButton.classList.remove('is-active');
  } else {
    hamburgerMenu.classList.add('active');
    hamburgerButton.classList.add('is-active');
  }
});