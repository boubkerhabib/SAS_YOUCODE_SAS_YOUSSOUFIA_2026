//Challenge 3 : Vérification d'une note

let prompt = require('prompt-sync')();
let ad = prompt('entrez votre note : ');
ad = Number(ad);


if (ad  >= 10 && ad <= 20){
    console.log("Résultat: admis:");
}else if (ad < 10 && ad >= 0){
    console.log("Résultat: non admis");
}