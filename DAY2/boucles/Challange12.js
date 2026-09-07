//Challenge 12 : Compter les diviseurs
let prompt = require("prompt-sync")();
let nombre = Number(prompt("entrez votre namber : "));
let divi = 0;

for(let i=1 ; i <= nombre;i++){
    if (nombre % i === 0){
        divi++;
        console.log(`${divi} ==> ${i} ;`);
    }
    
}