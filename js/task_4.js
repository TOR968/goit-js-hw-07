let counterValue = 0;

function increment() {
  return (counterValue += 1);
}
function decrement() {
  return (counterValue -= 1);
}

const valueEl = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonIncrement.addEventListener('click', () => {
  console.log('клик+');
  valueEl.textContent = increment();
});
buttonDecrement.addEventListener('click', () => {
  console.log('клик-');
  valueEl.textContent = decrement();
});
