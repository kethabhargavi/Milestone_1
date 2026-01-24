// ===============================
// SHARED DELIVERY LOGIC
// ===============================

let orders = JSON.parse(localStorage.getItem("foodOrders")) || [];

/* ===============================
   DELIVERY DASHBOARD
================================ */

function loadDeliveryDashboard() {
  const container = document.getElementById("delivery-orders");
  if (!container) return; // Page safety

  container.innerHTML = "";

  const activeOrders = orders.filter(
    o => o.status === "Placed" || o.status === "Out for Delivery"
  );

  if (activeOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-history">🚫 No active deliveries</div>
    `;
    return;
  }

  activeOrders.forEach(order => {
    const card = document.createElement("div");
    card.className = "delivery-order-card";

    card.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p><strong>Items:</strong> ${order.items.map(i => i.name).join(", ")}</p>
      <p><strong>Address:</strong> ${order.address || "Hyderabad"}</p>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p><strong>Status:</strong> ${order.status}</p>

      <div class="delivery-actions">
        ${
          order.status === "Placed"
            ? `<button onclick="updateStatus(${order.id}, 'Out for Delivery')">
                Start Delivery
              </button>`
            : ""
        }
        ${
          order.status === "Out for Delivery"
            ? `<button onclick="updateStatus(${order.id}, 'Delivered')">
                Mark Delivered
              </button>`
            : ""
        }
      </div>
    `;

    container.appendChild(card);
  });
}

/* ===============================
   DELIVERY HISTORY
================================ */

function loadDeliveryHistory() {
  const container = document.getElementById("history-orders");
  if (!container) return; // Page safety

  container.innerHTML = "";

  const deliveredOrders = orders.filter(o => o.status === "Delivered");

  if (deliveredOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-history">🚫 No completed deliveries yet</div>
    `;
    return;
  }

  deliveredOrders.reverse().forEach(order => {
    const card = document.createElement("div");
    card.className = "delivery-order-card";

    card.innerHTML = `
      <h3>
        Order #${order.id}
        <span class="history-badge">Delivered</span>
      </h3>
      <p><strong>Items:</strong> ${order.items.map(i => i.name).join(", ")}</p>
      <p><strong>Address:</strong> ${order.address || "Hyderabad"}</p>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p><strong>Delivered On:</strong> ${order.deliveredAt}</p>
    `;

    container.appendChild(card);
  });
}

/* ===============================
   STATUS UPDATE
================================ */

function updateStatus(orderId, newStatus) {
  orders = orders.map(order => {
    if (order.id === orderId) {
      order.status = newStatus;

      if (newStatus === "Delivered") {
        order.deliveredAt = new Date().toLocaleString();
      }
    }
    return order;
  });

  localStorage.setItem("foodOrders", JSON.stringify(orders));

  loadDeliveryDashboard();
  loadDeliveryHistory();
}

/* ===============================
   AUTO LOAD BASED ON PAGE
================================ */

document.addEventListener("DOMContentLoaded", () => {
  loadDeliveryDashboard();
  loadDeliveryHistory();
});
