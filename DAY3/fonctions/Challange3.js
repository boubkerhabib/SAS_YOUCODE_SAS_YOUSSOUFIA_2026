//Challenge 3 : Générateur d'Email Professionnel
let prompt = require("prompt-sync")();
let nom = String(prompt("entrez votre nom : "));
let prenom = String(prompt("entrez votre prenom : "));
let votreEmail;
function myEmail(nom, prenom){
    votreEmail = nom + prenom + "@entreprise.com";
    return votreEmail;
}
myEmail(nom,prenom);
console.log(votreEmail);
