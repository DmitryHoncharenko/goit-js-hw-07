const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItem = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  let createLi = document.createElement('li');
  createLi.textContent = el;
  return createLi;
});

listItem.append(...items)


// ingredients.forEach((ingredients, item, list) => {
//   list = document.querySelector('#ingredients');
//   item = document.createElement('li');
//   item.textContent += ingredients;
//   list.append(item);
//   console.log(ingredients);
// });

