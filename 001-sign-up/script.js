const signUpForm = document.getElementById('signupForm');

signUpForm.addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();

  console.log('Hello World!');
}
