const refs = {
  input: document.querySelector('#validation-input'),
  textLength: document.querySelector('data-length'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(refs.input.value.length);
  if (refs.textLength > refs.input.value.length) {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  } else {
    refs.input.classList.remove('invalid');
    refs.input.classList.add('valid');
  }
}

// document.getElementById('validation-input').onblur = function () {
//   console.log(this.value.length);
//   if (this.getAttribute('data-length') > this.value.length) {
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//   } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//   }
// };
