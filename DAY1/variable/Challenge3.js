//Challenge 3 : Conversion de stockage

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("Entrez Stockage : ")
    .then((Gigaoctets) => {

        Gigaoctets = Number(Gigaoctets);

        let Megaoctets = Gigaoctets * 1024;

        console.log("Résultat :  " + Megaoctets + " MB");

        rl.close();
    });
