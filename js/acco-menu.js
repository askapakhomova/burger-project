let accoMenu = document.querySelector('#acco-menu');


accoMenu.addEventListener('click', function(e) {
  e.preventDefault();
  let target = e.target;
  let currentTarget = target.parentElement;
  var currentDesc = target.nextElementSibling;

  function clear() {
    let activeContent = document.querySelector('.accordeon-menu__item--active');
  if(activeContent) {
    activeContent.classList.remove('accordeon-menu__item--active');
     resetWidth(activeContent.lastElementChild);
  }
}

 function setWidth() {
  // узнаём ширину окна
  let windowSize = document.body.clientWidth;
  if (windowSize < 800) {
  // узнаём ширину кнопки
  let tabSize = document.querySelector('.accordeon-menu__content').offsetWidth;
  // высчитываем размер контента исходя из полученных данных
  let currentWidth = windowSize - (tabSize * 3);
  } else {
    currentWidth = 530;
  }
  // задаём новый размер нашему контенту
  currentDesc.style.width = currentWidth + 'px';
}

  function resetWidth(element) {
  element.style.width = 0;
   }


  if(target.classList.contains('accordeon-menu__content')) {
    if(currentTarget.classList.contains('accordeon-menu__item--active')) {
      currentTarget.classList.remove('accordeon-menu__item--active');
       resetWidth(currentDesc);
    } else {
      clear();
   currentTarget.classList.add('accordeon-menu__item--active');
      setWidth();
  }
}

if (target.classList.contains('acco__exit')) {
  let activeContent = document.querySelector('.accordeon-menu__item--active');
 activeContent.classList.remove('accordeon-menu__item--active');
resetWidth(activeContent.lastElementChild);
}

}
);






