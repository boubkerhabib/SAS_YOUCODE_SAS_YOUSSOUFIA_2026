//Challenge 09 — Recherche avancée
let prompt = require("prompt-sync")();
let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];
do{
    console.log(`
            1 ==> Son id.
            2 ==> Son name.
            3 ==> Sa category.
            4 ==> Son prix maximum.

    `);
    input = Number(prompt("======>   "));
    switch(input){
        case 1: rechercherParId();
                break;
        case 2: rechercherParNom();
                break;
        case 3: rechercherParCategorie()
                break;
        case 4: rechercherParPrix()
                break;
        case 0: console.log("quitter le programme;");
                break;
        default : console.log("repiter!");
        if (input === 0){
            break;
        }

    }
    




} while(input === 0);
let n = products.length;
let i = 0;
function rechercherParId(){
    while (i < n;i++){
        
    }

}
function rechercherParNom(){
    
}
function rechercherParCategorie(){
    
}
function rechercherParPrix(){
    
}