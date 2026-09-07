// Challenge 10 : Saisie jusqu'à une valeur spéciale
let prompt = require("prompt-sync")();

let somme = 0;
let saisie;
let i = 1;

do {
    saisie = Number(prompt("Entrez un nombre (0 pour arrêter) : "));
    if (saisie !== 0) {

        somme += saisie;
        i++;
    }
} while (saisie !== 0);

console.log(`La somme totale est : ${somme} et nomber de Saisie ${i};`);