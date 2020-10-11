// const categoriesListRef = document.querySelector('#categories');
// console.log(categoriesListRef);
const itemListRef = document.querySelectorAll('.item');
// console.log(itemListRef);
itemListRef.forEach(({ children }) =>
  console.log(
    `Категория: ${children[0].textContent} \n
    Количество элементов: ${children[1].children.length}`,
  ),
);
