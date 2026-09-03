let prompt = require("prompt-sync")();

let name = [];
let prenom = [];
let age = [];
let sexe = [];
let adress = [];
let phone = [];
let email = [];
let CIN = [];
let CNE = [];
let faculte = [];
let filiere = [];

function ajoute(){
    console.log("entrez votre information : ");
    for (let i = 0; i < 1;i++){
        name[i] = prompt("Entrer le nom d'etudiant : ");
        prenom[i] = prompt("Entrer le nom prenom : ");
        age[i] = prompt("Entrer le nom d'etudiant : ");
        sexe[i] = prompt("Entrer le nom d'etudiant : ");
        adress[i] = prompt("Entrer le nom d'etudiant : ");
        phone[i] = prompt("Entrer le nom d'etudiant : ");
        email[i] = prompt("Entrer le nom d'etudiant : ");
        CIN[i] = prompt("Entrer le nom d'etudiant : ");
        CNE[i] = prompt("Entrer le nom d'etudiant : ");
        faculte[i] = prompt("Entrer le nom d'etudiant : ");
        filiere[i] = prompt("Entrer le nom d'etudiant : ");
    }

    
}
 


while (true){
    console.log("1 ==> ajouter etudant:");
    console.log("2 ==> afficher etudant:");
    console.log("3 ==> rechercher etudant:");
    console.log("4 ==> statique etudant:");
    console.log("5 ==> votre wifi");
    console.log("6 ==> twjih :");
    console.log("7 ==> vaconces :");
    console.log("0 ==> quitter!");
    let choix = Number(prompt("======>  "));
    switch(choix){
        case 1 : console.log("1");
                 ajoute();
                 break;
        case 2 : console.log("2");
                 break;
        case 3 : console.log("3");
                 break;
        case 4 : console.log("4");
                 break;
        case 5 : console.log("5");
                 break;
        case 6 : console.log("6");
                 break;
        case 7 : console.log("7");
                 break;
        case 0 : console.log("bslama");
                    break
                 
                 
        default : console.log("erroures!");
        
                 
                

    } 
    if (choix === 0){
        break
    }
}
