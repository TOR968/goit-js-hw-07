const counterValue = 0;
const increment = counterValue + 1;
const decrement = counterValue - 1;

const valueEl = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data - action = "increment"]');
const buttonDecrement = document.querySelector('[data - action = "decrement"]');

buttonIncrement.addEventListener('click', event => {
  console.log(event);
});
buttonDecrement.addEventListener('click', event => {
  console.log(event);
});
