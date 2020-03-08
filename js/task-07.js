const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  const box = event.target.value;
  spanRef.style.fontSize = box + 'px';
}
