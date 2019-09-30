function updateAnimal(theId)
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
    theModalfooterButton.id = "theAddButton"
    theModalfooterButton.type = "button";
    theModalfooterButton.className = "btn btn-success";
    theModalfooterButton.innerHTML = "Update";

    theModalfooter.appendChild(theModalfooterButton);


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
        theModalBodyFormGroupText.id = "formAge";
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
        theModalBodyFormGroupText.id = "formBreed";
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
        theModalBodyFormGroupText.id = "formGender";
        theModalBodyFormGroup1.append(theModalBodyFormGroupText);

    // Adds the Image form------------------------------------------
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
        theModalBodyFormGroupSpan.innerHTML = "Image";
        theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

        // Adds the text to group
        theModalBodyFormGroupText = document.createElement("input");
        theModalBodyFormGroupText.type = "text";
        theModalBodyFormGroupText.className = "form-control"
        theModalBodyFormGroupText.id = "formImage";
        theModalBodyFormGroup1.append(theModalBodyFormGroupText);
        
    // Adds the Name form------------------------------------------
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
        theModalBodyFormGroupSpan.innerHTML = "Name";
        theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

        // Adds the text to group
        theModalBodyFormGroupText = document.createElement("input");
        theModalBodyFormGroupText.type = "text";
        theModalBodyFormGroupText.className = "form-control"
        theModalBodyFormGroupText.id = "formName";
        theModalBodyFormGroup1.append(theModalBodyFormGroupText);

    // Adds the Size form------------------------------------------
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
        theModalBodyFormGroupSpan.innerHTML = "Size";
        theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

        // Adds the text to group
        theModalBodyFormGroupText = document.createElement("input");
        theModalBodyFormGroupText.type = "text";
        theModalBodyFormGroupText.className = "form-control"
        theModalBodyFormGroupText.id = "formSize";
        theModalBodyFormGroup1.append(theModalBodyFormGroupText);

    // Adds the Species form------------------------------------------
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
        theModalBodyFormGroupSpan.innerHTML = "Species";
        theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

        // Adds the text to group
        theModalBodyFormGroupText = document.createElement("input");
        theModalBodyFormGroupText.type = "text";
        theModalBodyFormGroupText.className = "form-control"
        theModalBodyFormGroupText.id = "formSpecies";
        theModalBodyFormGroup1.append(theModalBodyFormGroupText);

        
        //Open AJAX read from Controller Mappings
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/animalshelter/getAnimal/" + theId, true);

        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                data = JSON.parse(xhttp.responseText);
                //Loop Through Animals
                theModalHeaderH4.innerHTML = "Update " + data.name;
                formAge.value = data.age;
                formBreed.value = data.breed;
                formImage.value = data.imagePath;

                theModalBodyFormGroupText = document.getElementById("formGender");
                if(data.gender == "Male")
                {
                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Male"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);
                    
                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Female"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);
                }else{
                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Female"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);

                    // Adds the Male to options
                    theModalBodyFormGroupSelect = document.createElement("option");
                    theModalBodyFormGroupSelect.innerHTML = "Male"
                    theModalBodyFormGroupText.append(theModalBodyFormGroupSelect);
                }

                formName.value = data.name;
                formSize.value = data.size;
                formSpecies.value = data.species;

                theModalfooterButton.setAttribute("onclick", "updateAnimalClick(" + theId +")");

                $("#myModal").modal();
            }
      };

    xhttp.send(); 
}

function updateAnimalClick(theId)
{
        var sendData = {
        "id": theId,
        "imagePath": document.getElementById("formImage").value,
        "name": document.getElementById("formName").value,
        "gender": document.getElementById("formGender").value,
        "species": document.getElementById("formSpecies").value,
        "breed": document.getElementById("formBreed").value,
        "size": document.getElementById("formSize").value,
        "age": document.getElementById("formAge").value
        };

        //Open AJAX read from Controller Mappings
        var xhttp = new XMLHttpRequest();
        xhttp.open("PUT", "/animalshelter/updateAnimal", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
            
        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                document.getElementById("animals").innerHTML = "";
                animalCards();  
                $("#myModal").modal('toggle');
            }
        };
    
        xhttp.send(JSON.stringify(sendData));
}

function updateShelter(theId)
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
    theModalfooterButton.id = "theAddButton"
    theModalfooterButton.type = "button";
    theModalfooterButton.className = "btn btn-success";
    theModalfooterButton.innerHTML = "Update";

    theModalfooter.appendChild(theModalfooterButton);

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
		theModalBodyFormGroupText.id = "formName";
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
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formAddress";
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
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formStreet";
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
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formTownship";
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
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formZip";
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
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formState";
		theModalBodyFormGroup1.append(theModalBodyFormGroupText);

	// Adds the Image form-------------------------------------------
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
		theModalBodyFormGroupSpan.innerHTML = "Image Path";
		theModalBodyFormGroup2.append(theModalBodyFormGroupSpan);

		// Adds the text to group
		theModalBodyFormGroupText = document.createElement("input");
		theModalBodyFormGroupText.type = "text";
		theModalBodyFormGroupText.className = "form-control";
		theModalBodyFormGroupText.id = "formImage";
		theModalBodyFormGroup1.append(theModalBodyFormGroupText);


		//Open AJAX read from Controller Mappings
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "/animalshelter/getShelter/" + theId, true);

        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                data = JSON.parse(xhttp.responseText);
                theModalHeaderH4.innerHTML = "Update " + data.shelter_name;
                formZip.value = data.zip;
                formAddress.value = data.addressNo;
                formImage.value = data.image_path;
				formName.value = data.shelter_name;
				formState.value = data.state;
				formStreet.value = data.street;
				formTownship.value = data.township;

                theModalfooterButton.setAttribute("onclick", "updateShelterClick(" + theId +")");

                $("#myModal").modal();
            }
      	};

	xhttp.send();
}

function updateShelterClick(theId)
{
    var sendData = {
	"id": theId,
    "zip": document.getElementById("formZip").value,
    "addressNo": document.getElementById("formAddress").value,
    "image_path": document.getElementById("formImage").value,
    "shelter_name": document.getElementById("formName").value,
    "state": document.getElementById("formState").value,
    "street": document.getElementById("formStreet").value,
    "township": document.getElementById("formTownship").value,
    };

    var xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/animalshelter/updateShelter", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var locations = document.getElementById("locations");
            locations.innerHTML = "";
            locationCards();
            
            $("#myModal").modal('toggle');
        }
      };

    xhttp.send(JSON.stringify(sendData));
}