// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initThemeToggle();
    initScrollAnimations();
    initSkillBars();
    initBlogFilters();
    initContactForm();
    initScrollToTop();
    initSmoothScrolling();
    
    // Blog posts data
    const blogPosts = {
        'web-dev-1': {
            title: 'The Future of React: What\'s Coming in 2024',
            category: 'Web Development',
            date: 'March 15, 2024',
            content: `
                <h2>The Future of React: What's Coming in 2024</h2>
                <p><strong>Published on March 15, 2024 | Category: Web Development</strong></p>
                
                <p>React continues to evolve at a rapid pace, and 2024 promises to bring some exciting new features and improvements. In this post, we'll explore what's on the horizon for React developers.</p>
                
                <h3>Concurrent Rendering</h3>
                <p>One of the most significant improvements in React 18 was the introduction of concurrent rendering. This feature allows React to prepare multiple versions of the UI at the same time, making applications more responsive and user-friendly.</p>
                
                <h3>Automatic Batching</h3>
                <p>React 18 introduced automatic batching, which groups multiple state updates into a single re-render for better performance. This works for timeouts, promises, and native event handlers.</p>
                
                <h3>Suspense Improvements</h3>
                <p>Suspense has been enhanced to work better with server-side rendering and data fetching. The new features make it easier to create loading states and handle async operations gracefully.</p>
                
                <h3>What's Next?</h3>
                <p>Looking ahead, the React team is working on several exciting features including better developer tools, improved performance optimizations, and enhanced TypeScript support.</p>
                
                <p>Stay tuned for more updates as React continues to shape the future of web development!</p>
            `
        },
        'tutorial-1': {
            title: 'Building a REST API with Node.js and Express',
            category: 'Tutorial',
            date: 'March 10, 2024',
            content: `
                <h2>Building a REST API with Node.js and Express</h2>
                <p><strong>Published on March 10, 2024 | Category: Tutorial</strong></p>
                
                <p>In this comprehensive tutorial, we'll build a complete REST API using Node.js and Express, covering everything from setup to deployment.</p>
                
                <h3>Prerequisites</h3>
                <ul>
                    <li>Basic knowledge of JavaScript</li>
                    <li>Node.js installed on your system</li>
                    <li>Understanding of HTTP methods</li>
                </ul>
                
                <h3>Setting Up the Project</h3>
                <p>First, let's create a new project and install the necessary dependencies:</p>
                
                <pre><code>mkdir my-api
cd my-api
npm init -y
npm install express mongoose dotenv cors helmet</code></pre>
                
                <h3>Creating the Server</h3>
                <p>Let's start by creating a basic Express server with proper middleware setup for security and CORS handling.</p>
                
                <h3>Database Connection</h3>
                <p>We'll use MongoDB with Mongoose for our database operations. This provides a robust and scalable solution for data persistence.</p>
                
                <h3>API Routes</h3>
                <p>We'll implement CRUD operations with proper error handling and validation to ensure our API is robust and reliable.</p>
                
                <h3>Authentication & Authorization</h3>
                <p>Security is crucial for any API. We'll implement JWT-based authentication to protect our endpoints.</p>
                
                <p>This tutorial provides a solid foundation for building scalable REST APIs that can handle real-world applications.</p>
            `
        },
        'opinion-1': {
            title: 'Why Every Developer Should Learn TypeScript',
            category: 'Opinion',
            date: 'March 5, 2024',
            content: `
                <h2>Why Every Developer Should Learn TypeScript</h2>
                <p><strong>Published on March 5, 2024 | Category: Opinion</strong></p>
                
                <p>TypeScript has become increasingly popular in the JavaScript ecosystem, and for good reason. Here's why I believe every developer should consider learning TypeScript.</p>
                
                <h3>Type Safety</h3>
                <p>The most obvious benefit of TypeScript is type safety. By catching errors at compile time rather than runtime, TypeScript helps prevent many common bugs that plague JavaScript applications.</p>
                
                <h3>Better IDE Support</h3>
                <p>TypeScript provides excellent IntelliSense support, autocomplete, and refactoring capabilities. This significantly improves the developer experience and productivity.</p>
                
                <h3>Code Documentation</h3>
                <p>Types serve as living documentation for your code. When you see a function signature in TypeScript, you immediately understand what parameters it expects and what it returns.</p>
                
                <h3>Easier Refactoring</h3>
                <p>Large codebases become much easier to maintain with TypeScript. Renaming properties, changing function signatures, and restructuring code becomes safer and more reliable.</p>
                
                <h3>Industry Adoption</h3>
                <p>Major companies like Microsoft, Google, and many others have adopted TypeScript for their large-scale applications. Learning TypeScript opens up more career opportunities.</p>
                
                <h3>Gradual Migration</h3>
                <p>One of TypeScript's greatest strengths is that you can adopt it gradually. You can start by adding types to critical parts of your application and expand from there.</p>
                
                <p>While there is a learning curve, the benefits of TypeScript far outweigh the initial investment in learning it. It's not just a trend – it's the future of JavaScript development.</p>
            `
        },
        'web-dev-2': {
            title: 'CSS Grid vs Flexbox: When to Use What',
            category: 'Web Development',
            date: 'February 28, 2024',
            content: `
                <h2>CSS Grid vs Flexbox: When to Use What</h2>
                <p><strong>Published on February 28, 2024 | Category: Web Development</strong></p>
                
                <p>CSS Grid and Flexbox are both powerful layout systems, but they serve different purposes. Understanding when to use each one is crucial for effective web development.</p>
                
                <h3>Flexbox: One-Dimensional Layouts</h3>
                <p>Flexbox is designed for one-dimensional layouts – either a row or a column. It's perfect for:</p>
                <ul>
                    <li>Navigation bars</li>
                    <li>Centering content</li>
                    <li>Distributing space between items</li>
                    <li>Aligning items in a container</li>
                </ul>
                
                <h3>CSS Grid: Two-Dimensional Layouts</h3>
                <p>CSS Grid excels at two-dimensional layouts where you need to control both rows and columns simultaneously:</p>
                <ul>
                    <li>Page layouts</li>
                    <li>Complex card layouts</li>
                    <li>Magazine-style layouts</li>
                    <li>Any layout requiring precise positioning</li>
                </ul>
                
                <h3>Can They Work Together?</h3>
                <p>Absolutely! Grid and Flexbox complement each other beautifully. You might use Grid for the overall page layout and Flexbox for component-level layouts.</p>
                
                <h3>Performance Considerations</h3>
                <p>Both Grid and Flexbox are highly optimized and performant. The choice between them should be based on your layout needs, not performance concerns.</p>
                
                <h3>Browser Support</h3>
                <p>Both technologies have excellent browser support in modern browsers. CSS Grid has near-universal support, making it safe to use in production.</p>
                
                <p>The key is understanding that Grid and Flexbox solve different problems. Choose the right tool for the job, and don't be afraid to use them together!</p>
            `
        }
    };
    
    // Initialize blog modal functionality
    initBlogModal(blogPosts);
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme, icon);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme, icon);
    });
}

