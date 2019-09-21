let accoMenu = document.querySelector('#acco-menu');

accoMenu.addEventListener('click', function(e) {
  e.preventDefault();
  let target = e.target;
  let currenttarget = target.parentElement;

  function clear() {
    let activeContent = document.querySelector('.accordeon-menu__item--active');
  if(activeContent) {
    activeContent.classList.remove('accordeon-menu__item--active');
  }
  }

// function setWidth() {
// let currentWidth = currenttarget.scrollWidth;
// currenttarget.style.width = currentWidth + 'rem' ;
// }


  if(target.classList.contains('accordeon-menu__content')) {
    if(currenttarget.classList.contains('accordeon-menu__item--active')) {
      currenttarget.classList.remove('accordeon-menu__item--active');
    } else {
      clear();
   currenttarget.classList.add('accordeon-menu__item--active');
    // setWidth();
  }
}
  }

);

