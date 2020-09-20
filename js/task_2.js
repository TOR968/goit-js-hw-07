const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulEl = document.querySelector('#ingredients');

const itemEl = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  console.log(liEl);
  return liEl;
});
ulEl.append(...itemEl);

// for (let ingredient of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   console.log(itemEl);
//   const ul = document.querySelector('#ingredients');

//   ul.appendChild(itemEl);
// }
