const left = document.querySelector('#left');
const right = document.querySelector('#right');
let slider = document.querySelector('#slider');
const computed = getComputedStyle(slider);

var currentRight = parseInt(computed.right);

right.addEventListener('click', function(e) {
e.preventDefault();

// let currentRight = parseInt(computed.right);
// let sliderElem = document.querySelector('.burger-slider__item');
// let width = sliderElem.offsetWidth;
// let currentWidth = width * 4;


// if(!currentRight) {
//   currentRight = 0;
// }

// if(currentRight < currentWidth){
//   slider.style.right = currentRight + width + "px";

// }

if(currentRight < 400){
  slider.style.right = currentRight + 100 + "%";
  currentRight+=100;
  console.log(currentRight);

}

});

left.addEventListener('click', function(e) {
  e.preventDefault(); 

  // let sliderElem = document.querySelector('.burger-slider__item');
  // let width = sliderElem.offsetWidth;
  // let currentWidth = width * 4;


if(!currentRight) {
  currentRight = 0;
}

  if(currentRight > 100){
    currentRight-=100;
    slider.style.right = currentRight - 100 + "%";
  
    console.log(currentRight);
  }
});