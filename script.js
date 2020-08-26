// select the cart number of items
const productCount = document.querySelector(".productCount");
const btnList = document.querySelectorAll(".addToCart");
// console.log(productCount.classList);
const handleClick = (event) => {
  if (event.currentTarget.classList.contains("add3toCart")) {
    productCount.textContent = parseInt(productCount.textContent) + 3;
  } else productCount.textContent++;

  console.log(productCount.textContent);
};

btnList.forEach((btn) => btn.addEventListener("click", handleClick));
