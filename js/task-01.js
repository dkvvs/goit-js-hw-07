const categoriesRef = document.querySelectorAll(`#categories .item`);
const quantityCat = categoriesRef.length;
console.log(`В списке ${quantityCat} категории.`);

categoriesRef.forEach(item => {
  console.log('Категория: ', item.querySelector('h2').textContent);
  console.log('Количество элементов: ', item.querySelectorAll('li').length);
});
