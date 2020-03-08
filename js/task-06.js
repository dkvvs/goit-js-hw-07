const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  const box = event.target;
  const boxLength = Number(event.target.dataset.length);
  const boxValue = event.target.value.length;

  if (boxLength === boxValue) {
    box.classList.add('valid');
    box.classList.remove('invalid');
  } else {
    box.classList.add('invalid');
    box.classList.remove('valid');
  }
}
