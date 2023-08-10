import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    emailInput.value = email;
    messageInput.value = message;
  } else {
    emailInput.value = '';
    messageInput.value = '';
  }
}

function onSubmit(event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value
  };
  if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
      return alert("All data must be filled");
    } 
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

const throttledSaveFormData = throttle(saveFormData, 500);

form.addEventListener('submit', onSubmit);
emailInput.addEventListener('input', throttledSaveFormData);
messageInput.addEventListener('input', throttledSaveFormData);

populateFormFields();
