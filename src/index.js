import './index.html';
import './normalize.min.css';
import './index.scss';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const contactsSubmitBtn = document.getElementById('contacts__submit-btn');
const errorName = document.getElementById('contacts__input-error-name');
const errorEmail = document.getElementById('contacts__input-error-email');
const errorTextarea = document.getElementById('contacts__input-error-textarea');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const textInput = document.getElementById('text');
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

   const body = { name, email, body: text }
   sendForm(body);
})

addFocusListener(nameInput, errorName);
addFocusListener(emailInput, errorEmail);
addFocusListener(textInput, errorTextarea);

