const input = document.querySelector('#validation-input');
const textLength = input.getAttribute('data-length');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(textLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }

  console.log('event=', event.currentTarget.value.length);
}
