var hamburgerPopup = document.querySelector('#burgerPopup');

function openBurgerPopup() {
  hamburgerPopup.classList.add('active');
}
function closeBurgerPopup() {
  hamburgerPopup.classList.remove('active');
}

hamburgerPopup.addEventListener('click', function(e){
  e.preventDefault();
  if(hamburgerPopup.classList.contains('active')) {
    closeBurgerPopup();
  } else {
     openBurgerPopup();
  }
});

hamburgerPopup.addEventListener('click', function (e) {
  e.preventDefault();
  if(e.target.classList.contains('burger-slider__popup-menu')){
    hamburgerPopup.classList.add('fadeOut');
    setTimeout(() => {
      closeBurgerPopup();
      hamburgerPopup.classList.remove('fadeOut');
  }, 400);
  }
});