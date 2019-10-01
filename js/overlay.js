//reviews
const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);


function createOverlay(template) {
  let fragment = document.createElement('div');
  
  fragment.innerHTML = template;
  
  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".overlay__content");
  const contentTitle = fragment.querySelector(".overlay__title");
  const closeElement = fragment.querySelector(".overlay__close");
  
  fragment = null;
  
  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });
  
  closeElement.addEventListener("click", e => {
    e.preventDefault();
    document.body.removeChild(overlayElement);
    document.body.classList.remove('locked');
  });
  
  return {
    open() {
      document.body.appendChild(overlayElement);
      document.body.classList.add('locked');
    },
    close() {
      closeElement.click();
    },
    setContent(content,title) {
      contentElement.innerHTML = content;
      if(title) {
        contentTitle.innerHTML = title;
      }
    }
  };
}

// reviews //

let reviews = document.querySelector('#reviews');

reviews.addEventListener('click', function(e)
{
  e.preventDefault();

  if(e.target.classList.contains('button--reviews')) {
    let title = e.target.closest('.reviews__hover').children[0].innerHTML;
    let content = e.target.closest('.reviews__hover').children[1].innerHTML;

    overlay.open();
    overlay.setContent(content, title);
    console.log(e.target.closest('.reviews__hover').children[0]);
  }

  if(e.target.classList.contains('button--phones')) {
    let title = e.target.closest('.reviews__hover').children[0].innerHTML;
    let content = e.target.closest('.reviews__hover').children[1].innerHTML;

    overlay.open();
    overlay.setContent(content, title);
    console.log(e.target.closest('.reviews__hover').children[0]);
  }
});


