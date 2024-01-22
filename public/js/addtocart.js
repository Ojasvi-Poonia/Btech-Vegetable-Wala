const product =  [ {
    id: 0,
    image: "img/fv/carrot.jpg",
    title: 'Carrot',
    price: 12,
},
{
    id:2,
    image:"img/fv/spinach.jpg",
    title:'spinach',
    price:20,
},
{
    id:2,
    image:"img/fv/brocolli.jpg",
    title:'Brocolli',
    price:20,
},
{
    id:4,
    image:"img/fv/potato.jpg",
    title:"potato",
    price: 25,
},
{
    id:5,
    image:"img/fv/cabbage.jpg",
    title:"cabbage",
    price: 15,
},
{
    id:6,
    image:"img/fv/onion.jpg",
    title:"onion",
    price: 35,
},
{
    id:7,
    image:"img/fv/cucumber.jpg",
    title:"cucumber",
    price: 40,
},
{
    id:8,
    image:"img/fv/peas.jpg",
    title:"peas",
    price: 10,
},
{
    id:9,
    image:"img/fv/mint.jpg" ,
    title:"mint",
    price:5,
},
];
const categories = [...new Set(product.map((item) => item))];
let i = 0;
let cart = [];

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>₹ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    );
}).join('');

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "₹ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }

    // Add Checkout button
    document.getElementById("checkoutBtn").innerHTML = `<button onclick='checkout()'>Checkout</button>`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items before checking out.");
    } else {
        // Replace the alert with your actual checkout process
        alert("Redirecting to payment page or implementing checkout logic...");
    }
}