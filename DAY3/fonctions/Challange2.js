//Challenge 2 : Calculateur d'Âge Canin
let prompt = require("prompt-sync")();
let result;
let age = prompt("Entrez votre age : ");
function ageFon(age){
    return age*7;
}

result = ageFon(age);
console.log(result);