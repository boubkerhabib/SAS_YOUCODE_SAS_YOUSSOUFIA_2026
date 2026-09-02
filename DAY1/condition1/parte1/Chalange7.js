//Challenge 7 : Jour de la semaine

let prompt = require("prompt-sync")();
let jour = Number(prompt("entrez votre choix:  "));
console.log("1 ===> Lundi");
console.log("2 ===> Mardi");
console.log("3 ===> Mercredi");
console.log("4 ===> Jeudi");
console.log("4 ===> Vendredi");
console.log("4 ===> Samedi");
console.log("4 ===> Dimanche");



switch(jour){
    case 1 :
        console.log("Lundi");        
        break;
    case 2 :
        console.log("Mardi");        
        break;
    case 3 :
        console.log("Mercredi");        
        break;
    case 4 :
        console.log("Jeudi");        
        break;
    case 5 :
        console.log("Vendredi");        
        break;
    case 6 :
        console.log("Samedi");        
        break;
    case 7 :
        console.log("Dimanche");        
        break;
    default:
        console.log("voir le menu!");       

}