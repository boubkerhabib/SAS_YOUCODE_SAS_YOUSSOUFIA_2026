//Challenge 4 : Ajout à la Fin (Simulation de push)
let prompt = require("prompt-sync")();
let ajouteNumber = Number(prompt("entrez le number : "));
let tab = [90,9,99,5,9];
function ajouterALaFin(tab,ajouteNumber){

    tab[tab.length] = ajouteNumber;

    return tab;

}
ajouterALaFin(tab,ajouteNumber);
console.log(tab);

