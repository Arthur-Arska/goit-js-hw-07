const ingredients = ['Картопля', 'Гриби', 'Часник', 'Помідори', 'Зелень', 'Приправи'];

const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map((element) => {
    const newElements = document.createElement('li');
    newElements.textContent = element;
    return newElements;
});

console.log(elements);
ingredientsList.append(...elements);