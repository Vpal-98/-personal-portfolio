



// change header background on scroll

const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader);
// scroll about animation
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


// mixitup filter

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix',
    },
    animation: {
        duration: 300,
    },
});

// active link
const linkwork = document.querySelectorAll('.work-item');

function activework() {
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkwork.forEach((a) => a.addEventListener('click', activework));


// scrolls section active link
const sections = document.querySelectorAll('section[id]');
    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionClass.classList.add('active-link');
            } else {
                sectionClass.classList.remove('active-link');
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

// dark light theme
window.addEventListener('DOMContentLoaded', () => {
    const togglebtn = document.getElementById('.theme-toggle');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            togglebtn.classList.remove('ri-sun-line');
            togglebtn.classList.add('ri-moon-line');
        }

        else
         {
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

// scroll reveal animation
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



// menu show and hidden

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');


// menu show 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// hide menu

if( navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}









