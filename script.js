// Typed.js Animation
const typed = new Typed('.multiple-text', {
    strings: ['Cloud Egineer', 'Software Developer', 'Network Egineer', 'IT specialist'],
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

// Scroll Sections Active Link + Sticky Navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Highlight active nav link
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close navbar when clicking a link (optional)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Animate Progress Bars on Scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar .progress');
    
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const percentageSpan = bar.querySelector('.percentage');

        // Reset to 0 before animating
        bar.style.width = '0';
        if (percentageSpan) percentageSpan.textContent = '0%';

        // Animate after a slight delay
        setTimeout(() => {
            bar.style.width = width;
            
            // Animate percentage counter
            if (percentageSpan) {
                let current = 0;
                const target = parseInt(width);
                const duration = 1500; // 1.5 seconds
                const stepTime = 20; // Update every 20ms
                const steps = duration / stepTime;
                const increment = target / steps;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    percentageSpan.textContent = `${Math.round(current)}%`;
                }, stepTime);
            }
        }, 100);
    });
}

// Intersection Observer for Skills Section
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target); // Stop observing after triggering
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% visible

    observer.observe(skillsSection);
}

// ScrollReveal Animations
ScrollReveal({
    reset: false, // Set to false to avoid re-animations
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .experience-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });