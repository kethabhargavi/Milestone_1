// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("foodCart")) || [];

const cartContainer = document.getElementById("cart-items");
const itemTotalElem = document.getElementById("item-total");
const grandTotalElem = document.getElementById("grand-total");
const cartBadge = document.getElementById("cart-badge");

function renderCart() {
  cartContainer.innerHTML = "";

  if(cart.length === 0){
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    itemTotalElem.innerText = "₹0";
    grandTotalElem.innerText = "₹0";
    cartBadge.innerText = "0";
    return;
  }

  let itemTotal = 0;
  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    itemTotal += subtotal;

    const card = document.createElement("div");
    card.className = "cart-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>Size: ${item.size}</p>
        <div class="qty-control">
          <button onclick="decreaseCartQty(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseCartQty(${index})">+</button>
        </div>
      </div>
      <div class="cart-actions">
        <span class="subtotal">₹${subtotal}</span>
        <button onclick="removeCartItem(${index})" class="remove-btn">Remove</button>
      </div>
    `;
    cartContainer.appendChild(card);
  });

  const deliveryFee = 30;
  const taxes = 20;
  itemTotalElem.innerText = `₹${itemTotal}`;
  grandTotalElem.innerText = `₹${itemTotal + deliveryFee + taxes}`;
  cartBadge.innerText = cart.length;
}

// Quantity functions
function increaseCartQty(index) { cart[index].quantity += 1; saveCart(); renderCart(); }
function decreaseCartQty(index) { 
  if(cart[index].quantity > 1){ cart[index].quantity -= 1; } 
  else removeCartItem(index); 
  saveCart(); renderCart(); 
}
function removeCartItem(index) { cart.splice(index,1); saveCart(); renderCart(); }

// Save cart back to localStorage
function saveCart() { localStorage.setItem("foodCart", JSON.stringify(cart)); }

// Checkout
function checkout(){
  if(cart.length === 0){ alert("Cart is empty!"); return; }
  alert("Order placed successfully!");
  cart = [];
  saveCart();
  renderCart();
}

// Render on load
renderCart();
