// JavaScript Document
console.log("hi");

const prevButton = document.querySelector("main section:nth-of-type(2) > div button:nth-of-type(1)");
const nextButton = document.querySelector("main section:nth-of-type(2) > div button:nth-of-type(2)");
const deCaro = document.querySelector("main section:nth-of-type(2) ul");

// menu
const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");
const closeButton = document.querySelector("header > nav > button");

nextButton.onclick = gotoNext;
prevButton.onclick = gotoPrev;


function gotoNext() {
    deCaro.scrollLeft = deCaro.scrollLeft + 100;
}

function gotoPrev() {
    deCaro.scrollLeft = deCaro.scrollLeft - 100;
}



// Toggle menu open
menuButton.onclick = function () {
    deNav.classList.toggle("toonMenu");
};

// Close menu
closeButton.onclick = function () {
    deNav.classList.remove("toonMenu");
};
