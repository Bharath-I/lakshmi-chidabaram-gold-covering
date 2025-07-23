// Fake product list

// Load products
window.onload = function() {
    if (document.getElementById("productList")) {
        let list = document.getElementById("productList");
        list.innerHTML = "";
        products.forEach(p => {
            list.innerHTML += `
        <div class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>Size: ${p.size}</p>
          <p>Price: ${p.price}</p>
          <button onclick="viewProduct(${p.id})">View</button>
        </div>
      `;
        });
    }
}

// View product
function viewProduct(id) {
    localStorage.setItem("selectedProductId", id);
    window.location.href = "product.html";
}

// Logout
function logout() {
    localStorage.clear();
}

function viewProduct(id) {
    const product = products.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    window.location.href = "product.html";
}
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cartItems');
let total = 0;

cartContainer.innerHTML = ''; // Clear previous content
div.onclick = () => {
    localStorage.setItem("selectedProduct", JSON.stringify(p));
    window.location.href = "product.html";
};
const paymentType = localStorage.getItem("paymentType");

orders.push({
    product: selectedProduct,
    address: address,
    date: new Date().toLocaleString(),
    paymentType: paymentType,
    status: "Paid"
});
localStorage.setItem("checkoutProduct", JSON.stringify(selectedProduct));
window.location.href = "payment.html";