function updateThemeIcon(theme, icon) {
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// GSAP Scroll Animations
function initScrollAnimations() {
    // Hero animations are handled by CSS keyframes for better performance
    
    // Section animations
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate cards
    gsap.utils.toArray('.skill-item, .project-card, .blog-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 30, scale: 0.9 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                // Animate the skill bar
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// Blog filters functionality
function initBlogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            blogCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    gsap.fromTo(card, 
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.3 }
                    );
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Blog modal functionality
function initBlogModal(blogPosts) {
    const blogCards = document.querySelectorAll('.blog-card');
    const modal = document.getElementById('blogModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');

    // Create blog post IDs based on categories and indices
    const blogPostIds = ['web-dev-1', 'tutorial-1', 'opinion-1', 'web-dev-2'];

    blogCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const postId = blogPostIds[index];
            const post = blogPosts[postId];
            
            if (post) {
                modalBody.innerHTML = post.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Animate modal appearance
                gsap.fromTo(modal, 
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3 }
                );
                gsap.fromTo(modal.querySelector('.modal-content'), 
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.3 }
                );
            }
        });
    });

    // Close modal functionality
    function closeModal() {
        gsap.to(modal, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Add loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate form submission (replace with actual form handling)
        try {
            await simulateFormSubmission(data);
            
            // Success feedback
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            // Error feedback
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
    });
}

