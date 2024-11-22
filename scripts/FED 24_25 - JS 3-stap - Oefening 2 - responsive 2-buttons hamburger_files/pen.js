/******************************/
/* menu openen de MENU button */
/******************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("nav");

menuButton.onclick = toggleMenu;

function toggleMenu() {

  deNav.classList.toggle("toonMenu");
}

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit

const sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {

  deNav.classList.remove("toonMenu");
}
// stap 3: voeg in de functie een class toe aan de nav





/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op


// stap 2 - laat die button luisteren naar kliks


// stap 3 - in de functie verwijder de class van de nav