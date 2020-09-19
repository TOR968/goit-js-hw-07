const inputEl = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  textInput.style.fontSize = event.currentTarget.value + 'px';
}
