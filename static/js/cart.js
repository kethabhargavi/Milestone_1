// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.innerHTML = "";

  if(cart.length === 0){
    cartItemsDiv.innerHTML = "<p style='text-align:center;font-size:18px;'>Your cart is empty 🍽️</p>";
    updateTotals();
    return;
  }

  let itemTotal = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    itemTotal += subtotal;

    const card = document.createElement("div");
    card.className = "cart-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>Size: ${item.size}</p>
        <div class="qty-control">
          <button onclick="updateQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${index}, 1)">+</button>
        </div>
      </div>
      <div class="cart-actions">
        <span class="subtotal">₹${subtotal}</span>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsDiv.appendChild(card);
  });

  updateTotals(itemTotal);
}

function updateQty(index, change){
  cart[index].qty += change;
  if(cart[index].qty <= 0) cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function updateTotals(itemTotal=0){
  document.getElementById("item-total").innerText = `₹${itemTotal}`;
  document.getElementById("grand-total").innerText = `₹${itemTotal + 50}`; // Delivery + Tax
  document.getElementById("cart-badge").innerText = cart.reduce((a,b)=>a+b.qty,0);
}

function checkout(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed successfully 🎉");
  localStorage.removeItem("cart");
  renderCart();
}

// Render cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
