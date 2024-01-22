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
            const fruitContainer = button.closest(".product");
            const fruitName = fruitContainer.querySelector("h3").textContent;
            // Replace the following line with the actual price retrieval logic for the fruit
            const fruitPrice = parseFloat(fruitContainer.querySelector("h3 pre").textContent.replace(/[^\d.]/g, ''));

            // Add item to cart
            cart.push({ name: fruitName, price: fruitPrice });

            // Display cart items
            displayCartItems();

            // Update total price
            totalPrice += fruitPrice;
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
