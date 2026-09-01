

// Challenge 2 : Conversion de monnaie

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("Entrez le montant en EUR : ")
    .then((montantEUR) => {

        montantEUR = Number(montantEUR);

        let montantMAD = montantEUR * 11;

        console.log("Le montant en MAD : " + montantMAD + " MAD");

        rl.close();
    });
