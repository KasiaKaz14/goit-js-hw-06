"use.strict";

console.clear();

const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((element) => {
  const categoriesName = element.querySelector("h2");
  console.log(`Category: ${categoriesName.textContent}`);
  const categoriesElements = element.querySelectorAll("li");
  console.log(`Elements: ${categoriesElements.length}`);
});
