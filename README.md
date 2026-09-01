# SAS_YOUCODE_SAS_YOUSSOUFIA_2026
# Challenges JavaScript — Problem Solving

> **Règle générale :** Les fonctions prédéfinies de JavaScript sont interdites.
>
> L'objectif est de résoudre les problèmes avec les variables, les types, les opérateurs et les conditions.

## Fonctions interdites

```javascript
Math.sqrt()
Math.pow()
Math.PI
parseInt()
parseFloat()
Number()
String()
.toString()
```

---

## Exercices sur les Variables et les Opérateurs

### Challenge 1 : Profil d'un joueur

Vous développez un petit système pour un jeu vidéo.

Créez un programme qui stocke dans des variables les informations d'un joueur :

* Pseudo
* Niveau
* Âge
* Score
* Pays

Puis affichez toutes les informations dans la console.

**Exemple :**

```text
Pseudo : ShadowX
Niveau : 12
Âge : 21
Score : 4580
Pays : Maroc
```

---

### Challenge 2 : Conversion de monnaie

Vous développez une application permettant à un voyageur de convertir son budget.

L'utilisateur possède un montant en **dirhams marocains (MAD)**.

Convertissez ce montant en **euros (EUR)**.

Pour cet exercice, utilisez le taux fictif :

```text
1 EUR = 11 MAD
```

**Formule :**

```text
EUR = MAD / 11
```

**Exemple :**

```text
Budget en MAD : 2200

Budget en EUR : 200
```

---

### Challenge 3 : Conversion de stockage

Un utilisateur souhaite connaître l'espace disponible sur son ordinateur.

Il possède une capacité exprimée en **Gigaoctets (GB)**.

Convertissez cette capacité en **Mégaoctets (MB)**.

Utilisez :

```text
1 GB = 1024 MB
```

**Formule :**

```text
MB = GB * 1024
```

**Exemple :**

```text
Stockage : 10 GB

Résultat : 10240 MB
```

---

### Challenge 4 : Calcul de consommation d'une voiture

Vous développez une application pour calculer la consommation d'une voiture.

L'utilisateur fournit :

* La distance parcourue en kilomètres
* La quantité de carburant consommée en litres

Calculez la consommation moyenne en **litres / 100 km**.

**Formule :**

```text
Consommation = (litres / kilomètres) * 100
```

**Exemple :**

```text
Distance : 500 km
Carburant : 35 litres

Consommation : 7 L/100 km
```

---

### Challenge 5 : Catégorie d'un film

Une plateforme de streaming souhaite classer automatiquement les films selon leur durée.

L'utilisateur fournit la durée du film en minutes.

Déterminez la catégorie :

* Moins de 60 minutes → `Court métrage`
* De 60 à 120 minutes → `Film standard`
* Plus de 120 minutes → `Film long`

**Exemple :**

```text
Durée : 95 minutes

Catégorie : Film standard
```

---

### Challenge 6 : Calcul du score d'un examen

Un apprenant passe un examen composé de quatre parties.

Chaque partie donne un score différent.

L'utilisateur fournit :

```text
Score partie 1
Score partie 2
Score partie 3
Score partie 4
```

Calculez :

* Le score total
* Le score moyen

**Exemple :**

```text
Partie 1 : 15
Partie 2 : 12
Partie 3 : 18
Partie 4 : 15

Score total : 60
Moyenne : 15
```

---

### Challenge 7 : Calcul de la note finale

Un apprenant est évalué selon trois éléments :

* Contrôle continu : coefficient `2`
* Projet : coefficient `3`
* Examen final : coefficient `5`

Écrivez un programme qui calcule la note finale pondérée.

**Formule :**

```text
Note finale =
(noteCC * 2 + noteProjet * 3 + noteExamen * 5) / 10
```

**Exemple :**

```text
Contrôle continu : 14
Projet : 16
Examen : 12

Note finale : 13.8
```

---

### Challenge 8 : Calcul de la puissance d'une batterie

Une application mobile doit calculer l'énergie théorique d'une batterie.

L'utilisateur fournit :

