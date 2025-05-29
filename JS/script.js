document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Improved active nav management
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Run on scroll and load
    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('load', updateActiveNav);

    // Show/hide back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
            
            // Change nav style on scroll
            const nav = document.querySelector('.topnav');
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Rest of your code remains the same...
    // Animate service cards on scroll
    const animateOnScroll = function() {
        /* ... existing animateOnScroll code ... */
    };

    // Initialize animations on load
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Form submission handling
    const reviewForm = document.querySelector('.review-form');
    if (reviewForm) {
        /* ... existing form handling code ... */
    }

    // Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries) {
        /* ... existing observer code ... */
    }, observerOptions);

    // Skill progress animation
    const skillProgressBars = document.querySelectorAll('.progress-bar');
    /* ... existing skill progress code ... */

    // Typewriter effect
    const heroSubtitle = document.querySelector('.hero h2');
    /* ... existing typewriter code ... */
});