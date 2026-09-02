
// Challenge 4 : Calcul de consommation d'une voiture
let prompt = require('prompt-sync')();

let dure = Number(prompt('entrez la dure de film : '));
if (dure < 60){
    console.log("court métrage");

}else if (dure >= 60 && dure < 120){
    console.log("Film standard");
}else if(dure >= 120){
    console.log("Film long");
}

console.log( "la dure est" + dure + " minutes:");