* La tension `U` en volts
* L'intensité `I` en ampères
* Le temps `t` en heures

Calculez l'énergie consommée.

**Formule :**

```text
Énergie = U * I * t
```

**Exemple :**

```text
Tension : 12 V
Intensité : 2 A
Temps : 3 heures

Énergie : 72 Wh
```

---

### Challenge 9 : Distance parcourue par un drone

Un drone se déplace entre deux positions dans un espace 3D.

La première position est :

```text
A(x1, y1, z1)
```

La deuxième position est :

```text
B(x2, y2, z2)
```

Calculez la distance parcourue par le drone.

**Formule :**

```text
Distance = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
```

**Exemple :**

```text
Position A : (1, 2, 3)
Position B : (4, 6, 3)

Distance : 5
```

> `Math.sqrt()` et `Math.pow()` sont interdits.

---

### Challenge 10 : Calcul de la capacité d'un réservoir cylindrique

Un système industriel possède un réservoir cylindrique.

L'utilisateur fournit :

* Le rayon du réservoir
* La hauteur du réservoir

Calculez son volume.

**Formule :**

```text
Volume = π * r² * h
```

Utilisez :

```text
π = 3.14159
```

**Exemple :**

```text
Rayon : 2 m
Hauteur : 5 m

Volume : 62.8318 m³
```

> `Math.PI` et `Math.pow()` sont interdits.

---

### Challenge 11 : Calcul de la surface d'une pièce

Vous développez une application destinée aux architectes.

Une pièce possède une forme rectangulaire.

L'utilisateur fournit :

* Longueur
* Largeur

Calculez :

* La surface
* Le périmètre

**Formules :**

```text
Surface = longueur * largeur
```

```text
Périmètre = 2 * (longueur + largeur)
```

**Exemple :**

```text
Longueur : 6 m
Largeur : 4 m

Surface : 24 m²
Périmètre : 20 m
```

---

### Challenge 12 : Lire les chiffres d'un code PIN

Un système de sécurité utilise un code composé de quatre chiffres.

L'utilisateur saisit un nombre à quatre chiffres.

Votre programme doit afficher chaque chiffre séparément.

**Exemple :**

```text
Code : 5832

Premier chiffre : 5
Deuxième chiffre : 8
Troisième chiffre : 3
Quatrième chiffre : 2
```

**Contrainte :**

* Pas de boucle
* Pas de conversion en chaîne de caractères
* Utiliser les opérateurs `/` et `%`

---

### Challenge 13 : Calculer le montant en binaire

Un système informatique stocke certaines valeurs sous forme binaire.

L'utilisateur fournit un nombre entier compris entre `0` et `255`.

Écrivez un programme qui affiche sa représentation binaire.

**Exemple :**

```text
Nombre : 13

Binaire : 1101
```

**Autres exemples :**

```text
Nombre : 7

Binaire : 111
```

```text
Nombre : 16

Binaire : 10000
```

**Contrainte :**

La méthode suivante est interdite :

```javascript
nombre.toString(2)
```

La conversion doit être réalisée manuellement.

---

## Challenges supplémentaires

### Challenge 14 : Échange de deux scores

Deux joueurs possèdent chacun un score.

```text
Joueur A : 1500
Joueur B : 2300
```

Écrivez un programme permettant d'échanger leurs scores.

Après l'échange :

```text
Joueur A : 2300
Joueur B : 1500
```

**Contrainte :**

Utiliser une troisième variable.

**Bonus :**

Réaliser l'échange sans troisième variable.

---

### Challenge 15 : Ticket de cinéma

Un cinéma souhaite automatiser le calcul du prix d'une réservation.

L'utilisateur fournit :

* Prix d'un billet
* Nombre de billets
* Prix d'une boisson
* Nombre de boissons

Calculez le montant total.

**Formule :**

```text
Total billets = prix billet * nombre billets
```

```text
Total boissons = prix boisson * nombre boissons
```

```text
Total = total billets + total boissons
```

**Exemple :**

```text
Prix billet : 50 DH
Nombre de billets : 3

Prix boisson : 15 DH
Nombre de boissons : 3

Total : 195 DH
```

