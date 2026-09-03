//projet personnelle(system de faculte):
 
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
    console.log("entrez les information : ");
    choixNomberEtdudant = Number(prompt("entrez la nomber des eduants : "));
    for (let i = 0; i < choixNomberEtdudant;i++){
        name[i] = prompt("Entrer le nom d'etudiant : ");
        prenom[i] = prompt("Entrer le nom prenom : ");
        age[i] = prompt("Entrer l'age : ");
        sexe[i] = prompt("Entrer le sexe : ");
        adress[i] = prompt("Entrer le nom adress : ");
        phone[i] = prompt("Entrer votre phone : ");
        email[i] = prompt("Entrer votre email : ");
        CIN[i] = prompt("Entrer le CIN : ");
        CNE[i] = prompt("Entrer le CNE : ");
        faculte[i] = prompt("Entrer le nom faculte : ");
        filiere[i] = prompt("Entrer le nom de filiere : ");
    }

    
    

    
}
 


while (true){
    console.log("1 ==> ajouter etudant:");
    console.log("2 ==> afficher etudant:");
    console.log("3 ==> rechercher etudant:");
    console.log("4 ==> votre wifi");
    console.log("5 ==> twjih :");
    console.log("6 ==> vaconces :");
    console.log("7 ==> statique")
    console.log("0 ==> quitter!");
    let choix = Number(prompt("======>  "));
    switch(choix){
        case 1 : console.log("1");
                 ajoute(choix);
                 break;
        case 2 : console.log("2");
                 ajoute(choix);
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