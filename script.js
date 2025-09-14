// BP Zone Review - Optimized JavaScript
function goToOfficialStore(url){gtag_report_conversion(url)}
function openModal(){document.getElementById('modal').classList.add('show');document.body.style.overflow='hidden'}
function closeModal(){document.getElementById('modal').classList.remove('show');document.body.style.overflow='auto'}

(function(){'use strict';
function smoothScroll(target){document.querySelector(target).scrollIntoView({behavior:'smooth',block:'start'})}
function initLazyLoading(){const images=document.querySelectorAll('img[data-src]');const imageObserver=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const img=entry.target;img.src=img.dataset.src;img.classList.remove('lazy');imageObserver.unobserve(img)}})});images.forEach(img=>imageObserver.observe(img))}
function initVideo(){const iframe=document.querySelector('iframe[data-src]');if(iframe){const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){iframe.src=iframe.dataset.src;io.disconnect()}});io.observe(iframe)}}
function debounce(func,wait){let timeout;return function executedFunction(...args){const later=()=>{clearTimeout(timeout);func(...args)};clearTimeout(timeout);timeout=setTimeout(later,wait)}}
function handleScrollAnimations(){const elements=document.querySelectorAll('.overview-item,.ingredient-card,.result-card,.option-card');elements.forEach(element=>{const elementTop=element.getBoundingClientRect().top;const elementVisible=150;if(elementTop<window.innerHeight-elementVisible){element.style.opacity='1';element.style.transform='translateY(0)'}})}
function initScrollAnimations(){const elements=document.querySelectorAll('.overview-item,.ingredient-card,.result-card,.option-card');elements.forEach(element=>{element.style.opacity='0';element.style.transform='translateY(30px)';element.style.transition='opacity 0.6s ease, transform 0.6s ease'});handleScrollAnimations();window.addEventListener('scroll',debounce(handleScrollAnimations,10))}
function toggleMobileMenu(){const mobileMenu=document.querySelector('.mobile-menu');if(mobileMenu){mobileMenu.classList.toggle('active')}}
window.onclick=function(event){const modal=document.getElementById('modal');if(event.target===modal){closeModal()}}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal()}})
document.addEventListener('DOMContentLoaded',function(){initScrollAnimations();initLazyLoading();initVideo();openModal();console.log('BP Zone Review page loaded successfully')})
window.BPZone={openModal,closeModal,smoothScroll,goToOfficialStore}
})();