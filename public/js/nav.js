const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <link rel="shortcut icon" href="img/fv/small.png">
    <div class="nav">
        <a href="index.html"><img src="img/dark-logo.png" class="brand-logo" alt=""></a>
      
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search product" oninput="handleSearch()">
                <button class="search-btn" onclick="handleSearch()">Search</button>
                <div class="search-dropdown"></div>
            </div>
            <script src="https://kit.fontawesome.com/92d70a2fd8.js" crossorigin="anonymous"></script>
            <a href="addtocart.html"><div class="cart"><i class="fa-solid fa-cart-shopping"></i><p id="count">0</p></div>     
            </div></a>      
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="vegetable.html" class="link">Vegetables</a></li>
        <li class="link-item"><a href="fruits.html" class="link">Fruits</a></li>
        <li class="link-item"><a href="other.html" class="link">Others</a></li>
        <li class="link-item"><a href="aboutus.html" class="link">About Us</a></li>    
    </ul>
    `;

    // Sample data - Replace this with your actual list of items and pages
    const items = {
        'Almonds': '../public/almonds.html',
        'Apple': '../public/apple.html',
        'Banana':'../public/banana.html',
        'BasmatiRice': '../public/basmatirice.html',
        'Berry': '../public/berry.html',
        'BlackBeans': '../public/blackbeans.html',
        'Broccoli':'../public/broccoli.html',
        'Cabbage': '../public/cabbage.html',
        'Carrot': '../public/carrot.html',
        'Cashews': '../public/cashews.html',
        'Cherry': '../public/cherry.html',
        'Chickpeas': '../public/chickpeas.html',
        'Cucumber': '../public/cucumber.html',
        'DragonFruit': '../public/dragonfruit.html',
        'Garlic': '../public/garlic.html',
        'Guava': '../public/guava.html',
        'KidneyBeans': '../public/kidneybeans.html',
        'Kiwi': '../public/kiwi.html',
        'Lemon': '../public/lemon.html',
        'Lentils': '../public/lentils.html',
        'Mango': '../public/mango.html',
        'Onion': '../public/onion.html',
        'Orange': '../public/orange.html',
        'Peanuts': '../public/peanuts.html',
        'Pear': '../public/pear.html',
        'Peas': '../public/peas.html',
        'Pecans': '../public/pecans.html',
        'Pineapple': '../public/pineapple.html',
        'Pistachios': '../public/pistachios.html',
        'Potato': '../public/potato.html',
        'Spinach': '../public/spinach.html',
        'Strawberry': '../public/strawberry.html',
        'Walnuts': '../public/walnuts.html',
        'Watermelon': '../public/watermelon.html',
        // Add more items as needed
    };
    

   // Function to handle search and navigation
window.handleSearch = function () {
    const query = document.querySelector('.search-box').value.trim().toLowerCase();

    let suggestions;
    if (!query) {
        suggestions = [];
    } else {
        suggestions = Object.keys(items).filter(item => item.toLowerCase().includes(query));
    }

    // Display suggestions
    displaySuggestions(suggestions, query);
};

const displaySuggestions = (suggestions, query) => {
    const dropdown = document.querySelector('.search-dropdown');

    // Clear previous suggestions
    dropdown.innerHTML = '';

    if (!query) {
        return;
    }

    // Display suggestions in dropdown
    suggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = suggestion;
        suggestionItem.addEventListener('click', () => redirectToPage(suggestion));
        dropdown.appendChild(suggestionItem);
    });

    // Position the dropdown directly under the search box
    const searchBox = document.querySelector('.search-box');
    const rect = searchBox.getBoundingClientRect();
    dropdown.style.top = `${rect.bottom}px`;
    dropdown.style.left = `${rect.left}px`;

    // Show or hide the dropdown based on the number of suggestions
    dropdown.style.display = suggestions.length > 0 ? 'block' : 'none';
};

const redirectToPage = item => {
    const itemLink = items[item];

    if (itemLink) {
        // If the item is present, navigate to its page
        window.location.href = itemLink;
    } else {
        // If the item is not present, display an alert
        alert(`Item "${item}" not found.`);
    }
};
}

createNav();
