//la moyan note d'ecole
const students = [
  {
    name: "Emma Johnson",
    notes: [88, 92, 85, 90, 95]
  },
  {
    name: "Liam Smith",
    notes: [75, 80, 78, 82, 79]
  },
  {
    name: "Sophia Garcia",
    notes: [95, 98, 92, 96, 99]
  },
  {
    name: "Noah Williams",
    notes: [60, 65, 70, 68, 62]
  },
  {
    name: "Olivia Brown",
    notes: [89, 85, 91, 88, 90]
  }
];
function fontNote(students){
    let sommeNote = 0;
    let result = 0;
    for (let i = 0;i < students.length;i++){
        for (let j = 0;j < students.length;j++){
            sommeNote += students[i].notes[j];
            
            

        }
       result = sommeNote / students[i].notes.length;
      
    }
    let totalNote = result/students.length;
    return totalNote;
}
let x = fontNote(students);
console.log(x);