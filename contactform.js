// Contactform 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyV-5BBwvkSpI3OB90cBME5cE6CEUm3NXrYS90RlqnY1k3gsqdItsIWtnbpQsjh3Rm31w/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})