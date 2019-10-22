let button = document.querySelector('#button');
let success = document.querySelector('#success');
let form = document.querySelector('#form');

button.addEventListener('click', function() {
	success.classList.add('success-wrapper-active');
	form.classList.add('main-wrapper-dis');
});