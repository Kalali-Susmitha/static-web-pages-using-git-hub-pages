function orderNow() {
  alert("✅ Your order has been successfully placed!");
}

function search() {
  const input = document.getElementById('search-input').value.trim();
  if (input) {
    alert("🔍 You searched for: " + input);
  } else {
    alert("Please enter a search term!");
  }
}

document.getElementById('search-input').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const itemText = item.innerText.toLowerCase();
    if (itemText.includes(searchValue)) {
      item.style.border = "2px solid red";
    } else {
      item.style.border = "none";
    }
  });
});

function saveOrder(itemName, price) {
  const order = { itemName, price };
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}
