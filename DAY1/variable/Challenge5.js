
// Challenge 4 : Calcul de consommation d'une voiture

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function consommation() {

    let dure = Number(
        await rl.question("entrez la dure de film : ")
    );
    if (dure < 60){
        console.log("court métrage:");

    }else if (x >= 60 || x < 120){
        console.log("Film standard:")
    }else if(x >= 120){
        console.log("Film long:");
    }

    console.log("Consommation : " + dure + " minutes");

    rl.close();
}

consommation();

