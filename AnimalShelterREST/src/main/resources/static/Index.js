function initialize(){
    //generate card decks
    animalCards();
    locationCards();
    staffCards();
    fosterCards();
    //make about 
    aboutUs();  
}

function animalCards(){
    //Grab HTML Placeholder
    var animals = document.getElementById("animals");
    //Open AJAX read from Controller Mappings
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "/animalshelter/allAnimals", true);
    //Card Deck Contains Cards
    var cardDeck = document.createElement("div");
    cardDeck.classList.add("card-group");
    //Card Deck Header
    var header = document.createElement("h3");
    header.innerHTML = "Featured Animals";
    header.classList.add("font-weight-bold");
    header.classList.add("p-2");
    var topDiv = document.createElement("div");
    topDiv.classList.add("d-flex");
    topDiv.classList.add("flex-row");
    //Add Card Deck to Placeholder
    topDiv.appendChild(header);
    // topDiv.appendChild(cButton);
    animals.appendChild(topDiv);
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
                    if(element.image_path == '')cardImg.src = 'images/noImage.gif';
                    //Card Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    cardTxt.innerHTML = element.name + ' is a '+ element.gender + ' ' + element.breed + ' ' +  element.species + ' that is ' + element.age + ' years old. ';                    
                    //Card Footer
                    var cardFtr = document.createElement("div");
                    cardFtr.classList.add("card-footer");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                    card.appendChild(cardFtr);
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
    header.classList.add("font-weight-bold");
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
                    cardImg.src = element.image_path;
                    console.log(element.image_path);
                    cardImg.alt = "Location Image";
                    cardImg.style.objectFit = "cover";
                    cardImg.style.maxHeight = "300px";
                    if(element.image_path == '')cardImg.src = 'images/noImage.gif';
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    cardTxt.innerHTML = element.addressNo + ' ' + element.street + '<br>' + element.township + ' ' + element.state + ' ' + element.ZIP;
                    //Card Footer
                    var cardFtr = document.createElement("div");
                    cardFtr.classList.add("card-footer");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                    card.appendChild(cardFtr);
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
    header.classList.add("font-weight-bold");
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
                    if(element.image_path == '')cardImg.src = 'images/noImage.gif';
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    cardTxt.innerHTML = element.name + ' is a ' + element.title;
                    //Card Footer
                    var cardFtr = document.createElement("div");
                    cardFtr.classList.add("card-footer");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                    card.appendChild(cardFtr);
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
    header.classList.add("font-weight-bold");
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
                    if(element.image_path == '')cardImg.src = 'images/noImage.gif';
                    //Text
                    var cardTxt = document.createElement("p");
                    cardTxt.classList.add("card-text");
                    //Card Footer
                    var cardFtr = document.createElement("div");
                    cardFtr.classList.add("card-footer");
                    //Write Card
                    card.appendChild(cardHead);
                    card.appendChild(cardImg);
                    card.appendChild(cardTxt);
                    card.appendChild(cardFtr);
                cardDeck.appendChild(card);
            });    
        }
      };
    xhttp.send();
}

function aboutUs(){
    var section = document.getElementById("aboutUs");
    section.classList.add("d-inline-flex");
    section.classList.add("d-flex");
    section.classList.add("flex-column");
    var header = document.createElement("h3");
    header.classList.add("p2");
    var content = document.createElement("p");
    content.classList.add("p2");
    header.innerHTML = "About Us";
    content.innerHTML = "We talk about us here";
    var music = document.createElement("iframe");
      music.allow = "autoplay";
      music.src = "https://www.youtube.com/embed/i1GmxMTwUgs?start=69&autoplay=1&cc_load_policy=1"; 
      music.style.objectFit = "cover";
    section.appendChild(header);
    section.appendChild(content);
    section.appendChild(music);
}

