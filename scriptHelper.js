// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
let input = testInput;
   if (input === '') {
        return "Empty";
   }
   else if (isNaN(input)) {
        return "Not a number";
   }
   else if (input === Number) {
        return "Is a number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let launchForm = document.getElementById("launchForm").value;

    // launchForm.addEventListener('submit', (event) => {
    //     if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    //         console.log('test');
    //         alert("All fields are required!");
    //         event.preventDefault();
    //     };
    // });
    
   
    let inputs = [pilot, copilot, fuelLevel, cargoLevel];
   let validatedResults = [];
   for (let i = 0; i < inputs.length; i++) {
       let validatedItem;
       validatedItem = validateInput(inputs[i]);
       validatedResults.push(validatedItem);
   }
   console.log(validatedResults);
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
