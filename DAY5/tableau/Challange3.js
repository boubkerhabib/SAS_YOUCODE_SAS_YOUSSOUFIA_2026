//Challenge 3 : Recherche du Maximum

let tab = [11,3,8,33,0,77,9];
let max = 0;
function trouverMax(tab){
  max = tab[0];
  for (let i = 0;i < tab.length;i++){


    if (tab[i] > max){
      max = tab[i];
    }


  }
  return max



}
trouverMax(tab);
console.log(`le max de tableau est ${max} :`);
