
// Challenge 4 : Calcul de consommation d'une voiture

let prompt = require('prompt-sync')();

let distance = Number(prompt('Entrez la distance parcourue en km : '));

let carburant = Number(prompt('entrez la quantite de carburant consommee en litres : '));

let consommation = (carburant / distance)*100;

console.log("Consommation : " + consommation + " L/100 km");