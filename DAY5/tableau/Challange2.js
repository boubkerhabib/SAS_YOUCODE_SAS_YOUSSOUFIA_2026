// Challenge 2 : Calculateur de Somme
let tab = [3,2,8,9,12]; 
let somme = 0;
function calculerSomme(tab){
  for (let i = 0;i < tab.length;i++){
    somme += tab[i];

  }

  console.log(somme);

  
}

calculerSomme(tab);

