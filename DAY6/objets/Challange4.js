//Challenge 04 — Calculateur de salaire
let prompt = require("prompt-sync")();
let employee = {
    firstName: "",
    lastName: "",
    salary: 0,
    bonus: 0,
    absenceDays: 0
};
employee.firstName = String(prompt("entrez prenom :"));
employee.lastName = String(prompt("entrez nom :"));
employee.salary = Number(prompt("entrez salary :"));
employee.bonus = Number(prompt("entrez bonus :"));
employee.absenceDays = Number(prompt("entrez jour absence :"));
let salaire = employee.salary + employee.bonus - (employee.absenceDays*200);
console.log(salaire);