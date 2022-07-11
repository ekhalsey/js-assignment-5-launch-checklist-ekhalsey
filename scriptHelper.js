// Write your helper functions here!
// require('isomorphic-fetch');
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
    `
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

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];}

