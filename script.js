// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Cloud Engineer', 'Software Developer', 'Network Engineer', 'IT Specialist', 'E-commerce Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Scroll Sections Active Link + Sticky Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Highlight active nav link
    let scrollY = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', scrollY > 100);
    }

    // Close navbar when clicking a link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Progress Bars Animation
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const computedStyle = window.getComputedStyle(bar);
        const targetWidth = computedStyle.width;
        
        // Reset width to 0
        bar.style.width = '0';
        
        // Animate to target width
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
}

// Intersection Observer for Skills Section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    observer.observe(skillsSection);
}

// Project Cards Hover Effect
const projectCards = document.querySelectorAll('.project-card, .project-card-small');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ff4757';
            } else {
                field.style.borderColor = '#0ef';
            }
        });
        
        if (isValid) {
            // Show success message
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="bx bx-check"></i> Message Sent!';
            submitBtn.style.background = '#10ac84';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
        }
    });
}

// ScrollReveal Animations
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        reset: false,
        distance: '80px',
        duration: 2000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    // Home section
    ScrollReveal().reveal('.home-content h1', { 
        origin: 'left',
        delay: 300 
    });
    
    ScrollReveal().reveal('.home-content h2', { 
        origin: 'right',
        delay: 500 
    });
    
    ScrollReveal().reveal('.home-content p', { 
        origin: 'bottom',
        delay: 700 
    });
    
    ScrollReveal().reveal('.cta-buttons', { 
        origin: 'bottom',
        delay: 900 
    });
    
    ScrollReveal().reveal('.home-img', { 
        origin: 'right',
        delay: 400 
    });

    // Section headers
    ScrollReveal().reveal('.section-header', { 
        origin: 'top',
        delay: 200 
    });

    // Projects section
    ScrollReveal().reveal('.project-card', { 
        origin: 'bottom',
        delay: 300,
        interval: 200 
    });
    
    ScrollReveal().reveal('.projects-grid .project-card-small', { 
        origin: 'bottom',
        delay: 400,
        interval: 100 
    });

    // About section
    ScrollReveal().reveal('.about-image', { 
        origin: 'left',
        delay: 300 
    });
    
    ScrollReveal().reveal('.about-text', { 
        origin: 'right',
        delay: 400 
    });
    
    ScrollReveal().reveal('.about-highlights .highlight', { 
        origin: 'bottom',
        delay: 500,
        interval: 100 
    });

    // Skills section
    ScrollReveal().reveal('.skill-card', { 
        origin: 'bottom',
        delay: 300,
        interval: 150 
    });

    // Experience section
    ScrollReveal().reveal('.timeline-item', { 
        origin: 'left',
        delay: 300,
        interval: 200 
    });

    // Contact section
    ScrollReveal().reveal('.contact-info .info-card', { 
        origin: 'left',
        delay: 300,
        interval: 100 
    });
    
    ScrollReveal().reveal('.contact-form', { 
        origin: 'right',
        delay: 400 
    });
}

// Back to top button behavior
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Dynamic year in footer
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Project links tracking
const projectLinks = document.querySelectorAll('a[href*="staracrocheting"]');
projectLinks.forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Staracrocheting project clicked');
    });
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px 0px' });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Theme toggle (optional - can be enabled if you want light/dark mode)
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
themeToggle.className = 'theme-toggle';
themeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--main-color);
    color: var(--bg-color);
    border-radius: 50%;
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px var(--main-color);
`;

document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
        document.documentElement.style.setProperty('--bg-color', '#f8f9fa');
        document.documentElement.style.setProperty('--second-bg-color', '#e9ecef');
        document.documentElement.style.setProperty('--text-color', '#212529');
    } else {
        themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
        document.documentElement.style.setProperty('--bg-color', '#1f242d');
        document.documentElement.style.setProperty('--second-bg-color', '#323946');
        document.documentElement.style.setProperty('--text-color', '#fff');
    }
});

// Add CSS for light theme
const lightThemeStyles = `
    .light-theme {
        --bg-color: #f8f9fa;
        --second-bg-color: #e9ecef;
        --text-color: #212529;
    }
    
    .light-theme .project-card,
    .light-theme .skill-card,
    .light-theme .timeline-item,
    .light-theme .info-card {
        background: white;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .light-theme .project-card-small {
        background: white;
    }
`;

const lightThemeStyle = document.createElement('style');
lightThemeStyle.textContent = lightThemeStyles;
document.head.appendChild(lightThemeStyle);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
    
    // Add loading animation removal
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Preloader (optional - can be removed if not needed)
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                }
            }, 500);
        }
    }, 1000);
});
