// JavaScript Document
console.log("hi");

//carousel buttons
const prevButton = document.querySelector("main section:nth-of-type(2) > div button:nth-of-type(1) ");
const nextButton = document.querySelector("main section:nth-of-type(2) > div button:nth-of-type(2)");
const deCaro = document.querySelector("main section:nth-of-type(2) ul");
const eenItem = document.querySelector("main section:nth-of-type(2) li");

// menu
const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");
const closeButton = document.querySelector("header > nav > button");

nextButton.onclick = gotoNext;
prevButton.onclick = gotoPrev;

//carrousel buttons
function gotoNext() {
    deCaro.scrollLeft = deCaro.scrollLeft + eenItem.offsetWidth;
}

function gotoPrev() {
    deCaro.scrollLeft = deCaro.scrollLeft - eenItem.offsetWidth;
}

// Toggle menu open
menuButton.onclick = function () {
    const isMenuOpen = deNav.classList.toggle("toonMenu");
    // Change button text
    menuButton.textContent = isMenuOpen ? "Close" : "Menu";
}

// Close menu
closeButton.onclick = function () {
    deNav.classList.remove("toonMenu");
};

//toggle dark and light mode

function darkmode(){

    var element = document.body;
   element.classList.toggle("dark-mode");
}



document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }
})
