/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

// if (event.currentTarget.value.length === 0) {
//     refs.nameLabel.textContent = 'незнакомец';
// }

// if (event.currentTarget.value === '') {
//     refs.nameLabel.textContent = 'незнакомец';
// }
