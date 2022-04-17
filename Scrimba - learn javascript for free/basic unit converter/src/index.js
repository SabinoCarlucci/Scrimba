let valoreDaConv = 20;
let metersToFeet = (valoreDaConv * 3.28084).toFixed(3);
let feetToMeters = (valoreDaConv * 0.3048).toFixed(3);
let litersToGallons = (valoreDaConv * 0.2641722).toFixed(3);
let gallonsToLiters = (valoreDaConv * 3.785411784).toFixed(3);
let kilosToPounds = (valoreDaConv * 2.20462).toFixed(3);
let poundsToKilos = (valoreDaConv * 0.453592).toFixed(3);

document.getElementById("numero").innerHTML= valoreDaConv

document.getElementById("p1").innerHTML= valoreDaConv + " meters = " + metersToFeet + " feet | " + valoreDaConv + " feet = " + feetToMeters + " meters"

document.getElementById("p2").innerHTML= valoreDaConv + " liters = " + litersToGallons + " gallons | " + valoreDaConv + " gallons = " + gallonsToLiters + " liters"

document.getElementById("p3").innerHTML= valoreDaConv + " kilos = " + kilosToPounds + " pounds | " + valoreDaConv + " pounds = " + poundsToKilos + " kilos"