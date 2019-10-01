
//overlay-form
const openButton1 = document.querySelector(".openOverlay");
const template1 = document.querySelector("#overlayTemplate2").innerHTML;
const overlayForm = createOverlay(template1);


function createOverlay(template1) {
  let fragment = document.createElement('div');
  
  fragment.innerHTML = template1;
  
  const overlayElement1 = fragment.querySelector(".overlayForm");
  const contentElement1 = fragment.querySelector(".overlay-form__content");
  const contentTitle1 = fragment.querySelector(".overlay-form__title");
  const closeElement1 = fragment.querySelector(".overlay-form__close");
  
  fragment = null;
  
  overlayElement1.addEventListener("click", e => {
    if (e.target === overlayElement1) {
      closeElement1.click();
    }
  });
  
  closeElement1.addEventListener("click", e => {
    e.preventDefault();
    document.body.removeChild(overlayElement1);
    document.body.classList.remove('locked');
  });
  
  return {
    open() {
      document.body.appendChild(overlayElement1);
      document.body.classList.add('locked');
    },
    close() {
      closeElement1.click();
    },
    setContent(content,title) {
      contentElement1.innerHTML = content;
      if(title) {
        contentTitle1.innerHTML = title;
      }
    }
  };
}



let myForm = document.querySelector('#myForm');
let order = document.querySelector('#order');

myForm.addEventListener('submit', function(e){
e.preventDefault();

  if(validateForm(myForm)) {       

      let formData = new FormData();
      formData.append("name", myForm.elements.name.value);
      formData.append("phone", myForm.elements.phone.value);
      formData.append("comment", myForm.elements.comment.value);
      formData.append("to", "emailt@gmail.com");      
     
      let url = "https://webdev-api.loftschool.com/sendmail";
     
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(formData);

      // order.disable = true;  
      xhr.addEventListener("load", () => {
      order.disable = false;
      if(xhr.response.status >= 400) {
      console.log(xhr);
       overlayForm.open();
       overlayForm.setContent('Что-то пошло не так');
      } else {
        overlayForm.open();
        overlayForm.setContent(xhr.response.message);
      }
        }
      
        );
  
    }
  });
 

function validateForm(form) {
  let valid = true;

  if(!validateField(form.elements.name)) {
    valid = false;
  }

  if(!validateField(form.elements.phone)) {
    valid = false;
  }

  // if(!validateField(form.elements.email)) {
  //   valid = false;
  // }
  return valid;
}

function validateField(field) {
     field.nextElementSibling.textContent = field.validationMessage;
     return field.checkValidity();
}