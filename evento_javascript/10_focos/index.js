const input = document.querySelector('input');
const body = document.querySelector('body');

input.addEventListener('focus', () => {
    body.style.backgroundColor = 'red';
})
input.addEventListener('blur', () => {
    body.style.backgroundColor = 'white';
})
