//Challenge 1 : Vérifier l'âge
let prompt = require('prompt-sync')();
let age = prompt('entrez votre age : ');
n = Number(age);
if (age >= 18){
    console.log("Accès autorisé");
}else if (age < 18){
    console.log("Accès refusé");

}
