// Challenge 2 : Conversion de monnaie


let prompt = require('prompt-sync')();

let montantMAD = prompt('entrez votre montant en DH : ');
montantMAD = Number(montantMAD);
let montantEUR = montantMAD/11;
console.log("le montant en EUR: "+ montantEUR);

