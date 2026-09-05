//Challenge 6 : Inversion Manuelle (Simulation de reverse)
let prompt = require("prompt-sync")();
let tab = [4,9,8,65,16];
let invtab = [];
function inverserTableau(tab){
    for (let i = 0;i < tab.length;i++){
        invtab[i] = tab[tab.length-1-i];

    }


    return invtab;
    
}
/*
inverserTableau(tab);
console.log(invtab);

let tab = [1,3,11,0,8];
let debut = 0;
let fin = tab.length-1;
let val;
while (debut < fin){
    val = tab[debut];
    tab[debut] = tab[fin];
    tab[fin] = val;
    debut++;
    fin--;


}
console.log(tab);
"""
*/