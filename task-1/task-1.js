const allCategories = document.querySelectorAll(".item");
console.dir(`В списке ${allCategories.length} категории`);

allCategories.forEach(category => {
    console.dir(`Категория: ${category.firstElementChild.textContent}`);
    console.dir(
      `Количество элементов: ${category.lastElementChild.children.length}`,
    );
})
