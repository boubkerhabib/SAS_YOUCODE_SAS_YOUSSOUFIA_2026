//Challenge 05 — Gestion d'un compte bancaire
let prompt = require("prompt-sync")();
let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};

function afficher(){
    for (key in account){
        console.log(` ${key} : ${account[key]}`);
        

    }
}
function deposer(){
    let deposer = Number(prompt("entrez salir :"));
    if (deposer > 0){

        account.balance += deposer;
        console.log(`voila il y deposer ${deposer} et solir est ${account.balance}:`);

        
    }else {
        console.log("pardon! utiliser votre salir:");
    }

}
function retirer(){
    let retirer = Number(prompt("entrez retirer :"));
    if (account.balance > 0 && account.balance - retirer > 0){
        account.balance -= retirer;
        console.log(`voila il y retirer ${retirer} et solir est ${account.balance}:`);
       
    }else {
        console.log("pardon! utiliser votre retirer:");
    }

}
function inpho(){
    console.log(`
    l'affiche par (nom et salir et type);
        1 ==> nom :
        2 ==> salir :
        3 ==> type :

    `)
    let chaix = Number(prompt("=========>  "));
    switch (chaix){
        case 1:console.log(`nom est ${account.owner}:`);
               break;
        case 2:console.log(`salir est ${account.balance}:`);
               break;
        case 3:console.log(`type est ${account.type}:`);
               break;
        default:console.log(`erroures!`);
               break;
    }
    

}
function quitter(){
    console.log("quitter!");

}

while (true){
    console.log(`
        1 ==> Afficher le solde.
        2 ==> Déposer de l'argent.
        3 ==> Retirer de l'argent.
        4 ==> Afficher les informations du compte.
        0 ==> quitter le programme.

    `);
    let input = Number(prompt("=========> "));
    switch (input){
        case 1 : afficher();
                 break;
        case 2 : deposer();
                 break;
        case 3 : retirer();
                 break;
        case 4 : inpho();
                 break;
        case 0 : console.log("quitter! la programme:");
                 break;
        default :console.log(`eroures!`);
        break;

    }
    if (input === 0){
        break;
    }
}