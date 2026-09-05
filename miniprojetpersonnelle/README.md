📘 Cahier des charges — Student Management System
1. Présentation du projet
Nom du projet

Student Management System

Description

Le projet consiste à développer une application en JavaScript permettant de gérer les informations des étudiants d'une classe.

L'application fonctionnera dans la console JavaScript et permettra d'ajouter, rechercher, modifier et supprimer des étudiants, ainsi que de gérer leurs notes et d'afficher différentes statistiques.

2. Objectif du projet

L'objectif principal est de créer un système permettant de faciliter la gestion des étudiants.

L'application devra permettre de :

Gérer les informations des étudiants.
Gérer les notes.
Calculer les moyennes.
Afficher les résultats.
Classer les étudiants.
Rechercher et filtrer des étudiants.
Afficher des statistiques.
3. Technologies utilisées

Le projet sera développé avec :

JavaScript
Console du navigateur ou Node.js
Concepts JavaScript utilisés

Le projet doit utiliser les concepts suivants :

Variables
Conditions (if / else)
Boucles (for, while)
Fonctions
Strings
Arrays
Objects
4. Structure des données

Chaque étudiant sera représenté par un objet.

{
    id: 1,
    name: "Ali",
    age: 18,
    notes: [15, 12, 18]
}

Tous les étudiants seront stockés dans un tableau :

let students = [
    {
        id: 1,
        name: "Ali",
        age: 18,
        notes: [15, 12, 18]
    },
    {
        id: 2,
        name: "Sara",
        age: 17,
        notes: [10, 8, 14]
    }
];
5. Fonctionnalités du projet
👤 Module 1 : Gestion des étudiants

L'application doit permettre :

1. Ajouter un étudiant

L'utilisateur doit pouvoir ajouter :

ID
Nom
Âge
Notes

Exemple :

Nom : Ahmed
Age : 19
Notes : 15, 12, 18
2. Afficher tous les étudiants

Afficher les informations de tous les étudiants :

ID : 1
Nom : Ali
Age : 18
Notes : 15, 12, 18
3. Rechercher un étudiant

La recherche peut être effectuée par :

ID
Nom
4. Modifier un étudiant

Permettre de modifier :

Le nom
L'âge
Les notes
5. Supprimer un étudiant

L'utilisateur peut supprimer un étudiant à partir de son ID.

6. Module 2 : Gestion des notes

Le système doit permettre :

➕ Ajouter une note

Ajouter une nouvelle note à un étudiant.

✏️ Modifier une note

Modifier une note existante.

🗑️ Supprimer une note

Supprimer une note spécifique.

🧮 Calculer la somme des notes

Exemple :

15 + 12 + 18 = 45
📊 Calculer la moyenne

Formule :

Somme des notes / Nombre des notes
7. Module 3 : Gestion des résultats

L'application doit déterminer si un étudiant est :

✅ Admis

Si sa moyenne est supérieure ou égale à :

10
❌ Non admis

Si sa moyenne est inférieure à :

10
8. Module 4 : Classement

Le système doit permettre d'afficher :

🥇 Le meilleur étudiant.

📉 L'étudiant ayant la plus faible moyenne.

📊 La liste des étudiants classés selon leur moyenne.

Exemple :

1. Ali — Moyenne : 16
2. Sara — Moyenne : 14
3. Ahmed — Moyenne : 12
9. Module 5 : Recherche et filtrage

L'utilisateur peut rechercher des étudiants selon :

🔍 Le nom

Exemple :

Recherche : Ali
🎂 L'âge

Exemple :

Afficher les étudiants de 18 ans
📈 La moyenne

Exemple :

Afficher les étudiants ayant une moyenne supérieure à 15
👨‍🎓 Étudiants majeurs

Afficher les étudiants ayant :

âge >= 18
🧒 Étudiants mineurs

Afficher les étudiants ayant :

âge < 18
10. Module 6 : Statistiques

Le système doit afficher :

Nombre total d'étudiants.
Nombre d'étudiants admis.
Nombre d'étudiants non admis.
Pourcentage de réussite.
Pourcentage d'échec.
Moyenne générale de la classe.
Meilleure moyenne.
Plus mauvaise moyenne.
11. Menu principal

L'application doit posséder un menu principal.

======================================
       STUDENT MANAGEMENT SYSTEM
======================================

1. Gestion des étudiants
2. Gestion des notes
3. Rechercher un étudiant
4. Afficher les résultats
5. Afficher le classement
6. Afficher les statistiques

0. Quitter

Choisissez une option :
12. Organisation des fonctions

Chaque fonctionnalité doit être séparée dans une fonction.

Exemple :

function addStudent() {
}

function showStudents() {
}

function searchStudent() {
}

function updateStudent() {
}

function deleteStudent() {
}

function calculateAverage() {
}

function showRanking() {
}

function showStatistics() {
}
13. Contraintes du projet

Le projet doit respecter les règles suivantes :

Utiliser uniquement les concepts déjà appris autant que possible.
Organiser le code avec des fonctions.
Utiliser des noms de variables clairs.
Ajouter des commentaires.
Vérifier les erreurs utilisateur.
Éviter la répétition du code.
Utiliser des boucles pour parcourir les étudiants.
Utiliser des conditions pour gérer les différents cas.
14. Exemple de scénario
Bienvenue dans Student Management System

1. Ajouter un étudiant

Nom : Ali
Age : 18
Notes : 15, 18, 12

Étudiant ajouté avec succès !

Puis :

Nombre total des étudiants : 10

Étudiants admis : 8
Étudiants non admis : 2

Taux de réussite : 80%
🚀 Bonus (niveau supérieur)

Quand تسالي المشروع الأساسي، زيد هاد الميزات:

💾 Sauvegarder les étudiants dans localStorage.
🔐 Ajouter un système Login.
📁 Exporter les données.
🌐 Ajouter une interface HTML/CSS.
🌓 Dark Mode.
🔔 Messages de confirmation.
📊 Dashboard avec statistiques.
🔎 Recherche instantanée.