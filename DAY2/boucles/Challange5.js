//Challenge 5 : Compter les multiples
let prompt = require("prompt-sync")();
let N = Number(prompt("entrez votre namber N : "));
let x = Number(prompt("entrez votre namber x : "));
for(let i=1 ; i <= N;i++){
    let m = i*x;
    console.log(m);
    if (m === N)
        break;


}
