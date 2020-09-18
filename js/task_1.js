const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
  let category = elem.firstElementChild.textContent;
  let quantityElem = elem.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
}

// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, element => {
//   const title = element.querySelector('h2').innerHTML;
//   const itemsLength = element.querySelectorAll('li').length;
//   console.log(`Категория: ${title} \n Количество элементов: ${itemsLength}`);
// });
