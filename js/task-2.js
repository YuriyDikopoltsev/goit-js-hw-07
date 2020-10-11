const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsContainerRef = document.querySelector('#ingredients');
const makeIngredientList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientRef = document.createElement('li');
    ingredientRef.textContent = ingredient;
    return ingredientRef;
  });
};
const references = makeIngredientList(ingredients);
ingredientsContainerRef.append(...references);
