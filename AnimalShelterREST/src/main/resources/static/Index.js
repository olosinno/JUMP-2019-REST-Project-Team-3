function initialize(){
    animalCards();
    // locationCards();
    // staffCards();
    // fosterCards();
}

function animalCards(){
    var animals = document.getElementById("animals");
    var card = document.createElement("div");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allAnimals", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            card.innerHTML = data[1].name;
        }
      };
      
    xhttp.send();
      
    card.classList.add("card");
    card.classList.add("bg-dark");
    animals.appendChild(card);
}

function locationCards(){
    var locations = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card");
    animals.appendChild(card);
}

function staffCards(){
    var staff = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card");
    animals.appendChild(card);
}

function fosterCards(){
    var fosters = document.getElementById("animals");
    var card = document.createElement("div");
    card.classList.add("card");
    animals.appendChild(card);
}