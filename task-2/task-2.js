const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const list = document.querySelector('#ingredients');
// const item = document.createElement('li');
// item.textContent =
ingredients.forEach((ingredients, item, list) => {
    list = document.querySelector('#ingredients');
    item = document.createElement('li');
    item.textContent += ingredients;
    list.append(item);
});
// list.prepend(item);
