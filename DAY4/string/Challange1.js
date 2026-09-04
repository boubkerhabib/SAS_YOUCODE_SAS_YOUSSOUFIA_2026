//Challenge 1 : Compteur de Caractères
let prompt = require("prompt-sync")();
let totalMot = String(prompt("enter votre chaine :"));
let count = 0;

function compterCaracteres(totalMot){
    
    for (let i = 0;totalMot[i] !== undefined;i++){
        count++;
    }
    console.log(count);
}
compterCaracteres(totalMot);
