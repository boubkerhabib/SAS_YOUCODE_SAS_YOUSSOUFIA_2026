//Challenge 4 : Compteur de Voyelles
let prompt = require("prompt-sync")();
let chaine = String(prompt("enter votre chaine :"));

function compterVoyelles(chaine) {
    let count = 0;

    for (let i = 0; chaine[i] !== undefined; i++) {
        if (
            chaine[i] === "a" || 
            chaine[i] === "e" || 
            chaine[i] === "i" || 
            chaine[i] === "o" || 
            chaine[i] === "u" || 
            chaine[i] === "y"
                                ){
            count++;

        }
        
    }

    

    console.log(count);
}

compterVoyelles(chaine);