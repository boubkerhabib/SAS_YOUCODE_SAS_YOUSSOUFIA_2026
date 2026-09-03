//Challenge 13 : Vérifier si un nombre est premier
let prompt = require("prompt-sync")();
let PN = Number(prompt("le nomber : "));
let count = 0;
for(let i = 2; i <= PN-1;i++){
    if(PN % i === 0){
        count++;
        
    }

}
if (count === 0 && PN > 1){
    console.log("le nomber " + PN +" est premier: ");
}else if (count > 0 && PN === 1){
    console.log("le nomber " + PN +" est pas de  premier: ");

}

