//Challenge 6 : Duplication de Chaîne (Simulation de repeat)
let prompt = require("prompt-sync")();
let chaine = String(prompt("enter votre chaine : "));
let num = Number(prompt("enter number de repetation : "));
let sommeChaine = "" ;
function repeterChaine(chaine,num){
    for (let i = 0;i < num;i++){
    sommeChaine += chaine;
    
    }
    console.log(sommeChaine);
}

repeterChaine(chaine,num);
