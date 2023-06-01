const widget = document.querySelector(".widget");
const color = document.querySelector(".color");
const body = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function setNewColor() {
  body.style.backgroundColor = `$(getRandomHexColor.value)`;
}

changeColor.addEventListener("change", getRandomHexColor);
