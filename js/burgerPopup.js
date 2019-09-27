var burgerPopup = document.querySelector('.burger-slider__popup-button');



function openBurgerPopup() {

  burgerPopup.classList.add('active');
  
}
function closeBurgerPopup() {
  burgerPopup.classList.remove('active');
}

burgerPopup.addEventListener('click', function(e){
  e.preventDefault();

  if(burgerPopup.classList.contains('active')) {
    closeBurgerPopup();
  } else {
     openBurgerPopup();
  }
});
