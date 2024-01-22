const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/small.png" class="logo" alt="">      
    </div>
    <p class="footer-title">About Company</p>
    <p class="info">We are Ramaiah's first E-commerce team coming to do one thing.</p> 
    <p class="info">Support Emails - thisinnotajoke@support.com</p>
    <p class="info"> Telephone 1800-265-9895</p>
    <div class="footer-social-container">
        <div>
            <a href="t&c.html" class="social-link">Terms & Conditions</a>
            <a href="index.html" class="social-link">Home page</a>
            <a href="aboutus.html" class="social-link">About-us</a>
        </div>   
    </div> 
    <p class="footer-credit">ZWiGAT.co Formerly DJ SabZi Wala</p> `;
}

createFooter();  
