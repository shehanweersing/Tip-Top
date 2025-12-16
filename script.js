// Mobile Menu Toggle
const bar = document.getElementById('mobile-menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// ❄️ CHRISTMAS SNOW EFFECT ❄️
function createSnowflakes() {
    // prevent heavy snow on small screens
    if (window.innerWidth <= 600) return;
    // avoid creating duplicates if function called multiple times
    if (document.querySelectorAll('.snowflake').length) return;

    const snowflakeCount = 20;
    const snowflakes = [];

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        // randomized but subtle speeds/sizes for a gentle snowfall
        snowflake.style.animationDuration = (Math.random() * 8 + 8) + 's';
        snowflake.style.animationDelay = Math.random() * 4 + 's';
        snowflake.style.fontSize = (Math.random() * 0.7 + 0.6) + 'em';
        snowflake.style.opacity = (Math.random() * 0.4 + 0.4).toFixed(2);
    
        document.body.appendChild(snowflake);
        snowflakes.push(snowflake);

        // Restart animation when it ends
        snowflake.addEventListener('animationend', () => {
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.animationDelay = '0s';
            snowflake.style.animation = 'none';
            setTimeout(() => {
                snowflake.style.animation = '';
            }, 10);
        });
    }
}

// Create snowflakes when page loads
window.addEventListener('load', createSnowflakes);
// Also create snowflakes immediately if page is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSnowflakes);
} else {
    createSnowflakes();
}

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('#navbar li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Active link highlighting
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('#navbar a');
    
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});

// Shopping Cart (Basic functionality)
let cart = [];

function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price,
        id: Date.now()
    };
    cart.push(product);
    alert(`${productName} added to cart!`);
    console.log('Current cart:', cart);
}

// Newsletter Form Submission
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart button functionality
const cartButtons = document.querySelectorAll('.cart');
cartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.querySelector('h5')?.textContent || 'Product';
        const price = product.querySelector('h4')?.textContent || '$0';
        addToCart(productName, price);
    });
});

// Theme toggle removed — site uses single fixed palette
