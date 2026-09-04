//Challenge 7 : Remplacement Manuel d'un Caractère
let prompt = require("prompt-sync")();
let result = "";
let chaine = String(prompt("entrez un chaine de caractere : "));
let rempaceChaine = String(prompt("entrez un littre qui changer : "));
let nouvChaine = String(prompt("entrez un litter qui replacer : "));
function remplacerCaractere(chaine , rempaceChaine , nouvChaine){
    console.log(chaine.length);
    for (let i = 0;i < chaine.length;i++){
        if (chaine[i] === rempaceChaine){
            result[i] += nouvChaine;


        }else {

            result[i] += chaine[i];


        }
    }

    return result;
}



remplacerCaractere(chaine , rempaceChaine , nouvChaine);
console.log(result);


