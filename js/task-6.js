// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />;

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
  if (event.currentTarget.value.length < inputRef.dataset.length) {
    inputRef.style.borderColor = '#f44336';
  } else {
    inputRef.style.borderColor = '#4caf50';
  }
}
