const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.name.textContent = event.target.value;
  if (refs.name.textContent.trim() === "") {
    refs.name.textContent = "незнайомець";
  }
}