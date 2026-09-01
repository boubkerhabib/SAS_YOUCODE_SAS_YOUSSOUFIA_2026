//Challenge 5 : Calcul de la mention de 2BAC
let prompt = require('prompt-sync')();
let national = Number(prompt('Nntional : '));
let rejional = Number(prompt('regional : '));
let controle = Number(prompt('la controle continu : '));
let note = (national*50 + rejional*25 + controle*25)/100;
console.log("la note Total : " + note);
if (note < 7 && note >= 0){
    console.log("Mention: non valide!");

}else if (note >=7 && note<10){
    console.log("Mention: ratrapage!");
}else if (note >=10 && note<12){
    console.log("Mention: passible!");
}else if (note >=12 && note<14){
    console.log("Mention: Assez bien!");
}else if (note >=14 && note<16){
    console.log("Mention: Bien!");
}else if (note >=16 && note<18){
    console.log("Mention: Tres bien!");
}else if (note >=18 && note<20){
    console.log("Mention: Excellent!");
}else {
    console.log("Mention : excellent !");
}





