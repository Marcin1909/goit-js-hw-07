const categoriesList = document.querySelectorAll(`ul#categories li.item`);

const numbersOfCategories = categoriesList.length;
console.log(`Liczba kategorii: ${numbersOfCategories}`);

categoriesList.forEach((category) => {
    const header = category.querySelector(`h2`).textContent;
    const numberOfItems = category.querySelectorAll(`li`).length;
    console.log(`Kategoria: ${header} ${numberOfItems} elementów`);
});