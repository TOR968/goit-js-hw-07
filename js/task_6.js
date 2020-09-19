const input = document.querySelector('#validation-input');
const textLength = input.getAttribute('data-length');
input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  console.log(input.value.length);
  if (textLength > input.value.length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
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
