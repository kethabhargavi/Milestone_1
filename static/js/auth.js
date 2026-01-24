let selectedRole = "customer";

function selectRole(role) {
  selectedRole = role;

  document.querySelectorAll(".role-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}

function login(e) {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  // Save login info
  localStorage.setItem("userRole", selectedRole);
  localStorage.setItem("isLoggedIn", "true");

  // ✅ REDIRECT (MATCHES app.py)
  if (selectedRole === "customer") {
    window.location.href = "/customer_dashboard";
  } 
  else if (selectedRole === "restaurant") {
    window.location.href = "/restaurant_dashboard";
  } 
  else if (selectedRole === "delivery") {
    window.location.href = "/delivery_dashboard";
  } 
  else if (selectedRole === "admin") {
    window.location.href = "/admin_dashboard";
  }
}
