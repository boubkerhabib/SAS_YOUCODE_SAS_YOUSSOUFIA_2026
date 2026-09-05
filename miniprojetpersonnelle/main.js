//projet personnelle(system de faculte):

let prompt = require("prompt-sync")();
let students = [
  {
    name: "Ali",
    age: 18,
    notes: [15, 12, 18]
  },
  {
    name: "Sara",
    age: 17,
    notes: [10, 8, 14]
  },
  {
    name: "Youssef",
    age: 19,
    notes: [16, 14, 17]
  },
  {
    name: "Fatima",
    age: 18,
    notes: [9, 11, 8]
  },
  {
    name: "Omar",
    age: 20,
    notes: [13, 15, 14]
  },
  {
    name: "Amina",
    age: 17,
    notes: [18, 19, 17]
  },
  {
    name: "Mohamed",
    age: 21,
    notes: [7, 9, 8]
  },
  {
    name: "Khadija",
    age: 18,
    notes: [14, 16, 15]
  },
  {
    name: "Hamza",
    age: 19,
    notes: [11, 10, 12]
  },
  {
    name: "Salma",
    age: 17,
    notes: [17, 18, 16]
  },
  {
    name: "Adam",
    age: 20,
    notes: [8, 6, 9]
  },
  {
    name: "Meryem",
    age: 18,
    notes: [15, 17, 14]
  },
  {
    name: "Anas",
    age: 19,
    notes: [12, 13, 11]
  },
  {
    name: "Imane",
    age: 21,
    notes: [19, 18, 20]
  },
  {
    name: "Ayoub",
    age: 18,
    notes: [10, 9, 11]
  },
  {
    name: "Hajar",
    age: 17,
    notes: [16, 15, 18]
  },
  {
    name: "Zakaria",
    age: 22,
    notes: [6, 8, 7]
  },
  {
    name: "Nour",
    age: 19,
    notes: [14, 12, 16]
  },
  {
    name: "Rachid",
    age: 20,
    notes: [11, 14, 13]
  },
  {
    name: "Lina",
    age: 18,
    notes: [18, 17, 19]
  },
  {
    name: "Soufiane",
    age: 21,
    notes: [9, 7, 10]
  },
  {
    name: "Yasmine",
    age: 17,
    notes: [13, 15, 14]
  },
  {
    name: "Mehdi",
    age: 19,
    notes: [12, 8, 10]
  },
  {
    name: "Chaimae",
    age: 18,
    notes: [17, 16, 18]
  },
  {
    name: "Ismail",
    age: 20,
    notes: [5, 7, 6]
  }
];

// =============================
// GESTION DES ÉTUDIANTS
// =============================
function studentManagement() {
    while (true){

        console.log(`
    
                        ======================================
                                  GESTION DES ÉTUDIANTS
                        ======================================

                            1 ==> ajouter etudent
                            2 ==> afficher eutdent
                            3 ==> rechircher etudent
                            4 ==> modifer etudent
                            5 ==> suprimer etudent
                            0 ==> Quitter la page!

                         ======================================


        `);

        let choix = Number(prompt("======>  "));
        switch(choix){
            case 1 :addStudent();
                    break;

            case 2 :showStudents();
                    break;

            case 3 :searchStudentu();
                    break;

            case 4 :updateStudent();
                    break;

            case 5 :deleteStudent();
                    break;

            case 6 :showStatistics();
                    break;
        
            case 0 : console.log("quitter le system!");
                    break         
            default : console.log("invalid!");
            
        } 
        if (choix === 0){
            break
        }
    }

}
//=============================


function addStudent(){

}

function showStudents(){

}

function searchStudent() {

}

function updateStudent() {

}

function deleteStudent() {

}







// =============================
// GESTION DES NOTES
// =============================

function calculateAverage() {

}



// =============================
// RÉSULTATS
// =============================

function showResults() {

}

// =============================
// CLASSEMENT
// =============================

function showRanking() {

}

// =============================
// STATISTIQUES
// =============================

function showStatistics() {

}

while (true){

    console.log(`
    
                        ======================================
                            STUDENT MANAGEMENT SYSTEM
                        ======================================

                            1 ==> Gestion des étudiants
                            2 ==> Gestion des notes
                            3 ==> Afficher les résultats
                            4 ==> Afficher le classement
                            5 ==> Afficher les statistiques
                            0 ==> Quitter!

                         ======================================


        `);

    let choix = Number(prompt("======>  "));
    switch(choix){
        case 1 : studentManagement();
                 break;

        case 2 : calculateAverage();
                 break;

        case 3 : showResults();
                 break;

        case 4 : showRanking();
                 break;

        case 5 : showStatistics();
                 break;
      
        case 0 : console.log("quitter!");
                 break         
        default : console.log("invalid!");
        
    } 
    if (choix === 0){
        break
    }
}