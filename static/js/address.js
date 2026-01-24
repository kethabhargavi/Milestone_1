let addresses = JSON.parse(localStorage.getItem("foodAddresses")) || [];

const form = document.getElementById("address-form");
const list = document.getElementById("address-list");

function renderAddresses() {
  list.innerHTML = "";

  if (addresses.length === 0) {
    list.innerHTML = `<p class="empty-history">No saved addresses</p>`;
    return;
  }

  addresses.forEach((addr, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h4>${addr.name}</h4>
      <p>📞 ${addr.phone}</p>
      <p>🏠 ${addr.address}</p>
      <button onclick="deleteAddress(${index})">Delete</button>
    `;

    list.appendChild(card);
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const newAddress = {
    name: name.value,
    phone: phone.value,
    address: address.value
  };

  addresses.push(newAddress);
  localStorage.setItem("foodAddresses", JSON.stringify(addresses));

  form.reset();
  renderAddresses();
});

function deleteAddress(index) {
  addresses.splice(index, 1);
  localStorage.setItem("foodAddresses", JSON.stringify(addresses));
  renderAddresses();
}

renderAddresses();
