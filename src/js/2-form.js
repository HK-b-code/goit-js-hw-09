const form = document.querySelector('.feedback-form');

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

form.email.value = formData.email;
form.message.value = formData.message;

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.email.value || !form.message.value) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

input.setAttribute('placeholder', 'Enter your email');
textarea.setAttribute('placeholder', 'Enter your message');


input.addEventListener('focus', function () {
  if (!input.value) {
    input.setAttribute('placeholder', 'Enter your email');
  }
});

input.addEventListener('blur', function () {
  if (!input.value) {
    input.removeAttribute('placeholder');
  }
});

textarea.addEventListener('focus', function () {
  if (!textarea.value) {
    textarea.setAttribute('placeholder', 'Enter your message');
  }
});

textarea.addEventListener('blur', function () {
  if (!textarea.value) {
    textarea.removeAttribute('placeholder');
  }
});
