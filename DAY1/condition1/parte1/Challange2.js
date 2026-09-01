//Challenge 2 : Positif, négatif ou zéro
let prompt = require('prompt-sync')();
let num = prompt('entrez votre namber : ');
num = Number(num);


if (num  > 0){
    console.log("number est positif:");
}else if (num < 0){
    console.log("number est negatif:")
}else{
    console.log("number est zero:")
}