---

### Challenge 16 : Convertisseur de durée

Une application de streaming reçoit une durée exprimée en secondes.

Transformez cette durée en :

* Heures
* Minutes
* Secondes

**Exemple :**

```text
Durée : 7384 secondes

Heures : 2
Minutes : 3
Secondes : 4
```

**Indice :**

Utilisez :

```text
/
%
```

---

### Challenge 17 : Calcul des points d'un joueur

Dans un jeu, un joueur gagne :

* `100` points par ennemi éliminé
* `50` points par mission terminée
* `200` points pour chaque boss vaincu

L'utilisateur fournit :

* Nombre d'ennemis éliminés
* Nombre de missions terminées
* Nombre de boss vaincus

Calculez le score total.

**Formule :**

```text
Score =
ennemis * 100
+ missions * 50
+ boss * 200
```

**Exemple :**

```text
Ennemis : 10
Missions : 5
Boss : 2

Score total : 2500
```

---

### Challenge 18 : Informations sur un produit

Un magasin possède un produit avec :

```javascript
let nom = "Clavier";
let prix = 350;
let disponible = true;
let stock = 12;
```

Affichez le type de chaque variable avec `typeof`.

**Exemple :**

```text
nom → string
prix → number
disponible → boolean
stock → number
```

Ajoutez également une variable contenant `null` et observez son type.

---

### Challenge 19 : Réduction sur un produit

Un magasin propose une réduction sur ses produits.

L'utilisateur fournit :

* Le prix initial
* Le pourcentage de réduction

Calculez :

* Le montant de la réduction
* Le prix final

**Formules :**

```text
Réduction = prix * pourcentage / 100
```

```text
Prix final = prix - réduction
```

**Exemple :**

```text
Prix : 800 DH
Réduction : 25%

Montant de la réduction : 200 DH
Prix final : 600 DH
```

---

### Challenge 20 : Vérification d'un numéro de casier

Dans une salle de sport, chaque casier possède un numéro.

Écrivez un programme qui reçoit le numéro d'un casier et détermine s'il est :

* `Pair` → Casier côté A
* `Impair` → Casier côté B

**Exemple :**

```text
Numéro du casier : 24

Casier côté A
```

```text
Numéro du casier : 17

Casier côté B
```

**Contrainte :**

Utiliser l'opérateur `%`.

---

# Règles générales

Pour tous les challenges :

## Interdit

* `Math.sqrt()`
* `Math.pow()`
* `Math.PI`
* `parseInt()`
* `parseFloat()`
* `Number()`
* `String()`
* `.toString()`
* Fonctions personnalisées
* Bibliothèques externes

## Autorisé

* `let`
* `const`
* Variables
* Types primitifs
* `typeof`
* `console.log()`
* Opérateurs arithmétiques
* Opérateurs d'affectation
* Opérateurs de comparaison
* Opérateurs logiques
* `if / else`
* `/`
* `%`

# Objectif pédagogique

Ces challenges ont pour objectif de développer :

* Le raisonnement logique
* La décomposition d'un problème
* La manipulation des variables
* La compréhension des types
* La maîtrise des opérateurs
* La capacité à traduire une formule en code
* La résolution de problèmes sans dépendre des fonctions prédéfinies

> **Principe :** comprendre le problème → identifier les données → trouver la formule ou la logique → écrire l'algorithme → traduire en JavaScript.




JavaScript — Challenges Conditions
Règles générales
Pour tous les challenges :

Pas de Math.*
Pas de parseInt()
Pas de parseFloat()
Pas de Number()
Pas de String()
Pas de fonctions personnalisées
Pas de bibliothèques externes
Variables
let / const
Opérateurs arithmétiques
Opérateurs de comparaison
Opérateurs logiques
if / else
switch / case
console.log()
Important : dans les challenges if / else, utilisez if / else pour les décisions. Dans les challenges switch / case, utilisez principalement switch / case.

Niveau Moyen
Partie 1 — if / else
Challenge 1 : Tarif de livraison
Une boutique en ligne calcule les frais de livraison selon le montant de la commande.

