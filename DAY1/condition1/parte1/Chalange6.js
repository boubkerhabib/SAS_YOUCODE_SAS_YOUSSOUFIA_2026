//Challenge 6 : Menu d'une application
let prompt = require("prompt-sync")();
let choix = Number(prompt("entrez votre choix:  "));
console.log("1 ===> Afficher le profil");
console.log("2 ===> Afficher les paramètres");
console.log("3 ===> Afficher les notifications");
console.log("4 ===> Se déconnecter");


switch(choix){
    case 1 :
        console.log("votre profil");        
        break;
    case 2 :
        console.log("paramètre");        
        break;
    case 3 :
        console.log("notifications");        
        break;
    case 4 :
        console.log("Se déconnecter");        
        break;
    default:
        console.log("voir le menu!");       

}