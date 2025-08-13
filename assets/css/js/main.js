// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    
    console.log('Header:', header);
    console.log('Hamburger:', hamburger);
    console.log('NavList:', navList);
    
    // Add mobile overlay element
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);
    
    // Handle scroll events to change header style
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Handle mobile menu toggle
    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked!');
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        console.log('Nav list active:', navList.classList.contains('active'));
    });
    
    // Close mobile menu when clicking on overlay
    mobileOverlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Handle active nav link highlighting
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
});

// Active navigation link based on section
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Testimonial Slider
const testimonialTrack = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const slideCount = slides.length;

const updateSlider = () => {
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
};

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
});

// Auto-slide testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSlider();
}, 5000);

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real-world scenario, you would send the form data to a server
        // For this template, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fix for service cards, portfolio items, and testimonials
const fixVisibility = () => {
    // Make all service cards visible
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.classList.add('animated');
    });
    
    // Make all portfolio items visible
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
        item.classList.add('animated');
    });
    
    // Make all testimonial cards visible
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.classList.add('animated');
    });
    
    // Fix service icons
    const serviceIcons = document.querySelectorAll('.service-icon svg');
    serviceIcons.forEach(icon => {
        icon.setAttribute('stroke', '#3182ce');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke-width', '2');
    });
    
    // Fix portfolio icons
    const portfolioIcons = document.querySelectorAll('.portfolio-img svg');
    portfolioIcons.forEach(icon => {
        icon.setAttribute('stroke', '#ffffff');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke-width', '2');
    });
    
    // Fix portfolio item backgrounds
    const portfolioImgs = document.querySelectorAll('.portfolio-img');
    portfolioImgs.forEach(img => {
        img.style.background = 'linear-gradient(135deg, #63b3ed, #3182ce)';
        img.style.display = 'flex';
        img.style.justifyContent = 'center';
        img.style.alignItems = 'center';
    });
};

// Run our fix function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fixVisibility);

// Also run it after a short delay to ensure everything is loaded
window.addEventListener('load', () => {
    setTimeout(fixVisibility, 100);
});

// Run one more time after a longer delay as a fallback
setTimeout(fixVisibility, 1000);

// Override the scroll animation to keep everything visible
window.addEventListener('scroll', () => {
    fixVisibility();
});