// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionTarget = document.getElementById("missionTarget");
    // Here is the HTML formatting for our mission target div.
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (String(testInput) ==""){
return "Empty";
    }
    else if(isNaN(testInput)==true){
        return "Not a Number";


    }
    else if(isNaN(testInput)==false){
return "Is a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    if (validateInput(pilot)=="Empty"){
        alert("Pilot name required");
        return false;
    }
    if (validateInput(copilot)=="Empty"){
        alert("Co-pilot name required");
        return false;
    }
    if (validateInput(fuelLevel)=="Empty"){
        alert("Fuel Level required");
        return false;
    }
    if (validateInput(cargoLevel)=="Empty"){
        alert("Cargo Level required");
        return false;
    }  
      
    if(validateInput(fuelLevel)=="Not a Number"){
        alert("Number required for fuelLevel");
        return false;
    }
    if(validateInput(cargoLevel)=="Not a Number"){
        alert("Number required for cargoLevel");
        return false;

    }
    
    let faultyitems = document.getElementById("faultyItems");
     
    let fuelStatus=document.getElementById("fuelStatus");
    let launchStatus=document.getElementById("launchStatus");
    let cargoStatus=document.getElementById("cargoStatus");
    let pilotStatus=document.getElementById("pilotStatus");
    let copilotStatus=document.getElementById("copilotStatus");
    pilotStatus.innerHTML="Pilot "+pilot+" is ready for launch";
    copilotStatus.innerHTML="Co-pilot "+copilot+" is ready for launch";

    let isFuelOK = "No";
    let isCargoOk = "No";
    

    if(fuelLevel<10000){
        console.log("Fuel level too low for launch");
        fuelStatus.innerHTML="Fuel level too low for launch";
        list.style.visibility = "visible"; 
        isFuelOK = "No";
    }
    else{
        console.log("Fuel level high enough for launch");
        fuelStatus.innerHTML="Fuel level high enough for launch";
        list.style.visibility = "visible"; 
        isFuelOK = "Yes";
    }

    if(cargoLevel>10000){
        cargoStatus.innerHTML="Cargo mass too heavy for launch";
        list.style.visibility = "visible"; 
        isCargoOk = "No";
    }
    else{
        cargoStatus.innerHTML="Cargo mass low enough for launch";
        list.style.visibility = "visible"; 
        isCargoOk = "Yes";

    }


    if(isFuelOK == "Yes" && isCargoOk == "Yes"){
        launchStatus.innerHTML="Shuttle is Ready for Launch";
        launchStatus.style.color="green";
    }
    else {
        launchStatus.innerHTML="Shuttle Not Ready for Launch";
        launchStatus.style.color="red";
    }


 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        // .then(function(json){
        //     planetsReturned = json; 
        // })
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomNum = Math.floor(Math.random() * planets.length);
return planets[randomNum];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;