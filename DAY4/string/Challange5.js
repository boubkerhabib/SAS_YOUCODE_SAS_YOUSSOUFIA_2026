//Challenge 5 : Test de Palindrome;
let prompt = require("prompt-sync")();
let chaine = String(prompt("enter votre chaine :"));

function estPalindrome(chaine) {
    let inverse = "";
    let count = 0;

    for (let i = 0; chaine[i] !== undefined; i++) {
        count++;
    }

    for (let i = 0; i < count; i++) {
        inverse += chaine[count - 1 - i];
    }
    if (inverse === chaine){
        console.log("le chaine est palindrome : ");

    }else{
        console.log("le chaine n'est pas palindrome : ");

    }
}

estPalindrome(chaine);
