const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let ingredient of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  console.log(itemEl);
  const ul = document.querySelector('#ingredients');

  ul.appendChild(itemEl);
}
