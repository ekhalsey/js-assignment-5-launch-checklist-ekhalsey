
// Write your JavaScript code here!
window.addEventListener("load", function() {


    // async function myFetch() {
    //     let planetsReturned;
    
    //     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    //         response.json().then((json) => {
    //             json;
    //         });
    //     });
    //     return planetsReturned;
    // }


let launchForm = document.getElementById("launchForm");
let pilotName = document.querySelector('input[name=pilotName]').value;
let copilotName = document.querySelector('input[name=copilotName]').value;
let fuelLevel = document.querySelector('input[name=fuelLevel').value;
let cargoMass = document.querySelector('input[name=cargoMass]').value;
let list = document.getElementById('faultyItems');

//console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass));


launchForm.addEventListener("submit", (event) => {
    pilotName = document.querySelector('input[name=pilotName]').value;
    copilotName = document.querySelector('input[name=copilotName]').value;
    fuelLevel = document.querySelector('input[name=fuelLevel').value;
    cargoMass = document.querySelector('input[name=cargoMass]').value;
    list = document.getElementById('faultyItems');
    let pass = true;

    let usingValidateInput = () => {
        if (validateInput(pilotName) === 'Empty' || validateInput(copilotName) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty') {
            pass = false;
            alert('All fields are required.');
            event.preventDefault();
        }
        
        if (validateInput(pilotName) === 'Is a number' || validateInput(copilotName) === 'Is a number') {
            pass = false;
            alert('Names cannot contain numbers');
            event.preventDefault();
        } 

        if (validateInput(fuelLevel) === 'Not a number' || validateInput(cargoMass) === 'Not a number') {
            pass = false;
            alert('Fuel Level and Cargo Mass must be numbers');
            event.preventDefault();
        }
        console.log(pass);
        if (pass = false) {
            event.preventDefault();
            usingValidateInput();
        } else {
            formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
            event.preventDefault();
        }
    }
    usingValidateInput();
})


 async function listedPlanetsFunction() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse
   .then(function (result) {
        listedPlanets = result;
        console.log('listedplanet response');
        console.log(listedPlanetsResponse);
        console.log(listedPlanets);
   }).then(function () {
            console.log('random string 2');
            console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
}
listedPlanetsFunction();
   
});


// let launchForm = document.getElementById("launchForm");
// let pilotName = document.getElementById('pilotName');
// let copilotName = document.querySelector('input[name=copilotName]');
// let fuelLevel = document.querySelector('input[name=fuelLevel');
// let cargoMass = document.querySelector('input[name=cargoMass]');

//console.log(validateInput('1234'));
//console.log(formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass));


//launchForm.addEventListener("submit", (event) => {

// let inputs = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
// console.log(inputs[0]);
//    let validatedResults = [];
//    let validatedItem = '';
//    for (let i = 0; i < inputs.length; i++) {
       
//        validatedItem = validateInput(inputs[i]);
//        validatedResults.push(validatedItem);
//    }
//    console.log(validatedResults);
//     if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
//         console.log('test');
//         alert("All fields are required!");
//         event.preventDefault();
//     }
// });

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

// let inpu
// let inputs = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
// console.log(inputs[0]);
//    let validatedResults = [];
//    let validatedItem = '';
//    for (let i = 0; i < inputs.length; i++) {
       
//        validatedItem = validateInput(inputs[i]);
//        validatedResults.push(validatedItem);
//    }
//    console.log(validatedResults);
    // if (pilotName === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
    //     console.log('test');
    //     alert("All fields are required!");
    //     event.preventDefault();
//     }
// });

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