Règles :

Montant < 100 DH → livraison 30 DH
Montant entre 100 DH et 299 DH → livraison 20 DH
Montant entre 300 DH et 499 DH → livraison 10 DH
Montant >= 500 DH → livraison gratuite
Afficher :

Montant commande :
Frais livraison :
Total à payer :
Exemple :

Montant commande : 350 DH
Frais livraison : 10 DH
Total à payer : 360 DH
Challenge 2 : Feu tricolore
Un système de circulation reçoit une couleur de feu :

rouge
orange
vert
Le programme doit afficher l'action du conducteur.

Règles :

rouge  → Arrêtez-vous
orange → Ralentissez
vert   → Vous pouvez passer
Si la couleur est inconnue :

Couleur invalide
Challenge 3 : Calcul d'une remise
Un magasin applique une réduction selon le montant d'achat.

Règles :

< 500 DH → aucune réduction
500 - 999 DH → 5%
1000 - 1999 DH → 10%
= 2000 DH → 15%

Calculez :

Montant initial
Réduction
Prix final
Exemple :

Montant : 1500 DH
Réduction : 150 DH
Total : 1350 DH
Challenge 4 : Validation d'un triangle
L'utilisateur fournit trois longueurs :

a
b
c
Déterminez si elles peuvent former un triangle.

Règle :

a + b > c
a + c > b
b + c > a
Si les trois conditions sont vraies :

Triangle valide
Sinon :

Triangle invalide
Bonus :

Si le triangle est valide, déterminer s'il est :

Équilatéral
Isocèle
Scalène
Challenge 5 : Système de classement
Dans un jeu vidéo, un joueur reçoit un rang selon son score.

Règles :

Score < 1000 → Bronze
1000 - 1999 → Argent
2000 - 2999 → Or
3000 - 4999 → Diamant
= 5000 → Légende

Afficher le rang correspondant.

Bonus :

Afficher également le nombre de points nécessaires pour atteindre le rang suivant.

Partie 2 — switch / case
Challenge 6 : Mois de l'année
L'utilisateur saisit un numéro de mois.

1  → Janvier
2  → Février
3  → Mars
...
12 → Décembre
Utilisez switch / case pour afficher le nom du mois.

Bonus :

Afficher également le nombre de jours du mois.

Challenge 7 : Type de compte bancaire
Une banque utilise les codes suivants :

1 → Compte courant
2 → Compte épargne
3 → Compte étudiant
4 → Compte professionnel
Le programme reçoit le code et affiche le type de compte.

Bonus :

Afficher les frais mensuels :

Courant       → 20 DH
Épargne       → 10 DH
Étudiant      → 0 DH
Professionnel → 50 DH
Challenge 8 : Niveau de difficulté d'un jeu
Un jeu propose quatre niveaux :

1 → Facile
2 → Normal
3 → Difficile
4 → Extrême
Utilisez switch / case pour afficher :

Le niveau
Le nombre d'ennemis
Le nombre de points gagnés par ennemi
Exemple :

Choix : 3

Niveau : Difficile
Ennemis : 50
Points par ennemi : 30
Challenge 9 : Type de billet
Une salle de spectacle propose plusieurs types de billets :

1 → Standard
2 → VIP
3 → Premium
4 → Enfant
Utilisez switch / case pour déterminer le prix.

Standard → 80 DH
VIP      → 200 DH
Premium  → 350 DH
Enfant   → 40 DH
Demandez également la quantité et calculez le total.

Challenge 10 : Convertisseur d'unités
Une application permet de choisir une conversion :

1 → Km vers mètres
2 → Mètres vers cm
3 → Kg vers grammes
4 → Litres vers millilitres
Utilisez switch / case.

Exemple :

Choix : 1
Valeur : 5

Résultat : 5000 mètres
Niveau Avancé
Partie 1 — if / else
Challenge 11 : Analyse d'une date
L'utilisateur fournit :

jour
mois
année
Déterminez si la date est valide.

Exemples :

25 / 12 / 2026 → Date valide
31 / 02 / 2026 → Date invalide
Gérez également les années bissextiles.

