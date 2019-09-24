let accoTeam = document.querySelector('#acco-team');


accoTeam.addEventListener('click', function(e) {
  e.preventDefault();
  let target = e.target;
  let currentTarget = target.parentElement;
  var currentDesc = target.nextElementSibling;

  function clear() {
    var activeContent = document.querySelector('.accordeon__item--active');
  if(activeContent) { 
    activeContent.classList.remove('accordeon__item--active');
    resetHeight(activeContent.lastElementChild);
  
    }
  }


 function setHeight() {
 let currentHeight = currentTarget.scrollHeight;
 currentDesc.style.height = currentHeight + '%';
}
 
 

function resetHeight(element) {
  element.style.height = 0;
  }


  if(target.classList.contains('title--color--white--arrow')) {
    if(currentTarget.classList.contains('accordeon__item--active')) {
      currentTarget.classList.remove('accordeon__item--active');
      resetHeight(currentDesc);
    } else {

      clear();
   currentTarget.classList.add('accordeon__item--active');
     setHeight();

  }
}
  }
);