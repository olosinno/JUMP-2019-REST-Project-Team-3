function initialize(){
    animalCards();
    locationCards();
    staffCards();
    fosterCards();
    aboutUs();
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
                //Create Card
                var card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-primary");
                card.style.margin = "0.25rem";
                //Create Card Components
                    //Header
                    var cardHead = document.createElement("div");
                    cardHead.classList.add("card-header");
                    cardHead.innerHTML = element.name;
                    //Image
                    var cardImg = document.createElement("img");
                    cardImg.classList.add("card-img-top");
                    cardImg.classList.add("card-body");
                    cardImg.src = element.imagePath;
                    cardImg.alt = "Animal Image";
                    cardImg.style.objectFit = "cover";
                    cardImg.style.maxHeight = "300px";
                    //Card Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    cardTxt.innerHTML = element.gender + element.species;
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
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
                //Create Card
                var card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-danger");
                card.style.margin = "0.25rem";
                //Create Card Components
                    //Head
                    var cardHead = document.createElement("div");
                    cardHead.classList.add("card-header");
                    cardHead.innerHTML = element.shelter_name;
                    //Image
                    var cardImg = document.createElement("img");
                    cardImg.classList.add("card-img-top");
                    cardImg.classList.add("card-body");
                    cardImg.src = element.imagePath;
                    cardImg.alt = "Location Image";
                    cardImg.style.objectFit = "cover";
                    cardImg.style.maxHeight = "300px";
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
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
                //Create Card
                var card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-dark");
                card.style.margin = "0.25rem";
                //Create Card Components
                    //Header
                    var cardHead = document.createElement("div");
                    cardHead.classList.add("card-header");
                    cardHead.innerHTML = element.name;
                    //Image
                    var cardImg = document.createElement("img");
                    cardImg.classList.add("card-img-top");
                    cardImg.classList.add("card-body");
                    cardImg.src = element.imagePath;
                    cardImg.alt = "Staff Image";
                    cardImg.style.objectFit = "cover";
                    cardImg.style.maxHeight = "300px";
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                cardDeck.appendChild(card);
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
                //Create the Card
                var card = document.createElement("div");
                card.classList.add("card");
                card.classList.add("rounded");
                card.classList.add("bg-warning");
                card.style.margin = "0.25rem";
                //Create Card Components
                    //Head
                    var cardHead = document.createElement("div");
                    cardHead.classList.add("card-header");
                    cardHead.innerHTML = element.animalName;
                    //Image
                    var cardImg = document.createElement("img");
                    cardImg.classList.add("card-img-top");
                    cardImg.classList.add("card-body");
                    cardImg.src = element.imagePath;
                    cardImg.alt = "Foster Image";
                    cardImg.style.objectFit = "cover";
                    cardImg.style.maxHeight = "300px";
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                cardDeck.appendChild(card);
            });    
        }
      };
    xhttp.send();
}

function aboutUs(){
    var section = document.getElementById("aboutUs");
    var header = document.createElement("h3");
    var content = document.createElement("p");
    header.innerHTML = "About Us";
    content.innerHTML = "We talk about us here";
    section.appendChild(header);
    section.appendChild(content);
}