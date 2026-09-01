
// Challenge 4 : Calcul de consommation d'une voiture

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function consommation() {

    let distance = Number(
        await rl.question("Entrez la distance parcourue en km : ")
    );

    let carburant = Number(
        await rl.question("entrez la quantite de carburant consommee en litres : ")
    );

    let consommation = (carburant / distance) * 100;

    console.log("Consommation : " + consommation + " L/100 km");

    rl.close();
}

consommation();

