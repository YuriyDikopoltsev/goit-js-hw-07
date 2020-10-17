const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);
let resultRef = document.querySelector('#value');

const onDecrementBtnClick = () =>
  (resultRef.textContent = Number(resultRef.textContent) - 1);
const onIncrementBtnClick = () =>
  (resultRef.textContent = Number(resultRef.textContent) + 1);

btnDecrementRef.addEventListener('click', onDecrementBtnClick);
btnIncrementRef.addEventListener('click', onIncrementBtnClick);

// <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>;
