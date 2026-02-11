// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECT ELEMENTS
    const navbar = document.querySelector('.navbar');
    const cartBtn = document.querySelectorAll('.quick-add');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    // 2. STICKY NAVBAR EFFECT
    // Jab user scroll karega toh navbar thodi "compact" ho jayegi
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 5%';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '20px 5%';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. ADD TO CART LOGIC
    // Har "Quick Add" button par click listener lagana
    cartBtn.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.innerText = count;
            
            // Chota sa animation button ke liye
            button.innerText = "Added! ✓";
            button.style.background = "#2ecc71";
            button.style.color = "white";

            setTimeout(() => {
                button.innerText = "Quick Add +";
                button.style.background = "rgba(255,255,255,0.9)";
                button.style.color = "#111";
            }, 1500);
        });
    });

    // 4. REVEAL SECTIONS ON SCROLL
    // Intersection Observer API ka use karke sections ko animate karna
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initial style set karna aur observe karna
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });

});

// Search toggle
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
  if (searchInput.style.display === 'none') {
    searchInput.style.display = 'inline-block';
    searchInput.focus();
  } else {
    searchInput.style.display = 'none';
  }
});

// User login alert
const userBtn = document.getElementById('user-btn');
userBtn.addEventListener('click', () => {
  alert('Login / Signup functionality will be added here.');
});

// Cart functionality
let cartCount = 0;
const cartBtn = document.getElementById('cart-btn');
const cartDisplay = document.getElementById('cart-count');

cartBtn.addEventListener('click', () => {
  alert(`You have ${cartCount} item(s) in your cart.`);
});

// Example: Quick Add buttons update cart
const quickAddBtns = document.querySelectorAll('.quick-add');
quickAddBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

// Region selector change
const regionSelect = document.getElementById('region-select');
regionSelect.addEventListener('change', (e) => {
  document.querySelector('.region-info').textContent = e.target.selectedOptions[0].textContent;
});
