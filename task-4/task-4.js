// const addBtn = document.querySelector('button[data-action="increment"]');

const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

// console.log(length.counterValue.innerHTML += 1);



removeBtn.addEventListener('click', () => {
    event.preventDefault();
  removeBtn.addEventListener(
    'click',
    console.log((counterValue.innerHTML -= +1)),
  );
});

addBtn.addEventListener('click', () => {
    event.preventDefault();
  addBtn.addEventListener('click', console.log((counterValue.innerHTML -= -1)));
});


















