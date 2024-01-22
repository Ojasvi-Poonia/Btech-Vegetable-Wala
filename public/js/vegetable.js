document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const sidebar = document.querySelector(".sidebar");
    const cartItems = document.getElementById("cartItem");
    const totalPriceElement = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkoutButton");

    let cart = [];
    let totalPrice = 0;

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const vegetableContainer = button.closest(".vegetable");
            const vegetableName = vegetableContainer.querySelector("h3").textContent;
            const vegetablePrice = parseFloat(vegetableContainer.querySelector("h3 pre").textContent.replace(/[^\d.]/g, '')); // Extract price from the HTML

            // Add item to cart
            cart.push({ name: vegetableName, price: vegetablePrice });

            // Display cart items
            displayCartItems();

            // Update total price
            totalPrice += vegetablePrice;
            totalPriceElement.innerHTML = `₹ ${totalPrice.toFixed(2)}`;

            // Show the sidebar
            sidebar.style.width = "250px";

            // Show the checkout button
            checkoutBtn.style.display = "block";
        });
    });

    function displayCartItems() {
        if (cart.length === 0) {
            cartItems.innerHTML = "Your cart is empty";

            // Hide the checkout button when the cart is empty
            checkoutBtn.style.display = "none";
        } else {
            cartItems.innerHTML = cart.map(item => `<p>${item.name} - ₹${item.price.toFixed(2)}</p>`).join('');
        }
    }

    // Checkout button event listener
    checkoutBtn.addEventListener("click", function () {
        // Pass cart data to the payment page and navigate to it
        const paymentDetails = document.getElementById("paymentDetails");
        paymentDetails.innerHTML = cart.map(item => `<p>${item.name} - ₹${item.price.toFixed(2)}</p>`).join('');
        paymentDetails.innerHTML += `<p>Total: ₹${totalPrice.toFixed(2)}</p>`;
        window.location.href = "payment.html";
    });
});
