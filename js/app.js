const categoriesBtn = document.getElementById("categoriesBtn");
const categories = document.getElementById("categories");
const body = document.querySelector("body");

categoriesBtn.addEventListener("click", () => {
  categories.classList.toggle("active");
});
