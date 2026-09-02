//Challenge 2 : Afficher les nombres pairs

let prompt = require("prompt-sync")();
let n = Number(prompt("entrez votre namber : "));
for(let i=1 ; i <= n;i++){
    if (i % 2 === 0)
        console.log("participant : " + i);
}