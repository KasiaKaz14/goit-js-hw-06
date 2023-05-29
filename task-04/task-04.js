"use.strict";

const removeValue = document.querySelector('[data-action = "decrement"]');
const addValue = document.querySelector('[data-action = "increment"]');

const span = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  span.innerHTML = counterValue;
};

const increment = () => {
  counterValue += 1;
  span.innerHTML = counterValue;
};

addValue.addEventListener("click", increment);

removeValue.addEventListener("click", decrement);
