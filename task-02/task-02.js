const list = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const firstItem = document.createElement("li.item");
firstItem.textContent = "Potatoes";
list.prepend(firstItem);

const scndItem = document.createElement("li.item");
scndItem.textContent = "Muschrooms";
list.prepend(scndItem);

const thirdItem = document.createElement("li.item");
thirdItem.textContent = "Garlic";
list.prepend(thirdItem);

const fourthItem = document.createElement("li.item");
fourthItem.textContent = "Tomatos";
list.prepend(fourthItem);
