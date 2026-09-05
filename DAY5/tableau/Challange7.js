//Challenge 7 : Filtrage Manuel des Nombres Pairs
let tab = [3,100,6,17,22,7,8];
let pairsTab = [];

function filtrerPairs(){
    let count = 0;
    for (let i = 0;i < tab.length;i++){
        if (tab[i] % 2 === 0){
            count++;
            pairsTab[count] = tab[i];

        }

    }
    return pairsTab;

}
filtrerPairs(tab);
console.log(pairsTab);
