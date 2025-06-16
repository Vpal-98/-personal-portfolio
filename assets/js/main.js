// Change header background on scroll
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (!header) return;
    window.scrollY >= 20
        ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);

// GSAP scroll about animation
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".text-gradient").forEach((span) => {
        gsap.to(span, {
            backgroundSize: "100% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: span,
                start: "top bottom",
                end: "top center",
                scrub: true,
            },
        });
    });
}

// Mixitup filter
if (typeof mixitup !== "undefined") {
    var mixer = mixitup('.work-container', {
        selectors: {
            target: '.mix',
        },
        animation: {
            duration: 300,
        },
    });
}

// Active work link
const linkwork = document.querySelectorAll('.work-item');
function activework() {
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkwork.forEach((a) => a.addEventListener('click', activework));

// Scroll section active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav-menu a [href*=' + sectionId + ']');
        if (sectionClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

// Dark/light theme toggle
window.addEventListener('DOMContentLoaded', () => {
    const togglebtn = document.getElementById('theme-toggle'); // Corrected: remove dot
    if (!togglebtn) return;

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            togglebtn.classList.remove('ri-sun-line');
            togglebtn.classList.add('ri-moon-line');
        } else {
            document.body.classList.remove('light-theme');
            togglebtn.classList.add('ri-sun-line');
            togglebtn.classList.remove('ri-moon-line');
        }
        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    togglebtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    });
});

// ScrollReveal animation
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
    });

    sr.reveal(`.home-data`);
    sr.reveal(`.home-img-wrapper`, { delay: 500 });
    sr.reveal(`.home-social`, { delay: 600 });
    sr.reveal(`.Frontend, .contact-group`, { origin: 'left' });
    sr.reveal(`.Backend, .contact-form`, { origin: 'right' });
    sr.reveal(`.work-card`, { interval: 100 });
}


// Show menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu show and hide
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}


    


// Optional: Hide menu when a nav link is clicked (for mobile UX)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});







