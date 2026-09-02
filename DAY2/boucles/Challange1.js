//Challenge 1 : Compter les participants
let prompt = require("prompt-sync")();
let n = Number(prompt("entrez votre namber : "));
for(let i=1 ; i <= n;i++){
    console.log("participant : " + i);
}