const widget = document.querySelector(".widget");
const color = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");

const body = changeColor;

function getRandomHexColor() {
  if (
    document.getElementById("body").backgroundColor.value ===
    backgroundColor.value
  ) {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
}

changeColor.addEventListener("change", getRandomHexColor);
