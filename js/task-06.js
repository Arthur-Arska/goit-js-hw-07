const inputEl = document.querySelector("#validation-input");
let lengthValue = Number(inputEl.dataset.length);

// console.log(typeOf validLength);
inputEl.addEventListener("blur", lengthInput);

function lengthInput(event) {
    const inputValue = event.target.value;
    if (inputValue.length !== lengthValue) {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    } else {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
}