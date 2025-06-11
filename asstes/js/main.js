


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
