const menuBtn = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.container-links');

menuBtn.addEventListener('click', () => {
    menuNav.classList.toggle('active');
    if (menuNav.classList.contains('active')) {
        menuBtn.textContent = '✕';
        document.body.style.overflow = 'hidden';
    } else {
        menuBtn.textContent = '☰';
        document.body.style.overflow = 'auto';
    }
});

const navLinks = document.querySelectorAll('.links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active');
        menuBtn.textContent = '☰';
        document.body.style.overflow = 'auto';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.accordion-header');
    if (header) {
        header.addEventListener('click', () => {
            const section = header.parentElement;
            section.classList.toggle('active');
            console.log("Clique detectado!");
        });
    }
});

const backToTopBtn = document.getElementById('backToTop');
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

