// Challenge 4 : Livraison gratuite

let prompt = require('prompt-sync')();

let montant = prompt('Montant de la commande : ');

montant = Number(montant);

if (montant >= 500) {

    console.log("Livraison : Gratuite\nTotal à payer : " + montant + " DH");

} else if (montant < 500) {

    console.log("Livraison : 40 DH\nTotal à payer : " + (montant + 40) + " DH");

}