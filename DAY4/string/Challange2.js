//Challenge 2 : Compteur d'Occurrences d'un Caractère
let prompt = require("prompt-sync")();
let searchMot = String(prompt("enter votre chaine :"));
let lettre = String(prompt("enter votre lettre :"));
let count = 0;

function compterCaracteresLittre(totalMot, lettre){
    
    for (let i = 0;totalMot[i] !== undefined;i++){
        if (searchMot[i] === lettre){
            count++;

        }
        
        

    }
    console.log(count);


}
compterCaracteresLittre(searchMot, lettre);