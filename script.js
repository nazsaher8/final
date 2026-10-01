// ==========================================
// HERSHIELD JAVASCRIPT
// ==========================================


// ---------- MOBILE MENU ----------

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        if (navMenu.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
        } else {
            menuBtn.innerHTML = "☰";
        }

    });

}


// ---------- EMERGENCY BUTTON ----------

const emergencyBtn = document.getElementById("emergencyBtn");

if (emergencyBtn) {

    emergencyBtn.addEventListener("click", function () {

        const confirmHelp = confirm(
            "If you are in immediate danger, contact your local emergency services or a trusted person. Do you want to continue to the support section?"
        );

        if (confirmHelp) {
            window.location.href = "support-hub.html";
        }

    });

}


// ---------- CLOSE MOBILE MENU AFTER CLICK ----------

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 800) {

            navMenu.classList.remove("show");

            if (menuBtn) {
                menuBtn.innerHTML = "☰";
            }

        }

    });

});


// ---------- SIMPLE SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(
    ".hub-card, .step, .about-content, .about-image"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {
            element.classList.add("visible");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ---------- PREVENT EMPTY LINKS ----------

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {
        event.preventDefault();
    });

});