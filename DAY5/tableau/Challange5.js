//Challenge 5 : Recherche d'Élément (Simulation de includes)
let prompt = require("prompt-sync")();
let nonTrouver = false;


let elementsTab = ["pomme", "banane","citron","pastic"];
let element = String(prompt("entrez votre element : "));
function contientElement(elementsTab,element){


    for (let i = 0;i < elementsTab.length;i++){
        if (elementsTab[i] === element){
            nonTrouver = true;
            break;

        }
    }

    return nonTrouver;

}
contientElement(elementsTab,element)
console.log(nonTrouver);
