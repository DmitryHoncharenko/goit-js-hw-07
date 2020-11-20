const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach((ingredients, item, list) => {
  list = document.querySelector('#ingredients');
  item = document.createElement('li');
  item.textContent += ingredients;
  list.append(item);
  console.log(ingredients);
});

