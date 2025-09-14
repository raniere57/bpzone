// BP Zone Review - Optimized JavaScript
// Go to official store function - Global
function goToOfficialStore(url){gtag_report_conversion(url)}

// Modal functionality - Global
function openModal(){document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow='auto'}

(function(){'use strict';
// Smooth scrolling
function smoothScroll(target){document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'})}
// Lazy loading for images
function initLazyLoading(){const images=document.querySelectorAll('img[data-src]');const imageObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const img=entry.target;img.src=img.dataset.src;img.classList.remove('lazy');imageObserver.unobserve(img)}})});images.forEach(img=>imageObserver.observe(img))}
// Performance optimization
function debounce(func,wait){let timeout;return function executedFunction(...args){const later=()=>{clearTimeout(timeout);func(...args)};clearTimeout(timeout);timeout=setTimeout(later,wait)}}
// Scroll animations
function handleScrollAnimations(){const elements=document.querySelectorAll('.overview-item,.ingredient-card,.result-card,.option-card');elements.forEach(element=>{const elementTop=element.getBoundingClientRect().top;const elementVisible=150;if(elementTop<window.innerHeight-elementVisible){element.style.opacity='1';element.style.transform='translateY(0)'}})}
// Initialize scroll animations
function initScrollAnimations(){const elements=document.querySelectorAll('.overview-item,.ingredient-card,.result-card,.option-card');elements.forEach(element=>{element.style.opacity='0';element.style.transform='translateY(30px)';element.style.transition='opacity 0.6s ease, transform 0.6s ease'});handleScrollAnimations();window.addEventListener('scroll',debounce(handleScrollAnimations,10))}
// Mobile menu toggle
function toggleMobileMenu(){const mobileMenu=document.querySelector('.mobile-menu');if(mobileMenu){mobileMenu.classList.toggle('active')}}
// Close modal when clicking outside
window.onclick=function(event){const modal=document.getElementById('modal');if(event.target===modal){closeModal()}}
// Close modal with Escape key
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal()}})
// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded',function(){initScrollAnimations();initLazyLoading();openModal();console.log('BP Zone Review page loaded successfully')})
// Export functions for external use
window.BPZone={openModal,closeModal,smoothScroll,goToOfficialStore}
})();