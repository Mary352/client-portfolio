import './index.html';
import './normalize.min.css';
import './index.scss';

const contactsSubmitBtn = document.getElementById('contacts__submit-btn');
const BASE_URL = 'https://jsonplaceholder.typicode.com'

contactsSubmitBtn.addEventListener('click', async (e) => {
   e.preventDefault();

   const name = document.getElementById('username').value;
   const email = document.getElementById('email').value;
   const text = document.getElementById('text').value;

   const body = { name, email, body: text }
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
})