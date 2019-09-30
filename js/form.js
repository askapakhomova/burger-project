let myForm = document.querySelector('#myForm');
let order = document.querySelector('#order');

myForm.addEventListener('submit', function(e){
e.preventDefault();

  if(validateForm(myForm)) {       
  
    function ajaxForm(myForm) {

      let formData = new FormData();
      formData.append("name", form.elements.name.value);
      formData.append("phone", form.elements.phone.value);
      formData.append("comment", form.elements.comment.value);
      formData.append("to", "emailt@gmail.com");      
     
      let url = "https://webdev-api.loftschool.com/sendmail";
     
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", url);
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(formData);
      

      return xhr;
    }
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