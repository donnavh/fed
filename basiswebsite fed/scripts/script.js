// JavaScript Document
console.log("hi");



var openButton = document.querySelector("header > button:nth-of-type(2)");


function openMenu() {
    var deNav = document.querySelector("nav");

    deNav.classList.add("toonMenu");
    console.log("hrt werkt");
}

openButton.onclick = openMenu;


var sluitButton = document.querySelector("nav button");

sluitButton.onclick = sluitMenu;

function sluitMenu(){
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
}


