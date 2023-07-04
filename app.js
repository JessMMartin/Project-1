"use strict";
let cartItems = [];
let subtotal = 0.0;

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  subtotal += price;

  updateSubtotal();
  updateCartItemsList();

  alert("Product added to cart!");
}

function removeFromCart(index) {
  const removedItem = cartItems.splice(index, 1)[0];
  subtotal -= removedItem.price;

  updateSubtotal();
  updateCartItemsList();
}

function updateSubtotal() {
  const subtotalElement = document.getElementById("subtotalAmount");
  subtotalElement.textContent = subtotal.toFixed(2);
}

function updateCartItemsList() {
  const cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(index));
    li.appendChild(removeButton);

    cartItemsList.appendChild(li);
  });
}
