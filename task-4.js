// const addBtn = document.querySelector('button[data-action="increment"]');

const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

removeBtn
  .addEventListener('click', () => {
    removeBtn.addEventListener('click', console.log((counterValue.innerHTML -= +1)));
  });

addBtn.addEventListener('click', () => {
  addBtn.addEventListener('click', console.log((counterValue.innerHTML -= -1)));
});


















