// const addBtn = document.querySelector('button[data-action="increment"]');

const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
const counter = document.querySelector('#counter');

// // event.preventDefault();
// counter.
// counter.classList.add('conteiner');
// counter.style.backgroundColor = 'teal';
// counter.style.border = '2px solid blue';
// counter.style.width = '85px';
// counter.style.padding = '5px'
// const buttonClass = document.querySelector('.button');
// buttonClass.style.
// console.log(buttonClass);

removeBtn
  .addEventListener('click', () => {
    removeBtn.addEventListener('click', console.log((counterValue.innerHTML -= +1)));
  });

addBtn.addEventListener('click', () => {
  addBtn.addEventListener('click', console.log((counterValue.innerHTML -= -1)));
});


















