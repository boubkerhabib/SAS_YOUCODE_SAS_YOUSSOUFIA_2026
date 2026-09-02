//Challenge 6 : Calcul du score d'un examen
let prompt = require('prompt-sync')();

let partie1 = Number(prompt('entrez la partie 1 de score : '));
let partie2 = Number(prompt('entrez la partie 2 de score : '));
let partie3 = Number(prompt('entrez la partie 3 de score : '));
let partie4 = Number(prompt('entrez la partie 4 de score : '));
let total = (partie1+partie2+partie3+partie4);
let moyan = total/4;
console.log("le total : " + total);
console.log("le moyan : " + moyan);