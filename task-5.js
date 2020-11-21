const inputRef = document.querySelector('#name-input');
const nameLebelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    nameLebelRef.textContent = event.target.value;
    if (!event.target.value) {
      nameLebelRef.textContent = 'незнакомец';
    }
});