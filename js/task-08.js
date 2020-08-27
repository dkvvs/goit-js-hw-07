const createRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const inputRef = document.querySelector('.js-input');
const cardRootRef = document.querySelector('#boxes');

createRef.addEventListener('click', onCreateBoxes);
destroyRef.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
  createBoxes(inputRef.value);
}

function onDestroyBoxes() {
  destroyBoxes();
}

function createBoxes(amount) {
  let addedValue = 0;
  const defaultElement = 30;
  const allElements = [];
  for (let i = 0; i < amount; i += 1) {
    const containerRef = document.createElement('div');
    containerRef.classList.add('card');
    containerRef.style.width = defaultElement + addedValue + 'px';
    containerRef.style.height = defaultElement + addedValue + 'px';
    containerRef.style.backgroundColor = getRandomColor();
    allElements.push(containerRef);
    addedValue += 10;
  }
  cardRootRef.append(...allElements);
}

function destroyBoxes() {
  const cardElements = document.querySelectorAll('.card');
  cardElements.forEach(function (element) {
    element.remove();
  });
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
