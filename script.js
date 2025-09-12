// Smooth scrolling for CTA button
function scrollToOrder() {
    const orderSection = document.getElementById('order');
    orderSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Redirect to official store
function goToOfficialStore() {
    window.location.href = 'https://hop.clickbank.net/?affiliate=raniere57&vendor=bpzone&v=cb&tid=17539368572';
}

// FAQ Toggle functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            const otherAnswer = item.querySelector('.faq-answer');
            const otherIcon = item.querySelector('.faq-icon');
            const otherButton = item.querySelector('.faq-question');
            
            otherAnswer.classList.remove('active');
            otherIcon.textContent = '+';
            otherButton.classList.remove('active');
        }
    });
    
    // Toggle current FAQ item
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        icon.textContent = '+';
        button.classList.remove('active');
    } else {
        answer.classList.add('active');
        icon.textContent = '−';
        button.classList.add('active');
    }
}

// Plan selection functionality
function selectPlan(months) {
    // Add visual feedback
    const buttons = document.querySelectorAll('.order-button');
    buttons.forEach(btn => btn.style.transform = 'scale(1)');
    
    const selectedButton = event.target;
    selectedButton.style.transform = 'scale(0.95)';
    
    // Simulate order process (in real implementation, this would redirect to checkout)
    setTimeout(() => {
        alert(`Redirecting to checkout for ${months} month${months > 1 ? 's' : ''} supply...`);
        // In a real implementation, you would redirect to the actual checkout page
        // window.location.href = `https://supportmybloodpressure.net/cb/?plan=${months}`;
    }, 200);
    
    // Reset button animation
    setTimeout(() => {
        selectedButton.style.transform = 'scale(1)';
    }, 200);
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.problem-item, .benefit, .ingredient, .bonus, .testimonial, .pricing-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    const elements = document.querySelectorAll('.problem-item, .benefit, .ingredient, .bonus, .testimonial, .pricing-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    handleScrollAnimations();
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimations);
}

// Counter animation for pricing
function animateCounters() {
    const counters = document.querySelectorAll('.amount');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Parallax effect for hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.product-image');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
}

// Form validation (if contact form is added)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b6b';
            isValid = false;
        } else {
            input.style.borderColor = '#4ecdc4';
        }
    });
    
    return isValid;
}

// Add to cart functionality (placeholder)
function addToCart(productId, quantity = 1) {
    // In a real implementation, this would integrate with your e-commerce platform
    console.log(`Adding ${quantity} of product ${productId} to cart`);
    
    // Show success message
    showNotification('Product added to cart!', 'success');
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#3498db'};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for better performance
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.problem-item, .benefit, .ingredient, .bonus, .testimonial, .pricing-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth scroll for anchor links
function initSmoothScroll() {
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
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initIntersectionObserver();
    initLazyLoading();
    initSmoothScroll();
    
    // Add scroll event listener for parallax
    window.addEventListener('scroll', handleParallax);
    
    // Animate counters when order section comes into view
    const orderSection = document.getElementById('order');
    if (orderSection) {
        const orderObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    orderObserver.unobserve(entry.target);
                }
            });
        });
        orderObserver.observe(orderSection);
    }
    
    // Add click tracking for analytics (placeholder)
    document.querySelectorAll('.cta-button, .order-button').forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, you would send this data to your analytics platform
            console.log('CTA clicked:', this.textContent);
        });
    });
    
    // Add form submission handling (if forms are added)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                // Handle form submission
                showNotification('Form submitted successfully!', 'success');
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate any size-dependent elements
    handleScrollAnimations();
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes FAQ items
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-answer.active').forEach(answer => {
            answer.classList.remove('active');
            answer.previousElementSibling.classList.remove('active');
            answer.previousElementSibling.querySelector('.faq-icon').textContent = '+';
        });
    }
});

// Add loading state for buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    return function removeLoadingState() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Image modal functionality
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modal.style.display = 'block';
    modalImg.src = src;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImageModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Export functions for potential external use
window.BPZone = {
    scrollToOrder,
    selectPlan,
    addToCart,
    showNotification,
    openImageModal,
    closeImageModal,
    goToOfficialStore
};
