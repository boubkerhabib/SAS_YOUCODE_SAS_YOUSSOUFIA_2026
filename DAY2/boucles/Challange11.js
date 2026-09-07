//Challenge 11 : Factorielle
let prompt = require("prompt-sync")();
let N = Number(prompt("entrez votre N : "));
let factor = 1;

for(let i=1 ; i <= N;i++){
    factor *= i;

   
}
console.log(`${N}! = ${factor}:`);
