//Challenge 3 : Conversion de stockage
let prompt = require('prompt-sync')();

let Gigaoctets = prompt('entrez votre stockage par GB : ');
Gigaoctets = Number(Gigaoctets);

let Megaoctets = Gigaoctets*1024;
console.log("Resultat : "+ Megaoctets +" MB");
