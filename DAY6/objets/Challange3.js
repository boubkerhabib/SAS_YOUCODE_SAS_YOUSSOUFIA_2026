//Challenge 03 — Produit
let prompt = require("prompt-sync")();
let total = 0;
let pruduit = {
    nom : " " ,
    price : 0 ,
    category : " ",
    quantity : 0,
    available : true 

}
pruduit.nom = String(prompt("entrez nom de pruduit :"));
pruduit.price = Number(prompt("entrez price de pruduit :"));
pruduit.category = String(prompt("entrez category de pruduit :"));
pruduit.quantity = Number(prompt("entrez quantity de pruduit :"));
pruduit.available = Boolean(prompt("entrez available de pruduit :"));
total = pruduit.price*pruduit.quantity;
console.log(`
    le nom ${pruduit.nom}:
    le prix ${pruduit.price}:
    la catigory ${pruduit.category}:

`)
if (pruduit.available === true){
    console.log(`le pruduit est disponible :`);

}else {
    console.log(`le pruduit ne est pas disponible:`);
}
console.log(`${total} DH:`);