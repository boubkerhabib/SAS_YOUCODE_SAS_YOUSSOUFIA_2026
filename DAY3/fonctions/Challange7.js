//Challenge 7 : Horloge / Horodatage Système
function timeNew() {
    let maintenant = new Date();

    let heure = maintenant.getHours();
    let minute = maintenant.getMinutes();
    let seconde = maintenant.getSeconds();

    return heure + ":" + minute + ":" + seconde;
}

console.log(timeNew());
