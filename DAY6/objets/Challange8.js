let prompt = require("prompt-sync")();

let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];





do{
    console.log(`
        1 ==> Afficher chaque étudiant
        2 ==> Afficher les notes
        3 ==> Afficher Admis / Non admis
        4 ==> Compter les étudiants admis
        5 ==> Compter les étudiants non admis
        0 ==> Quitter
    `);
    let input = Number(prompt("======>  "));
    switch(input){
        case 1 : afficheNome();
                 break;
        case 2 : afficheNote;
                 break;
        case 3 : afficheIsAdmis();
                 break;

        case 4 : afficheAdmis();
                 break;
        case 5 : afficheNonAdmis();
                 break;
        default :console.log("changer number!");
                 break;
    }





}while (input === 0);

function afficheNome(){
    for (let i = 0;i < students.length;i++){
        console.log(`
            ${students[i].name}
            `);
    }

}

function afficheNote(){
    for (let i = 0;i < students.length;i++){
        console.log(`
            ${students[i].name} ==> ${students[i].note}:
        `);
    }

}

function afficheIsAdmis(){
    for (let i = 0;i < students.length;i++){
        if (10 <= students[i].note){
            console.log(`
                ${students[i].name} ==> Admis;
            
            `);

        }else{
            console.log(`
                ${students[i].name} ==> Non admis;
            
            `);

        }
        
    }

}

function afficheAdmis(){
    let j
    for (let i = 0;i < students.length;i++){
        if (10 <= students[i].note){
            j++;
            console.log(`
                ${j} ==> Admis;
            
            `);

        }
    }
}

function afficheNonAdmis(){
        let j
    for (let i = 0;i < students.length;i++){
        if (10 > students[i].note){
            j++;
            console.log(`
                ${j} ==> Non Admis;
            
            `);

        }
    }

}