document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    // document.getElementById('year').textContent = 2022;


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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
                        // Scroll to target with offset for fixed header
            if (targetElement) {
                const offset = 80;
                const targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

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

    // Animate service cards on scroll
    const animateOnScroll = function() {
        const serviceCards = document.querySelectorAll('.service-card');
        const windowHeight = window.innerHeight;
        
        serviceCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const animationDelay = index * 0.1;
            
            if (cardPosition < windowHeight - 100) {
                card.style.transitionDelay = `${animationDelay}s`;
                card.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    // Initialize animations on load
    window.addEventListener('load', animateOnScroll);
    // Run animations on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Form submission handling
    const reviewForm = document.querySelector('.review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the data to your server
            // For demo purposes, we'll just show a success message
            alert('Thank you for your review!');
            this.reset();
            
            // Reset form labels
            const labels = this.querySelectorAll('label');
            labels.forEach(label => {
                label.style.top = '15px';
                label.style.left = '15px';
                label.style.fontSize = '1rem';
            });
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Skill progress animation
    const skillProgressBars = document.querySelectorAll('.progress-bar');
    skillProgressBars.forEach(bar => {
        const percent = bar.parentElement.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });

    // Typewriter effect for hero subtitle (optional)
    const heroSubtitle = document.querySelector('.hero h2');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeWriter);
            }
        }, 50);
    }
});