function createNewAnimal(link)
{
    var testExists = document.getElementById("myModal");

    if(testExists != null)
    {
        testExists.remove();
    }

    // Gets element to add
    var fosters = document.getElementById("pageLayout");

    // Creates main modal div
    var theModal = document.createElement("div");
    theModal.className = "modal fade"
    theModal.id = "myModal";

    fosters.appendChild(theModal);

    // Adds modal dialog
    var theModalDialog = document.createElement("div");
    theModalDialog.className = "modal-dialog modal-dialog-centered";

    theModal.appendChild(theModalDialog);

    // Adds modal content
    var theModalContent = document.createElement("div");
    theModalContent.className = "modal-content";

    theModalDialog.appendChild(theModalContent);

    // Adds modal header
    var theModalHeader = document.createElement("div");
    theModalHeader.className = "modal-header";

    theModalContent.appendChild(theModalHeader);
    
    // Adds close button of header
    var theModalHeaderButton = document.createElement("button");
    theModalHeaderButton.type = "button";
    theModalHeaderButton.className = "close";
    theModalHeaderButton.setAttribute("data-dismiss", "modal")
    theModalHeaderButton.innerHTML = "&times;";

    theModalHeader.appendChild(theModalHeaderButton);

    // Adds the body to modal
    var theModalBody = document.createElement("div");
    theModalBody.className = "modal-body";
    
    theModalContent.appendChild(theModalBody);

    // Adds the footer to modal
    var theModalfooter = document.createElement("div");
    theModalfooter.className = "modal-footer";

    theModalContent.appendChild(theModalfooter);

    // Adds the add button
    var theModalfooterButton = document.createElement("div");
    theModalfooterButton.type = "button";
    theModalfooterButton.className = "btn btn-success";
    theModalfooterButton.innerHTML = "Add";

    theModalfooter.appendChild(theModalfooterButton);
    
    switch(link)
    {
        case 'foster':
            // Adds H4 of header
            var theModalHeaderH4 = document.createElement("h4");
            theModalHeaderH4.className = "modal-title";
            theModalHeaderH4.innerText = "Add New Foster!";

            theModalHeader.prepend(theModalHeaderH4);

            // Adds form to body
            var theModalBodyForm = document.createElement("form");
            theModalBody.appendChild(theModalBodyForm);

            // Adds the Name form-------------------------------------------
                // Creates input group
                var theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                var theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                var theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Name";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                var theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
            
            // Adds the Description form------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Description";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Type form ------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Animal Type";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Date form-------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Estimated Birth";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.placeholder = "YYYY-MM-DD"
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
        break;

        case 'animal':
            // Adds H4 of header
            var theModalHeaderH4 = document.createElement("h4");
            theModalHeaderH4.className = "modal-title";
            theModalHeaderH4.innerText = "Add New Animal!";

            theModalHeader.prepend(theModalHeaderH4);

            // Adds form to body
            var theModalBodyForm = document.createElement("form");
            theModalBody.appendChild(theModalBodyForm);

            // Adds the Age form-------------------------------------------
                // Creates input group
                var theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                var theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                var theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Age";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                var theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
            
            // Adds the Breed form------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Breed";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Gender form ------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Gender";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the Select to group
                theModalBodyFormGroupText = document.createElement("select");
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Male"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);
                    
                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Female"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);
        break;

        case 'shelter':
            // Adds H4 of header
            var theModalHeaderH4 = document.createElement("h4");
            theModalHeaderH4.className = "modal-title";
            theModalHeaderH4.innerText = "Add New Shelter!";

            theModalHeader.prepend(theModalHeaderH4);

            // Adds form to body
            var theModalBodyForm = document.createElement("form");
            theModalBody.appendChild(theModalBodyForm);

            // Adds the Name form-------------------------------------------
                // Creates input group
                var theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                var theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                var theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Name";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                var theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
            
            // Adds the Address Number form------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Address Number";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Street form ------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Street";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Town form-------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Town";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
        
            // Adds the Town form-------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Town";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the Zip form-------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Zip";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);

            // Adds the State form-------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "State";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
        break;

        case 'staff':
            // Adds H4 of header
            var theModalHeaderH4 = document.createElement("h4");
            theModalHeaderH4.className = "modal-title";
            theModalHeaderH4.innerText = "Add New Staff Member!";

            theModalHeader.prepend(theModalHeaderH4);

            // Adds form to body
            var theModalBodyForm = document.createElement("form");
            theModalBody.appendChild(theModalBodyForm);

            // Adds the Name form-------------------------------------------
                // Creates input group
                var theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                var theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                var theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Name";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                var theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
            
            // Adds the Title form------------------------------------------
                // Creates input group
                theModalBodyFormGroup1 = document.createElement("div");
                theModalBodyFormGroup1.className = "input-group mb-3";
                theModalBodyForm.append(theModalBodyFormGroup1);

                theModalBodyFormGroup2 = document.createElement("div");
                theModalBodyFormGroup2.className = "input-group-prepend";
                theModalBodyFormGroup1.append(theModalBodyFormGroup2);

                // Creates input group span
                theModalBodyFormGroupSpan = document.createElement("span");
                theModalBodyFormGroupSpan.className = "input-group-text";
                theModalBodyFormGroupSpan.innerHTML = "Title";
                theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

                // Adds the text to group
                theModalBodyFormGroupText = document.createElement("input");
                theModalBodyFormGroupText.type = "text";
                theModalBodyFormGroupText.className = "form-control"
                theModalBodyFormGroup1.append(theModalBodyFormGroupText);
        break;
    }

    $("#myModal").modal()
}