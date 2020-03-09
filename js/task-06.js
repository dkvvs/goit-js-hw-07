const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', onInputChange);

function onInputChange(event) {
  const box = event.target;
  const boxLength = Number(box.dataset.length);
  const boxValue = box.value.length;

  if (boxLength === boxValue) {
    box.classList.add('valid');
    box.classList.remove('invalid');
  } else {
    box.classList.add('invalid');
    box.classList.remove('valid');
  }
}
