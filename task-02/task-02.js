"use.strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
list.classList.add("item");
list.prepend(firstItem);

const scndItem = document.createElement("li");
scndItem.textContent = "Mushrooms";
list.classList.add("item");
list.prepend(scndItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = "Garlic";
list.classList.add("item");
list.prepend(thirdItem);

const fourthItem = document.createElement("li");
fourthItem.textContent = "Tomatos";
list.classList.add("item");
list.prepend(fourthItem);

const fifthItem = document.createElement("li");
fifthItem.textContent = "Herbs";
list.classList.add("item");
list.prepend(fifthItem);

const lastItem = document.createElement("li");
lastItem.textContent = "Condiments";
list.classList.add("item");
list.prepend(lastItem);

console.log(list);