Règle :

Une année est bissextile si :

année divisible par 400
OU
année divisible par 4 ET non divisible par 100
Challenge 12 : Calcul progressif d'un salaire
Une entreprise calcule une prime selon l'ancienneté et le salaire.

Règles :

Ancienneté
< 1 an → 0%
1 à 3 ans → 5%
4 à 7 ans → 10%
7 ans → 15%

Bonus supplémentaire
Si le salaire est inférieur à 6000 DH :

+ 2%
Sinon :

+ 0%
Calculez la prime et le salaire final.

Challenge 13 : Système de réservation
Un hôtel possède trois types de chambres :

Standard
Deluxe
Suite
Le prix dépend :

du type de chambre
du nombre de nuits
de la saison
Saison haute :

+ 30%
Saison normale :

prix normal
Bonus :

Si le client réserve plus de 7 nuits :

- 10%
Calculez le prix final.

Challenge 14 : Admission universitaire
Une université accepte un candidat selon plusieurs critères :

Note générale >= 12
Note en mathématiques >= 10
Note en informatique >= 12
Mais certaines formations ont des exigences supplémentaires.

Déterminez si le candidat est :

Admis
Admis sous condition
Refusé
Vous devez combiner plusieurs conditions avec :

&&
||
!
Challenge 15 : Système de parking
Un parking calcule le prix selon la durée.

Tarification :

1ère heure  → 5 DH
2ème heure  → 3 DH
3ème heure  → 3 DH
Chaque heure supplémentaire → 2 DH
Le programme reçoit le nombre d'heures.

Calculez le prix total.

Bonus :

Ajouter une réduction de 20% pour les clients possédant une carte membre.

Partie 2 — switch / case
Challenge 16 : Menu de restaurant
Un restaurant propose :

1 → Pizza
2 → Burger
3 → Tacos
4 → Salade
5 → Pasta
Utilisez switch / case pour déterminer le prix.

Ajoutez ensuite :

quantité
total
réduction éventuelle
Règle de réduction :

Si le total dépasse 300 DH, appliquer 10%.

Challenge 17 : Opérations mathématiques
Créez une calculatrice avec :

+ 
-
*
/
%
L'utilisateur fournit :

nombre1
opérateur
nombre2
Utilisez switch / case.

Exemple :

Nombre 1 : 25
Opérateur : %
Nombre 2 : 7

Résultat : 4
Gérer la division par zéro.

Challenge 18 : Code de pays
Une application reçoit un code :

MA → Maroc
FR → France
ES → Espagne
US → États-Unis
CA → Canada
JP → Japon
BR → Brésil
Utilisez switch / case pour afficher :

Le pays
La devise
Exemple :

Code : MA

Pays : Maroc
Devise : Dirham marocain
Challenge 19 : Système de transport
Une entreprise de transport propose :

1 → Petit trajet
2 → Trajet moyen
3 → Long trajet
4 → Trajet international
Utilisez switch / case pour déterminer le prix de base.

Ensuite, selon le nombre de passagers, calculez le prix total.

Tarifs :

Petit trajet        → 20 DH
Trajet moyen        → 50 DH
Long trajet         → 100 DH
International       → 500 DH
Bonus :

À partir de 5 passagers, appliquer 15% de réduction.

Challenge 20 : Gestion des commandes
Une entreprise utilise des codes de statut :

1 → Commande reçue
2 → En préparation
3 → Expédiée
4 → En livraison
5 → Livrée
6 → Annulée
Utilisez switch / case.

Pour chaque statut, afficher un message différent.

Exemple :

Code : 4

Statut : En livraison
Message : Votre commande est actuellement en route.
Bonus :

Afficher si l'utilisateur peut encore annuler sa commande.

Niveau HÉRO
Ces challenges demandent plusieurs étapes de raisonnement et la combinaison de plusieurs conditions.

Partie 1 — if / else
Challenge 21 : Système bancaire intelligent
Vous développez un système de retrait bancaire.

L'utilisateur fournit :

Solde disponible
Montant à retirer
Carte active ou non
Code PIN correct ou non
Le retrait est autorisé uniquement si :

