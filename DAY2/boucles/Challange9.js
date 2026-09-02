let prompt = require("prompt-sync")();
let debet = Number(prompt("entrez le debet : "));
let fin = Number(prompt("entrez la fin : "));
for (debet;debet <= fin;debet++){
    console.log(debet);
}