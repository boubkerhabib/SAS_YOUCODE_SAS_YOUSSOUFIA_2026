//Challenge 9 : Suppression des Espaces Extérieurs (Simulation de trim)
let prompt = require("prompt-sync")();
let chaine = String(prompt("entrez une chaine avec des espaces : "));


function Espaces(chaine) {
    let debut = 0;
    let fin = chaine.length ;


    let result = "";
    for (let i = debut; i < fin; i++) {
        if (chaine[i] === " "){
            continue;

        }else{
            result += chaine[i];

        }
        
    }

    return result;
}
Espaces(chaine);

console.log(result);