Carte active
ET
PIN correct
ET
Montant > 0
ET
Montant <= solde
Ajoutez les règles suivantes :

Retrait maximum : 5000 DH
Si le montant est supérieur à 3000 DH, afficher un avertissement.
Si le solde après retrait est inférieur à 100 DH, afficher une alerte.
Le programme doit afficher un message précis pour chaque situation.

Challenge 22 : Système de réservation de vol
Un utilisateur souhaite réserver un vol.

Il fournit :

Âge
Classe : économique / business
Nombre de bagages
Prix du billet
Statut membre
Règles bagages
Économique :

1 bagage gratuit
Chaque bagage supplémentaire → 150 DH
Business :

2 bagages gratuits
Chaque bagage supplémentaire → 100 DH
Réduction membre
Membre Gold → 20%
Membre Silver → 10%
Pas membre → 0%
Calculez le prix final.

Ajoutez une règle :

Si âge < 12 ans → réduction supplémentaire de 50% sur le billet.
Challenge 23 : Évaluation d'un mot de passe
Un utilisateur saisit les caractéristiques d'un mot de passe :

Nombre de caractères
Nombre de chiffres
Nombre de caractères spéciaux
Présence de lettres majuscules
Déterminez sa sécurité.

Règles :

Faible
moins de 8 caractères
Moyen
au moins 8 caractères
ET
au moins 1 chiffre
Fort
au moins 12 caractères
ET
au moins 2 chiffres
ET
au moins 1 caractère spécial
ET
au moins 1 majuscule
Sinon :

Mot de passe moyen
Challenge 24 : Système de notation d'un jeu
Un joueur possède :

Score
Nombre de victoires
Nombre de défaites
Nombre de matchs joués
Calculez son taux de victoire :

Taux = victoires / matchs * 100
Déterminez son niveau :

Score >= 5000 ET taux >= 80% → Légende

Score >= 3000 ET taux >= 65% → Diamant

Score >= 1500 ET taux >= 50% → Or

Score >= 500 → Argent

Sinon → Bronze
Gérez également le cas où le joueur n'a joué aucun match.

Challenge 25 : Feu intelligent
Vous développez un système de contrôle d'un feu de circulation.

Le programme reçoit :

Couleur actuelle
Présence de piétons
Présence d'une ambulance
Heure
Nombre de voitures en attente
Le système doit déterminer l'action.

Règles prioritaires
1. Ambulance présente

→ Donner immédiatement la priorité
2. Piétons présents

Si le feu est rouge :

→ Autoriser les piétons
3. Beaucoup de voitures

Si plus de 20 voitures attendent :

→ Prolonger le feu vert
4. Nuit

Entre 00:00 et 05:00 :

→ Mode nuit
Le programme doit déterminer le comportement final du système.

Partie 2 — switch / case
Challenge 26 : Système de paiement
Un site e-commerce propose plusieurs moyens de paiement :

1 → Carte bancaire
2 → PayPal
3 → Virement bancaire
4 → Paiement à la livraison
5 → Carte cadeau
Utilisez switch / case.

Chaque moyen de paiement possède des règles différentes.

Carte bancaire
Frais = 2%
PayPal
Frais = 3%
Virement
Frais = 0%
Paiement à la livraison
Frais = 20 DH
Carte cadeau
Aucun frais
Calculez le montant final.

Challenge 27 : Système de support technique
Un utilisateur choisit un type de problème :

1 → Connexion
2 → Mot de passe
3 → Paiement
4 → Compte bloqué
5 → Problème technique
6 → Autre
Utilisez switch / case.

Pour chaque catégorie, afficher :

Département responsable
Niveau de priorité
Délai estimé
Exemple :

Choix : 4

Département : Sécurité
Priorité : Haute
Délai estimé : 30 minutes
Challenge 28 : Système de réservation de voyage
Une agence propose plusieurs destinations :

1 → Marrakech
2 → Paris
3 → Madrid
4 → Tokyo
5 → New York
Utilisez switch / case.

Pour chaque destination, définir :

