const nameInput = document.getElementById(`name-input`);
const nameoutPut = document.getElementById(`name-output`);

nameInput.addEventListener(`input`, () => {
    const inputValue = nameInput.value.trim();
    nameoutPut.textContent = inputValue || `Anonymous`;
});