// Simulate form submission (replace with actual implementation)
async function simulateFormSubmission(data) {
    console.log('Form submitted with data:', data);
    
    // Simulate API call delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure for demo
            Math.random() > 0.2 ? resolve() : reject();
        }, 1500);
    });
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        font-weight: 500;
        max-width: 300px;
        backdrop-filter: blur(10px);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    gsap.fromTo(notification,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.3 }
    );
    
    // Remove after 3 seconds
    setTimeout(() => {
        gsap.to(notification, {
            opacity: 0,
            x: 50,
            duration: 0.3,
            onComplete: () => notification.remove()
        });
    }, 3000);
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
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
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '0';
            gsap.to(img, { opacity: 1, duration: 0.5 });
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add typing effect to hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1500);
    }
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add cursor trail effect (optional - can be removed if too flashy)
function createCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
        `;
        
        document.body.appendChild(dot);
        trail.push(dot);
        
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.remove();
        }
        
        gsap.to(dot, {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            onComplete: () => dot.remove()
        });
    });
}

// Uncomment to enable cursor trail
// createCursorTrail();

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Navigate with arrow keys
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});

// Animate skill bars on scroll into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                gsap.to(bar, {
                    width: `${width}%`,
                    duration: 1.5,
                    ease: 'power2.out',
                    delay: 0.2
                });
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Add random floating animation to hero background
function animateHeroBackground() {
    const hero = document.querySelector('.hero::before');
    if (hero) {
        gsap.to(hero, {
            backgroundPosition: '100% 100%',
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'none'
        });
    }
}

animateHeroBackground();

// Form validation with real-time feedback
function initFormValidation() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateInput(input);
            }
        });
    });
}

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
    }
    
    if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    if (isValid) {
        input.classList.remove('invalid');
        input.style.borderColor = '';
    } else {
        input.classList.add('invalid');
        input.style.borderColor = '#ef4444';
    }
    
    return isValid;
}

initFormValidation();

// Add active state to navigation based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add CSS for active link (inject dynamically)
const style = document.createElement('style');
style.textContent = `
    .active-link {
        color: var(--primary-color) !important;
    }
    .active-link::after {
        width: 100% !important;
    }
    .fade-in {
        animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// Add Easter egg (Konami code)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    showNotification('🎉 Easter Egg Activated! You found the secret code!', 'success');
    
    // Add fun animation to all cards
    gsap.to('.project-card, .skill-item, .blog-card', {
        rotation: 360,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.1
    });
}

// Console message for developers
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #8b5cf6;');
console.log('%cEmail: alex.johnson@email.com', 'font-size: 12px; color: #06b6d4;');

// Debug mode (press Ctrl+Shift+D)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        toggleDebugMode();
    }
});

function toggleDebugMode() {
    document.body.classList.toggle('debug-mode');
    
    if (document.body.classList.contains('debug-mode')) {
        showNotification('Debug mode activated', 'success');
        addDebugStyles();
    } else {
        showNotification('Debug mode deactivated', 'success');
        removeDebugStyles();
    }
}

function addDebugStyles() {
    const debugStyle = document.createElement('style');
    debugStyle.id = 'debug-styles';
    debugStyle.textContent = `
        .debug-mode * {
            outline: 1px solid rgba(255, 0, 0, 0.3) !important;
        }
        .debug-mode .section {
            outline: 2px solid rgba(0, 255, 0, 0.5) !important;
        }
    `;
    document.head.appendChild(debugStyle);
}

function removeDebugStyles() {
    const debugStyle = document.getElementById('debug-styles');
    if (debugStyle) {
        debugStyle.remove();
    }
}

// Add print styles awareness
window.addEventListener('beforeprint', () => {
    console.log('Preparing page for printing...');
});

window.addEventListener('afterprint', () => {
    console.log('Print dialog closed.');
});

// Final initialization message
console.log('%c✅ Portfolio website fully loaded and ready!', 'font-size: 14px; color: #10b981; font-weight: bold;');