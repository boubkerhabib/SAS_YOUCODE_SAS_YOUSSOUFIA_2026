//Challenge 3 : Inverseur de Chaîne
let prompt = require("prompt-sync")();
let chaine = String(prompt("enter votre chaine :"));

function inverserChaine(chaine) {
    let inverse = "";
    let count = 0;

    for (let i = 0; chaine[i] !== undefined; i++) {
        count++;
    }

    for (let i = 0; i < count; i++) {
        inverse += chaine[count - 1 - i];
    }

    console.log(inverse);
}

inverserChaine(chaine);