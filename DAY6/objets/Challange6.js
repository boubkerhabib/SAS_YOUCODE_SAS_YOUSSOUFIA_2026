let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];

console.log("=== Tous les etudiants ===");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


console.log("\n=== Prenoms ===");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName);
}


console.log("\n=== ages ===");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].age);
}

console.log("\n=== Phrases ===");
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log(student.firstName + " a " + student.age + " ans et habite à " + student.city + ".");
}