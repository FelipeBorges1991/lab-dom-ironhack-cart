// ITERATION 1

function updateSubtotal(product) {
  const price = document.querySelectorAll(".price span");
  const quantity = document.querySelectorAll(".quantity input");
  const subTotal = document.querySelectorAll(".subtotal span");
  let total = 0;

  let totalParcial = [];
  for (let i = 0; i < price.length; i++) {
    totalParcial[i] =
      parseInt(price[i].innerHTML) * parseInt(quantity[i].value);
    subTotal[i].innerHTML = totalParcial[i];
    total += parseInt(subTotal[i].innerHTML);
  }
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.getElementsByClassName("product");
  for (let i = 0; i < multipleProducts.length; i++) {
    console.log(multipleProducts[i]);
    updateSubtotal(multipleProducts[i]);
  }

  // ITERATION 3
  const totalProducts = document.getElementById("total-value")
    .firstElementChild;
  totalProducts.innerHTML = updateSubtotal(multipleProducts);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
