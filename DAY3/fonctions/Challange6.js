//Challenge 6 : Validateur de Mot de Passe
let prompt = require("prompt-sync")();
let modPasse = prompt("entrez votre motde passe : ");
function verifierMotDePasse(motDePasse) {
    if (modPasse.length >= 8 && motDePasse.includes("@")) {
        return true;
    } else {
        return false;
    }
}

console.log(verifierMotDePasse(modPasse));