Prix du billet
Durée du vol
Classe disponible
Ensuite, demander :

Nombre de voyageurs
Classe choisie
Nombre de bagages
Calculez le prix final.

Challenge 29 : Gestion d'un abonnement
Une plateforme propose :

1 → Gratuit
2 → Basic
3 → Premium
4 → Business
Utilisez switch / case.

Gratuit
Prix : 0 DH
Utilisateurs : 1
Stockage : 1 GB
Basic
Prix : 50 DH
Utilisateurs : 3
Stockage : 10 GB
Premium
Prix : 120 DH
Utilisateurs : 5
Stockage : 50 GB
Business
Prix : 300 DH
Utilisateurs : 20
Stockage : 200 GB
Le programme doit afficher les informations de l'abonnement choisi.

Bonus :

Ajouter un calcul annuel :

Prix annuel = prix mensuel * 12
avec une réduction de 15% pour le paiement annuel.

Challenge 30 : Terminal de voyage
Vous développez un terminal permettant à un voyageur de choisir une destination.

Menu principal
1 → Maroc
2 → Europe
3 → Asie
4 → Amérique
Utilisez switch / case.

Selon le choix, afficher un deuxième menu.

Maroc
1 → Marrakech
2 → Casablanca
3 → Agadir
Europe
1 → Paris
2 → Madrid
3 → Rome
Asie
1 → Tokyo
2 → Bangkok
3 → Séoul
Amérique
1 → New York
2 → Montréal
3 → São Paulo
Le programme doit afficher :

Continent :
Destination :
Prix :
Durée :
Exemple :

Choix continent : 2

Choix destination : 1

Continent : Europe
Destination : Paris
Prix : 1200 DH
Durée : 3h
Bonus HÉRO :

Ajouter :

Classe économique / business
Nombre de voyageurs
Nombre de bagages
Réduction famille
Réduction membre
Frais de bagages
Prix total
Tableau de progression
#	Challenge	Condition	Niveau
1	Tarif de livraison	if / else	Moyen
2	Feu tricolore	if / else	Moyen
3	Calcul d'une remise	if / else	Moyen
4	Validation d'un triangle	if / else	Moyen
5	Classement joueur	if / else	Moyen
6	Mois de l'année	switch	Moyen
7	Compte bancaire	switch	Moyen
8	Difficulté jeu	switch	Moyen
9	Billet spectacle	switch	Moyen
10	Conversion unités	switch	Moyen
11	Validation date	if / else	Avancé
12	Salaire progressif	if / else	Avancé
13	Réservation hôtel	if / else	Avancé
14	Admission universitaire	if / else	Avancé
15	Parking	if / else	Avancé
16	Restaurant	switch	Avancé
17	Calculatrice	switch	Avancé
18	Codes pays	switch	Avancé
19	Transport	switch	Avancé
20	Commandes	switch	Avancé
21	Système bancaire	if / else	Héro
22	Réservation vol	if / else	Héro
23	Mot de passe	if / else	Héro
24	Score jeu	if / else	Héro
25	Feu intelligent	if / else	Héro
26	Paiement	switch	Héro
27	Support technique	switch	Héro
28	Voyage	switch	Héro
29	Abonnement	switch	Héro
30	Terminal voyage	switch	Héro
Objectif pédagogique
À travers ces 30 challenges, l'apprenant doit progressivement passer de simples décisions à des problèmes comportant plusieurs règles métier.

Moyen
L'apprenant doit maîtriser :

if
else if
else
switch
case
default
Avancé
L'apprenant doit être capable de combiner :

conditions
+
opérateurs logiques
+
calculs
+
plusieurs règles métier
Héro
L'apprenant doit être capable de :

Analyser le problème
        ↓
Identifier les règles
        ↓
Décomposer le problème
        ↓
Construire les conditions
        ↓
Choisir if/else ou switch
        ↓
Écrire le programme
        ↓
Tester plusieurs scénarios
Méthode recommandée : avant d'écrire une seule ligne de JavaScript, l'apprenant doit d'abord écrire les différentes règles du problème sous forme de pseudo-code.