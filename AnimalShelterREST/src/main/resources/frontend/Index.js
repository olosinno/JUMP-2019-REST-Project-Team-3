function initialize(){
    animalCards();
    locationCards();
    staffCards();
    fosterCards();
}

function animalCards(){
    var animals = document.getElementById("animals");
    var card = document.createElement("div");
    var client = new XMLHttpRequest();
    card.classList.add("card bg-dark");
    animals.appendChild(card);
    

}

function locationCards(){
    var locations = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card bg-dark");
    animals.appendChild(card);
}

function staffCards(){
    var staff = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card bg-dark");
    animals.appendChild(card);
}

function fosterCards(){
    var fosters = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card bg-dark");
    animals.appendChild(card);
}