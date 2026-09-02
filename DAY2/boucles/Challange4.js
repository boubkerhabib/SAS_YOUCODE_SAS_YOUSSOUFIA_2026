//Challenge 4 : Table de multiplication
let prompt = require("prompt-sync")();
let n = Number(prompt("entrez votre namber : "));

for(let i=1 ; i <= n;i++){

    console.log("result : "+ n + "*" + i + " = " + i * n);
}
