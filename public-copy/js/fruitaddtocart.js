const product = [
    {
        id: 0,
        image: "img/fv/apple.jpg",
        title: 'Apple',
        price: 12,
    },
    {
        id:2,
        image:"img/fv/bannana.jpg",
        title:'bannana',
        price:20,
    },
    {
        id: 3,
        images:"img/fv/pineapple.jpg",
        title:"pineapple",
        price:30,
    },
    {
        id:4,
        image:"img/fv/dragon.jpg",
        title:"Dragon",
        price: 25,
    },
    {
        id:5,
        image:"img/fv/guvava.jpg",
        title:"Guvava",
        price: 15,
    },
    {
        id:6,
        image:"img/fv/watermellon.jpg",
        title:"Watermelon",
        price: 35,
    },
    {
        id:7,
        image:"img/fv/orange.jpg",
        title:"Orange",
        price: 40,
    },
    {
        id:8,
        image:"img/fv/Lemon.jpg",
        title:"Lemon",
        price: 10,
    },
    {
        id:9,
        image:"img/fv/kiwi.jpg" ,
        title:"kiwi",
        price:120,
    },
    {
        id:10,
        image:"img/fv/cherry.jpg",
        title:"Cherry",
        price:25,
    },
    {
        id:11,
        image:"img/fv/berry.jpg",
        title:"Black Bery",
        price:45,


    },
    {
        id:12,
        image:"img/fv/mango.jpg",
        title:"Mango",
        price:60,
    },
    {
        id:13,
        image:"img/fv/strawberry.jpg",
        title:"Strawberry",
        price:75,
    },
    
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;

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

var cart = [];

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
}

    

    
