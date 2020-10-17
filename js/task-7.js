// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться
// размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const textRef = document.querySelector('#text');
const fontControlRef = document.querySelector('#font-size-control');
fontControlRef.addEventListener('input', onInputFontValue);
function onInputFontValue(event) {
  // console.log(fontControlRef.value);
  textRef.style.fontSize = `${fontControlRef.value}px`;
}
