console.clear();

const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach((element) => {
  const categoriesName = element.querySelector("h2");
  const categoriesElements = element.querySelectorAll("li");
  console.log(`Category: ${categoriesName.textContent}`);
  console.log(`Elements: ${categoriesElements.length}`);
});
