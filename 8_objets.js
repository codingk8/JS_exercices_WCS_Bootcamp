/* Exercice 8.1
Créer un JSON avec 2 élèves :
prénom : Han / nom : Solo
prénom : Chew / nom : Bacca
Afficher cet objet en console. 
Dans ce cas, le JSON est un tableau qui regroupe 2 objets 

Rqs : [ crochets = tableau, liste | { accolades = objet, JSON */

let el = [{
  "prénom": "Han",
   "nom": "Solo"
 }, {
  "prénom": "Chew",
  "nom": "Bacca"
 }];

console.log(el);


/* Exercice 8.2
Créer un JSON avec 2 tableaux de JSON à l’intérieur :
prof :
prénom : Chew / nom : Bacca
prénom : Han / nom : Solo
élève :
prénom : Marty / nom : McFly
prénom : Doc / nom : Brown
Ressortir cet objet en console.
Dans ce cas, le JSON est un objet qui contient 2 objets qui chacun contiennent un tableau avec 2 objets à l'intérieur */

let ec = {
  "prof": [{
    "prénom": "Chew",
    "nom": "Bacca"
   }, {
    "prénom": "Han",
    "nom": "Solo"
  }],
  "élèves": [{
    "prénom": "Marty",
    "nom": "McFly"
   }, {
    "prénom": "Doc",
    "nom": "Brown"
  }]
};

console.log(ec);
  

/* Exercice 8.3
Avec le JSON fait dans l’exercice précédent, affichez en console le nom de Marty. */

console.log(ec.élèves[0].prénom);
console.log(ec['élèves'][0]['prénom']);


/* Exercice 8.4
Nous avons un JSON au format texte ; affichez en console la valeur du prénom. 
RQ : HTTP renvoit des Strings à transformer en JSON pour pouvoir les exploiter */

let text = '{"name" : "Dupont", "first_name" : "Jean"}';

let user = JSON.parse(text);

console.log(text);
console.log(typeof text);

console.log(user);
console.log(typeof user);

console.log(user['first_name']);
console.log(user.first_name);


/* Exercice 8.5
Nous avons le JSON suivant :
const number = {"random" : "1"};
Nous voulons qu’il nous ressorte un nombre aléatoire. 
Placez une fonction pour qu’en faisant number.random(); elle affiche un nombre aléatoire en console. 
On met une fonction dans un objet */

const number = {"random" : function() {
  return Math.random() * 111;
  }
};
console.log(number.random());


// That's all folks!
