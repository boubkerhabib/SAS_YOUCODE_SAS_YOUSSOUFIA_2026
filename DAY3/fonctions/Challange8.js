//Niveau Avancé / Expert (8 à 10)

let prompt = require("prompt-sync")();

let montant = Number(prompt("Entrez le montant : "));
let taux = Number(prompt("Entrez le taux : "));


function formatMAD(val) {
    return val + " DH";
}

function convMontant(montant, taux, formatter) {
    let resultat = montant * taux;
    return formatter(resultat);
}


let resultat = convMontant(montant, taux, formatMAD);

console.log("Resultat : ", resultat);
