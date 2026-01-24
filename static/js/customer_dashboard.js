// ================== CUSTOMER DASHBOARD JS ==================

// Fake demo data (later replace with backend / API / localStorage)
let totalOrders = 5;
let cartItems = 2;

// Update stats on page load
document.addEventListener("DOMContentLoaded", () => {
  const totalOrdersEl = document.getElementById("total-orders");
  const cartItemsEl = document.getElementById("cart-items");
  const cartBadgeEl = document.getElementById("cart-badge");

  if (totalOrdersEl) totalOrdersEl.innerText = totalOrders;
  if (cartItemsEl) cartItemsEl.innerText = cartItems;
  if (cartBadgeEl) cartBadgeEl.innerText = cartItems;
});

// ================== NAVIGATION FUNCTIONS ==================

function goToMenu() {
  window.location.href = "/menu";
}

function goToCart() {
  window.location.href = "/cart";
}

// ⚠️ FIXED FUNCTION NAME (matches HTML)
function goTotracking() {
  window.location.href = "/tracking";
}

function goToProfile() {
  window.location.href = "/profile";
}
