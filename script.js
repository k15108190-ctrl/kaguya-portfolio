const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navMenu.classList.toggle('show');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('active');
        navMenu.classList.remove('show');
    });
});

window.addEventListener('load', () => {
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        const h1 = document.querySelector('.hero-content h1');
        h1.classList.add('show');
    }, 1500);

    setTimeout(() => {
        createShootingStar();
    }, 2500);

    setTimeout(() => {
        document.body.style.overflow = 'auto'; 
    }, 4000);
});

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    const startX = window.innerWidth * 0.6;
    star.style.left = `${startX}px`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const strengthBoxes = document.querySelectorAll('.strength-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold:0.2
    });

    strengthBoxes.forEach(box => {
        observer.observe(box);
    });
});