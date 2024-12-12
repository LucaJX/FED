const slides = document.querySelectorAll("section:nth-of-type(1) ul li img");
const prevButton = document.querySelector("section:nth-of-type(1) button:first-of-type");
const nextButton = document.querySelector("section:nth-of-type(1) button:last-of-type");
// menu
const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");
const closeButton = document.querySelector("header > nav > button");

let slideIndex = 0;

// Attach event listeners properly
prevButton.onclick = () => changeSlide(-1);
nextButton.onclick = () => changeSlide(1);

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });
}

function changeSlide(step) {
    slideIndex = (slideIndex + step + slides.length) % slides.length; // Loop around
    showSlides();
}

// Initialize the slideshow
showSlides();



// Toggle menu open
menuButton.onclick = function () {
    const isMenuOpen = deNav.classList.toggle("toonMenu");
    // Change button text
    menuButton.textContent = isMenuOpen ? "Close" : "Menu";
};

// Close menu
closeButton.onclick = function () {
    deNav.classList.remove("toonMenu");
};