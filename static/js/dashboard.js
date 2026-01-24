function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("foodCart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-badge").innerText = count;
  document.getElementById("cart-items").innerText = count;
}

function updateStats() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  document.getElementById("total-orders").innerText = orders.length;
}

updateCartBadge();
updateStats();

// Navigation
function goToMenu() {
  window.location.href = "/menu";
}
function goToCart() {
  window.location.href = "/cart";
}
function goToOrders() {
  window.location.href = "/orders";
}
function goToProfile() {
  window.location.href = "/profile";
}
