//Challenge 8 : Calcul de la puissance d'une batterie

const prompt = require("prompt-sync")();

let tension = Number(prompt("la tension U en volts : "));
let intensite = Number(prompt("L'intensité I en ampères : "));
let temps = Number(prompt("Le temps t en heures : "));
let energie = (tension+intensite+temps);
console.log("Tension : " + tension + " V");
console.log("Intensité :" + intensite + " A");
console.log("Temps :  " + temps + " heures");
console.log("Énergie : " + energie + " Wh");

