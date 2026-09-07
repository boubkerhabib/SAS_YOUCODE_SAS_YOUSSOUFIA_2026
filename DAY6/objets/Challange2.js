//Challenge 02 — Modifier un profil
let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};
console.log(`
    user name = ${user.username}:
    user age = ${user.age}:

`);
user.age = 25;
user.city = "youssoufia";
user.status = "teacher";
user.email =  "${user.username}${user.age}@gmail.com";
console.log(`
    username = ${user.username}:
    age = ${user.age}:
    city = ${user.city}:
    status = ${user.status}:
    email = ${user.email}:

    `);