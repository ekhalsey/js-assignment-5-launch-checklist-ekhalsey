// Write your helper functions here!
// require('isomorphic-fetch');
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

let validateInput = (testInput) => {
    if (testInput === '') {
        return "Empty";
    }
    else if (!isNaN(testInput)) {
        return "Is a number";
    }
    else {
        return "Not a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const h2 = document.getElementById('launchStatus');
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    if (fuelLevel < 10000 || cargoLevel > 10000) {
        list.style.visibility = 'visible';
        h2.innerHTML = 'Shuttle not ready for launch';
        h2.style.color = 'red';
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
        if(fuelLevel < 10000) {fuelStatus.innerHTML = 'Fuel Level too low'};
        if(cargoLevel > 10000) {cargoStatus.innerHTML = 'Too much cargo!'};
    } else {
        h2.innerHTML = 'Shuttle is ready for launch';
        h2.style.color = 'green';
        list.style.visibility = 'hidden';
    }
}

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
//         response.json().then((json) => {
//             console.log(json);
//         });
//     });

//     return planetsReturned;
// }
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    .then((response) => response.json())
    .then((planetArray) => {
        console.log('in myFetch');
        console.log(planetArray);
        planetsReturned = planetArray;
    });

    //     function(response) {
    //     response.json()
    //     .then( (json) => {
    //         const array = json.value;
    //         console.log(array);
    //         return array;
    //     });
    // });
    return planetsReturned;
}

function pickPlanet(planets) {
}

