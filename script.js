// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav').classList.remove('active');
    });
});

// Modal functionality
const customizeButtons = document.querySelectorAll('.customize-btn');
const modal = document.getElementById('customization-modal');
const closeModal = document.querySelector('.close-modal');

customizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Option buttons functionality
const optionButtons = document.querySelectorAll('.option-btn');

optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons in the same group
        const parentGroup = this.closest('.option-buttons');
        parentGroup.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Scroll animations
function checkVisibility() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    }
});

// Add to cart functionality
document.querySelector('.add-to-cart').addEventListener('click', function() {
    const modal = document.getElementById('customization-modal');
    modal.style.display = 'none';
    
    // Show success message (in a real implementation, this would be more sophisticated)
    alert('Item added to cart!');
});

// Order buttons functionality
document.querySelectorAll('.order-btn, .hero-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Scroll to products section
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth'
        });
    });
});