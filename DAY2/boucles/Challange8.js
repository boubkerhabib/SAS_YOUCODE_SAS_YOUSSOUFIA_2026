//Challenge 8 : Accumulation de points

let prompt = require("prompt-sync")();
let nombre = Number(prompt("Nombre de missions : "));

let score = 0;
let mission = 1;
while ( mission <= nombre) {
    
    score += 100;
    console.log(`Mission ${mission} → Score : ${score}`);
    mission++;
}