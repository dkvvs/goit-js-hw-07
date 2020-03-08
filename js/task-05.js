const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  const lengthName = event.target.value.length;
  if (lengthName === 0) {
    outputRef.textContent = 'незнакомец';
  } else {
    outputRef.textContent = event.target.value;
  }
}
