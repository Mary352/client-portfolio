import './index.html';
import './normalize.min.css';
import './index.scss';

import nthFibo from './js/fibonacciTask';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const contactsSubmitBtn = document.getElementById('contacts__submit-btn');
const errorName = document.getElementById('contacts__input-error-name');
const errorEmail = document.getElementById('contacts__input-error-email');
const errorTextarea = document.getElementById('contacts__input-error-textarea');
const errorCheckbox = document.getElementById('contacts__input-error-checkbox');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('text');
const policyCheckbox = document.getElementById('contacts__checkbox');
const contactsForm = document.getElementById('contacts__form');

function showError(block, errorText) {
   block.textContent = errorText;
   block.style.display = 'block';
}

function hideBlock(block) {
   block.style.display = 'none';
}

function addFocusListener(input, block) {
   input.addEventListener('focus', () => {
      hideBlock(block);
   })
}

async function sendForm(body) {
   const url = BASE_URL + '/posts/1/comments'
   let res = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body)
   })

   const result = await res.json()
   console.log("🚀 ~ contactsSubmitBtn.addEventListener ~ result:", result)

   if (res.status === 201 || res.status === 200) {
      contactsForm.reset()
   }
}

contactsSubmitBtn.addEventListener('click', (e) => {
   e.preventDefault();

   const name = nameInput.value;
   const email = emailInput.value;
   const text = textInput.value;
   const policy = policyCheckbox.checked;

   if (!name) {
      showError(errorName, 'Введите ваше имя');
      return;
   }

   if (!emailRegex.test(email)) {
      showError(errorEmail, 'Неверная почта');
      return;
   }

   if (!text) {
      showError(errorTextarea, 'Введите ваше сообщение');
      return;
   }

   // policy is used for mobile only
   const policyBlock = document.getElementById('contacts__policy');
   const policyBlockStyleDisplay = document.defaultView.getComputedStyle(policyBlock, null).display
   if (!policy && policyBlock && policyBlockStyleDisplay !== 'none') {
      showError(errorCheckbox, 'Необходимо ваше согласие');
      return;
   }

   const body = { name, email, body: text }
   sendForm(body);
})

addFocusListener(nameInput, errorName);
addFocusListener(emailInput, errorEmail);
addFocusListener(textInput, errorTextarea);
addFocusListener(policyCheckbox, errorCheckbox);

// --------------Fibonacci Task-----------------------
console.log('nthFibo(-25): ', nthFibo(-25))
console.log('nthFibo(0): ', nthFibo(0))
console.log('nthFibo(1): ', nthFibo(1))
console.log('nthFibo(2): ', nthFibo(2))
console.log('nthFibo(4): ', nthFibo(4))
console.log('nthFibo(5): ', nthFibo(5))
console.log('nthFibo(15): ', nthFibo(15))
console.log('nthFibo(26): ', nthFibo(26))