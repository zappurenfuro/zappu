// Carousel logic
function changeImage(control, index) {
    const carousel = control.closest('.project-card').querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
}

// Navigation visibility
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        nav.classList.remove('visible');
    }
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.remove('visible');
    }
    if (currentScroll < lastScroll) {
        nav.classList.add('visible');
    }
    lastScroll = currentScroll;
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Header animations
gsap.to('.header-content h1', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
});

gsap.to('.header-content p', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8
});

gsap.to('.tech-stack', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.2
    });
});