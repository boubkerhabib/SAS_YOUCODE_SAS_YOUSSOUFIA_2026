// Challenge 4 : Salutation Personnalisée avec Valeur par Défaut

let prompt = require("prompt-sync")();
let message;
let nom = String(prompt("entrez votre nom : "));
let titre = String(prompt("entrez votre titre : "));

function saluerClient(nom, titre = "client") {
    message = "Bonjour " + titre + " " + nom;
    return message;
}

console.log(saluerClient(nom, titre));
if (titre === ""){
    console.log(saluerClient(nom));
}else{
    console.log(saluerClient(nom, titre));
}