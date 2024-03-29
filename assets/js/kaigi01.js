'use strict';


// parallax by rellax
let rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});


// smooth scroll to div from header
window.smoothScroll = function (target) {
    let scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


// back to top 
let timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 5);
    }
    else clearTimeout(timeOut);
}


// particle bg
particlesJS("particles_js", {
    particles: {
        number: {
            value: 30,
            density: { enable: true, value_area: 868.0624057955 }
        },
        color: { value: "#ff4158" },
        shape: {
            type: "edge",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 3 },
            image: { src: "img/github.svg", width: 50, height: 50 }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 31.168831168831172,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            // color: "#ea6a7a",
            color: "#f2c1c7",
            opacity: 1,
            width: 2
        },
        move: {
            enable: true,
            speed: 8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 3 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});