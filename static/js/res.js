// ===== RESTAURANT DASHBOARD JS =====

// Demo values (replace with backend data later)
const todayOrders = 12;
const totalOrders = 245;
const totalRevenue = 58420;

// Load stats
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("today-orders").innerText = todayOrders;
  document.getElementById("total-orders").innerText = totalOrders;
  document.getElementById("total-revenue").innerText = `₹${totalRevenue}`;
});

// Navigation
function goToOrders() {
  window.location.href = "/restaurant_orders";
}

function goToMenu() {
  window.location.href = "/restaurant_menu";
}

function goToEarnings() {
  window.location.href = "/restaurant_earnings";
}

function goToProfile() {
  window.location.href = "/restaurant_profile";
}
