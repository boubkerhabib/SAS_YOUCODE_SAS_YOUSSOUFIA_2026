let prompt = require("prompt-sync")();
let N = Number(prompt("entrez number d'article : "));

if (N === 0) {
    let total = 0;
    console.log(`le total est ${total}`);
} else if (N === 1) {
    let total = 125;
    console.log(`le total est ${total}`);
} else if (N > 1) {
    let prix = 125;
    let total = 125;

    for (let i = 2; i <= N; i++) {
        total += prix * (1 - 0.02 * (i - 1));
    }
    console.log(`le total est ${total}`);
} else {
    console.log("nombre invalide");
}