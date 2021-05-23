const categories = document.querySelector('#categories')

const numberOfCategories = categories.querySelectorAll('.item');
    console.log(`У списку ${numberOfCategories.length} категорії.`)

numberOfCategories.forEach(item => {
    console.log(`Категорія: ${item.firstElementChild.textContent}`),
    console.log(`Кількість елементів: ${item.lastElementChild.children.length}`)
})