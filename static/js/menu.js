// ==================== CART LOGIC ====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart badge
function updateCartBadge() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartBadge = document.getElementById("cart-badge");
  const mobileBadge = document.getElementById("mobile-cart-badge");
  if (cartBadge) cartBadge.innerText = totalQty;
  if (mobileBadge) mobileBadge.innerText = totalQty;
}

// Add item to cart
function addToCart(name, price, image) {
  const card = event.target.closest(".menu-card");
  const qty = parseInt(card.querySelector(".quantity-selector span").innerText);

  // Check if the item already exists in cart
  const existingIndex = cart.findIndex(item => item.name === name);
  if (existingIndex !== -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({ name, price, qty, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  alert(`${qty} x ${name} added to cart!`);
}

// Increase quantity
function increaseQty(button) {
  const qtySpan = button.parentElement.querySelector("span");
  qtySpan.innerText = parseInt(qtySpan.innerText) + 1;
}

// Decrease quantity
function decreaseQty(button) {
  const qtySpan = button.parentElement.querySelector("span");
  if (parseInt(qtySpan.innerText) > 1) qtySpan.innerText = parseInt(qtySpan.innerText) - 1;
}

// Filter by category
function filterCategory(event, category) {
  const cards = document.querySelectorAll(".menu-card");
  cards.forEach(card => {
    card.style.display = card.dataset.category === category ? "block" : "none";
  });

  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Hamburger menu toggle
function toggleMobileMenu() {
  document.getElementById("mobile-menu").classList.toggle("show");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  const activeBtn = document.querySelector(".category-btn.active");
  if (activeBtn) filterCategory({ target: activeBtn }, activeBtn.dataset.category || "Starters");
});
