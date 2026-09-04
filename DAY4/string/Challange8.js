//Challenge 8 : Extraction Manuelle de Sous-chaîne (Simulation de slice)
let prompt = require("prompt-sync")();
let part = "";

let chaine = String(prompt("entrez en phrase : ")); 
let debut = Number(prompt("entrez en phrase : ")); 
let fin = Number(prompt("entrez en phrase : ")); 
function extraireChaine(chaine){
    for (let i = debut-1;i < fin - 1 && i < chaine.length;i++){
        part += chaine[i];

    }

}
extraireChaine(chaine);
console.log(part);




