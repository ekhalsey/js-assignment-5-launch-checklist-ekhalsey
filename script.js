// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
    

let launchForm = document.getElementById("launchForm");
let pilotName = document.getElementById('pilotName');
let copilotName = document.querySelector('input[name=copilotName]');
let fuelLevel = document.querySelector('input[name=fuelLevel');
let cargoMass = document.querySelector('input[name=cargoMass]');

console.log(validateInput('1234'));
//console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass));


launchForm.addEventListener("submit", (event) => {

// let inputs = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
// console.log(inputs[0]);
//    let validatedResults = [];
//    let validatedItem = '';
//    for (let i = 0; i < inputs.length; i++) {
       
//        validatedItem = validateInput(inputs[i]);
//        validatedResults.push(validatedItem);
//    }
//    console.log(validatedResults);
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        console.log('test');
        alert("All fields are required!");
        event.preventDefault();
    }
});

/* working all fields required bit if you take out the import
let launchForm = document.getElementById("launchForm");
let pilotName = document.getElementById('pilotName');
let copilotName = document.querySelector('input[name=copilotName]');
let fuelLevel = document.querySelector('input[name=fuelLevel');
let cargoMass = document.querySelector('input[name=cargoMass]');


console.log(validateInput('1234'));
//console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass));


launchForm.addEventListener("submit", (event) => {
    if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        console.log('test');
        alert("All fields are required!");
        event.preventDefault();
    }
});
*/


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});