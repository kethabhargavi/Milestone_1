// Example roles: "guest", "customer", "admin", "restaurant", "delivery"
const role = localStorage.getItem("userRole") || "guest";

// Navbar containers
const navLinks = document.getElementById("role-nav-links");
const navActions = document.getElementById("role-nav-actions");
const mobileMenu = document.getElementById("mobile-menu");

// Clear any existing content
navLinks.innerHTML = "";
navActions.innerHTML = "";
mobileMenu.innerHTML = "";

// Define navbar items per role
const navbarItems = {
  guest: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Cart", href: "/cart" },
  ],
  customer: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Cart", href: "/cart" },
    { name: "Orders", href: "/orders" },
    { name: "Profile", href: "/profile" },
  ],
  admin: [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Orders", href: "/admin/orders" },
    { name: "Restaurants", href: "/admin/restaurants" },
    { name: "Users", href: "/admin/users" },
    { name: "Profile", href: "/profile" },
  ],
  restaurant: [
    { name: "Dashboard", href: "/restaurant/dashboard" },
    { name: "Orders", href: "/restaurant/orders" },
    { name: "Menu Management", href: "/restaurant/menu" },
    { name: "Profile", href: "/profile" },
  ],
  delivery: [
    { name: "Dashboard", href: "/delivery/dashboard" },
    { name: "Orders", href: "/delivery/orders" },
    { name: "Profile", href: "/profile" },
  ],
};

// Define action buttons per role
const actionButtons = {
  guest: [{ name: "Sign In", href: "/login", class: "signin-btn" }],
  customer: [{ name: "Logout", href: "/logout", class: "signin-btn" }],
  admin: [{ name: "Logout", href: "/logout", class: "signin-btn" }],
  restaurant: [{ name: "Logout", href: "/logout", class: "signin-btn" }],
  delivery: [{ name: "Logout", href: "/logout", class: "signin-btn" }],
};

// Populate navbar
navbarItems[role].forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${item.href}">${item.name}${
    item.name === "Cart" ? ' <span id="cart-badge">0</span>' : ""
  }</a>`;
  navLinks.appendChild(li);

  // Mobile menu
  const mobileLi = document.createElement("li");
  mobileLi.innerHTML = `<a href="${item.href}">${item.name}${
    item.name === "Cart" ? ' <span id="mobile-cart-badge">0</span>' : ""
  }</a>`;
  mobileMenu.appendChild(mobileLi);
});

// Populate action buttons
actionButtons[role].forEach(btn => {
  const a = document.createElement("a");
  a.href = btn.href;
  a.className = btn.class;
  a.innerText = btn.name;
  navActions.appendChild(a);
});

// Optional: update cart count dynamically if stored in localStorage
const cartCount = JSON.parse(localStorage.getItem("foodCart"))?.reduce(
  (sum, item) => sum + item.quantity, 0
) || 0;

const cartBadge = document.getElementById("cart-badge");
const mobileBadge = document.getElementById("mobile-cart-badge");
if (cartBadge) cartBadge.innerText = cartCount;
if (mobileBadge) mobileBadge.innerText = cartCount;

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
