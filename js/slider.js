
// const computed = getComputedStyle(slider);
// var currentRight = parseInt(computed.right);
// right.addEventListener('click', function(e) {
// e.preventDefault();

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

// if(currentRight < 400){
//   slider.style.right = currentRight + 100 + "%";
//   currentRight+=100;
// } 
// });

// left.addEventListener('click', function(e) {
//   e.preventDefault(); 

//   // let sliderElem = document.querySelector('.burger-slider__item');
//   // let width = sliderElem.offsetWidth;
//   // let currentWidth = width * 4;


// if(!currentRight) {
//   currentRight = 0;
// }

//   if(currentRight > 100){
//     currentRight-=100;
//     slider.style.right = currentRight - 100 + "%";
//   } 
// });

const left = document.querySelector('#left');
const right = document.querySelector('#right');
let slider = document.querySelector('#slider');

right.addEventListener('click', function (e) {
  e.preventDefault();
  loop("right");
}
);

left.addEventListener('click', function (e) {
  e.preventDefault();
  loop("left");

}
);

function loop(direction) {
  if (direction === 'right') {
    slider.appendChild(slider.firstElementChild);
  } else {
    slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  }
}

// slider popup //

let item = slider.firstElementChild;

console.log(item);
console.log(burgerPopup);

if (item.classList.contains('active')) {
  let burgerPopup = item.lastElementChild.previousElementSibling;
  item.classList.remove('active');

  function openBurgerPopup() {

    burgerPopup.classList.add('active');

  }
  function closeBurgerPopup() {
    burgerPopup.classList.remove('active');
  }

  burgerPopup.addEventListener('click', function (e) {
    e.preventDefault();

    if (burgerPopup.classList.contains('active')) {
      closeBurgerPopup();
    } else {
      openBurgerPopup();
    }
  }
  );
  item.classList.add('active');
}





 
   
