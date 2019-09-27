const left = document.querySelector('#left');
const right = document.querySelector('#right');
let slider = document.querySelector('#slider');
const computed = getComputedStyle(slider);



right.addEventListener('click', function(e) {
e.preventDefault();

let currentRight = parseInt(computed.right);
let sliderElem = document.querySelector('.burger-slider__item');
let width = sliderElem.offsetWidth;
let currentWidth = width * 4;


if(!currentRight) {
  currentRight = 0;
}

if(currentRight < currentWidth){
  slider.style.right = currentRight + width + "px";

}

});

left.addEventListener('click', function(e) {
  e.preventDefault(); 
  let currentRight = parseInt(computed.right);
  let sliderElem = document.querySelector('.burger-slider__item');
  let width = sliderElem.offsetWidth;
  let currentWidth = width * 4;


if(!currentRight) {
  currentRight = 0;
}

  if(currentRight > 0){
    slider.style.right = currentRight - width + "px";
  
  }
});