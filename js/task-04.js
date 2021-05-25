const refs = {
  spanRef: document.querySelector("#value"),
  buttonIncrementRef: document.querySelector('[data-action="increment"]'),
  buttonDecrementRef: document.querySelector('[data-action="decrement"]'),
};

let counterValue = 0;
function increment() {
  counterValue += 1;
  refs.spanRef.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.spanRef.textContent = counterValue;
}

refs.buttonIncrementRef.addEventListener("click", increment);
refs.buttonDecrementRef.addEventListener("click", decrement);