
// Write your JavaScript code here!
window.addEventListener("load", function() {

// let launchForm = document.getElementById("launchForm");
// let pilotName = document.querySelector('input[name=pilotName]').value;
// let copilotName = document.querySelector('input[name=copilotName]').value;
// let fuelLevel = document.querySelector('input[name=fuelLevel').value;
// let cargoMass = document.querySelector('input[name=cargoMass]').value;
// let list = document.getElementById('faultyItems');

launchForm.addEventListener("submit", (event) => {
    pilotName = document.querySelector('input[name=pilotName]').value;
    copilotName = document.querySelector('input[name=copilotName]').value;
    fuelLevel = document.querySelector('input[name=fuelLevel').value;
    cargoMass = document.querySelector('input[name=cargoMass]').value;
    list = document.getElementById('faultyItems');
    
    let validateWholeForm = () => {
        let nameError = false;
        let numberError = false;
        let emptyFieldError = false;

        if (validateInput(pilotName) === 'Empty' || validateInput(copilotName) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty') {
            emptyFieldError = true;
            event.preventDefault();
        }
    
        if (validateInput(pilotName) === 'Is a number' || validateInput(copilotName) === 'Is a number') {
            nameError = true;
            event.preventDefault();
        } 

        if (validateInput(fuelLevel) === 'Not a number' || validateInput(cargoMass) === 'Not a number') {
            numberError = true;
            event.preventDefault();
        }
       
        if (emptyFieldError || nameError || numberError) {
            event.preventDefault();
            let errorMessages = 'Be sure to enter valid info!\n\n';
            const emptyErrorMessage = 'All fields are required.\n';
            const nameErrorMessage = 'Names must not be numbers.\n';
            const numberErrorMessage = 'Fuel and Cargo fields must be numbers.\n';
            if (emptyFieldError) {errorMessages += emptyErrorMessage}
            if (nameError) {errorMessages += nameErrorMessage}
            if (numberError) {errorMessages += numberErrorMessage}
            alert(errorMessages);
        } else {
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
        }
    }

    validateWholeForm();
})


   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
        .then(function (result) {
            listedPlanets = result;
            //console.log(listedPlanets);
                
        }).then(function () {
            //console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let theChosenPlanet = pickPlanet(listedPlanets);
            console.log(theChosenPlanet);
            addDestinationInfo(document, theChosenPlanet.name, theChosenPlanet.diameter, theChosenPlanet.star, theChosenPlanet.distance, theChosenPlanet.moons, theChosenPlanet.image);
    })
});