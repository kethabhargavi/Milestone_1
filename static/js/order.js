/***********************************
  LOAD ORDERS FROM STORAGE
***********************************/
let orders = JSON.parse(localStorage.getItem("foodOrders")) || [];

/***********************************
  ORDER HISTORY PAGE
***********************************/
function loadOrderHistory() {
  const container = document.getElementById("order-history");
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `<div class="empty-msg">No past orders found</div>`;
    return;
  }

  container.innerHTML = "";

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "order-card";

    div.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p>${order.items.map(i => `${i.quantity} x ${i.name}`).join(", ")}</p>
      <p>Date: ${order.date}</p>
      <strong>Status: ${order.status}</strong>
    `;

    container.appendChild(div);
  });
}

/***********************************
  ORDER MANAGEMENT PAGE
***********************************/
function loadOrderManagement() {
  const tbody = document.getElementById("order-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>#${order.id}</td>
      <td>${order.items.map(i => i.name).join(", ")}</td>
      <td>₹${order.total}</td>
      <td>
        <select onchange="updateOrderStatus('${order.id}', this.value)">
          <option ${order.status==="Placed"?"selected":""}>Placed</option>
          <option ${order.status==="Preparing"?"selected":""}>Preparing</option>
          <option ${order.status==="Out for Delivery"?"selected":""}>Out for Delivery</option>
          <option ${order.status==="Delivered"?"selected":""}>Delivered</option>
        </select>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function updateOrderStatus(orderId, newStatus) {
  orders = orders.map(order => {
    if (order.id === orderId) order.status = newStatus;
    return order;
  });

  localStorage.setItem("foodOrders", JSON.stringify(orders));
  alert("Order status updated");
}

/***********************************
  ORDER TRACKING PAGE
***********************************/
function loadOrderTracking() {
  const steps = document.querySelectorAll(".step");
  if (!steps.length || orders.length === 0) return;

  const latestOrder = orders[orders.length - 1];
  const statusFlow = ["Placed", "Preparing", "Out for Delivery", "Delivered"];

  steps.forEach(step => step.classList.remove("active"));

  const currentIndex = statusFlow.indexOf(latestOrder.status);
  for (let i = 0; i <= currentIndex; i++) {
    steps[i].classList.add("active");
  }
}

/***********************************
  INIT ON PAGE LOAD
***********************************/
document.addEventListener("DOMContentLoaded", () => {
  loadOrderHistory();
  loadOrderManagement();
  loadOrderTracking();
});
