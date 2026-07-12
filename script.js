// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ======================================
// SMOOTH SCROLLING
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        navLinks.classList.remove("active");

    });

});

// ======================================
// TYPEWRITER EFFECT
// ======================================

const roles = [
    "AI Enthusiast",
    "Machine Learning Practitioner",
    "Cloud Enthusiast",
    "System Engineer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;

        }

    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

window.addEventListener("load", () => {

    if (typingText) {
        typeEffect();
    }

});

// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
            "active-link"
        );

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

});

// ======================================
// FADE IN ANIMATION
// ======================================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );

document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .timeline-item, .about-content"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ======================================
// PROJECT CARD HOVER EFFECT
// ======================================

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0px)";

        }
    );

});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

scrollBtn.id =
    "scrollTopBtn";

document.body.appendChild(
    scrollBtn
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            scrollBtn.classList.add(
                "show-btn"
            );

        } else {

            scrollBtn.classList.remove(
                "show-btn"
            );

        }

    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ======================================
// HERO IMAGE FLOAT EFFECT
// ======================================

const heroImage =
    document.querySelector(
        ".image-wrapper"
    );

if (heroImage) {

    let position = 0;

    setInterval(() => {

        position =
            position === 0 ? 10 : 0;

        heroImage.style.transform =
            `translateY(-${position}px)`;

    }, 2500);

}

// ======================================
// CURRENT YEAR AUTO UPDATE
// ======================================

const footerYear =
    document.querySelector(
        ".footer-year"
    );

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();

}

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log(
    "Portfolio Loaded Successfully 🚀"
);