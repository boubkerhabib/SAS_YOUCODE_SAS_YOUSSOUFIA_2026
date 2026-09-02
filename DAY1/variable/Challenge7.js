//Challenge 7 : Calcul de la note finale

let prompt = require('prompt-sync')();

let noteCC = Number(prompt('Contrôle continu : '));
let noteProjet = Number(prompt('Projet : '));
let noteExamen = Number(prompt('Examen final : '));
let noteFinal = (noteCC*2+noteExamen*3+noteProjet*5)/10;
console.log("Note finale : " + noteFinal);