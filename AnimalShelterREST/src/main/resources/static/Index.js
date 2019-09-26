function initialize(){
    animalCards();
    locationCards();
    staffCards();
    fosterCards();
}

function animalCards(){
    var animals = document.getElementById("animals");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allAnimals", true);
    var cardDeck = document.createElement("div");
    cardDeck.classList.add("card-group");
    var header = document.createElement("h3");
    header.innerHTML = "Featured Animals";
    animals.appendChild(header);
    animals.appendChild(cardDeck);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);
            data.forEach(element => {
                var card = document.createElement("div");
                card.innerHTML = element.name;
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-primary");
                card.style.margin = "0.25rem";
                cardDeck.appendChild(card);
            });    
        }
      };
    
    xhttp.send();
}

function locationCards(){
    var locations = document.getElementById("locations");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allShelters", true);
    var cardDeck = document.createElement("div");
    cardDeck.classList.add("card-group");
    var header = document.createElement("h3");
    header.innerHTML = "Our Locations";
    locations.appendChild(header);
    locations.appendChild(cardDeck);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);
            data.forEach(element => {
                var card = document.createElement("div");
                card.innerHTML = element.shelter_name;
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-danger");
                card.style.margin = "0.25rem";
                cardDeck.appendChild(card);
            });    
        }
      };
    
    xhttp.send();
}

function staffCards(){
    var staff = document.getElementById("staff");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allStaff", true);
    var cardDeck = document.createElement("div");
    cardDeck.classList.add("card-group");
    var header = document.createElement("h3");
    header.innerHTML = "Our Staff";
    staff.appendChild(header);
    staff.appendChild(cardDeck);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);
            data.forEach(element => {
                var card = document.createElement("div");
                card.innerHTML = element.name;
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-dark");
                card.style.margin = "0.25rem";
                staff.appendChild(card);
            });    
        }
      };
    
    xhttp.send();
}

function fosterCards(){
    var fosters = document.getElementById("fosters");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allFoster", true);
    var cardDeck = document.createElement("div");
    cardDeck.classList.add("card-group");
    var header = document.createElement("h3");
    header.innerHTML = "Foster Animals";
    fosters.appendChild(header);
    fosters.appendChild(cardDeck);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(xhttp.responseText);
            data.forEach(element => {
                var card = document.createElement("div");
                card.innerHTML = element.animalName;
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-warning");
                card.style.margin = "0.25rem";
                fosters.appendChild(card);
            });    
        }
      };
    
    xhttp.send();
}