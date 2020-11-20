const inputRef = document.querySelector('#validation-input');
const inputLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', () => {
  inputRef.classList.add('invalid');
  inputRef.classList.remove('valid');
  if (inputLength === inputRef.value.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (inputRef.value.length === 0) {
    inputRef.classList.remove('invalid');
    inputRef.classList.remove('valid');
  }
});
