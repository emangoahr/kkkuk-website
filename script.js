
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('active');
});


const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});


const sections = document.querySelectorAll('section');

const checkVisibility = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); 
