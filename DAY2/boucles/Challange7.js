//Challenge 7 : Trouver le premier nombre supérieur
let prompt = require("prompt-sync")();
let N = Number(prompt("result : "));

while(N*N <= 100){
    N++;  

}
console.log("Resultat : " + N);
console.log(N + " × " + N + " = " + (N * N));