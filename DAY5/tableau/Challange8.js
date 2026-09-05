//Challenge 8 : Supprimer les Doublons Manuellement

let tab = [1, 2, 2, 3, 4, 4, 1];
let nouvTab = [tab[0]];

function supprimerDoublons(tab){
    for (let i = 1; i < tab.length; i++){
        let present = false;

        for (let t = 0; t < nouvTab.length; t++){
            if (tab[i] === nouvTab[t]){
                present = true;
                break; 
            }  
        }

        if (!present){
            nouvTab[nouvTab.length] = tab[i];
        }
    }
    return nouvTab
}

supprimerDoublons(tab);
console.log(nouvTab);

