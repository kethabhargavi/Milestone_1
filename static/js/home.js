// ===== Scroll Reveal =====
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// ===== Cart Badge Update =====
let cart = JSON.parse(localStorage.getItem("foodCart")) || [];
updateCartBadge();

function updateCartBadge() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-badge").innerText = cartCount;
  const mobileBadge = document.getElementById("mobile-cart-badge");
  if(mobileBadge) mobileBadge.innerText = cartCount;
}

// ===== Search Functionality =====
function goToSearch() {
  const input = document.getElementById("home-search-input");
  const query = input.value.trim();
  if(query === "") {
    alert("Please enter a search term!");
    return;
  }
  window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
}

// Trigger search on Enter key press
const searchInput = document.getElementById("home-search-input");
if(searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") goToSearch();
  });
}
