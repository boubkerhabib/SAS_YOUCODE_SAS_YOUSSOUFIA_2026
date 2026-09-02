//Challenge 3 : Somme des nombres

let prompt = require("prompt-sync")();
let n = Number(prompt("entrez votre namber : "));
let somme = 0;
for(let i=1 ; i <= n;i++){
    
    somme += i;
}
console.log("somme : " + somme);
