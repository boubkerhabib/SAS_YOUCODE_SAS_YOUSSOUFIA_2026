//Challenge 9 : Trouver une puissance

let prompt = require("prompt-sync")();
let base = Number(prompt("entrez la base : "));
let exposant = Number(prompt("entrez l'exposant : "));
let result = 1;
let i = 1;

while (i <= exposant){
    result *= base;
    i++;
  
}
console.log(result);
