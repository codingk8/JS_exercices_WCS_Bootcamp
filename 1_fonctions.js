/* Exercice 1.1
Faire une fonction show qui affichera en console le texte passé en paramètre.
Exemple : show('coucou'); */

function show(param) {
  console.log(param);
}
show("Coucou !");


/* Exercice 1.2
Nous voulons stocker notre fonction faite dans l’exercice précédent dans une variable.
Utilisez cette fonction et affichez le résultat en console. */

let show = function(param) {
  console.log(param);
}
show("Hello World!");

// En ES6
const show = (param) => console.log(param);
show("Coucou!");


/* Exercice 1.3
Écrire un script qui affiche “coucou” en console toutes les secondes. */

setInterval(function(){ 
  console.log('Coucou'); 
}, 1000);

// Dans ce cas, ça continue sans s'arrêter.
// Pour l'arrêter automatiquement, il faut une condition avec clearInterval comme ci-dessous.

/* Exercice 1.4
Écrire un script qui affiche “coucou” en console toutes les secondes et s’arrête après le 3e passage avec un clearInterval. */

let compt = 0;
let interval = setInterval(function () {
    console.log(compt, 'coucou');
    if (compt == 3) {
        clearInterval(interval);
    }
    compt++
}, 1000);

// Autre exemple
let c = 0;
let foo = setInterval(function() {
    if (c === 0) {
        console.log("passage 1");
    } else if (c === 1) {
        console.log("passage 2");
    } else if (c === 2) {
        console.log("passage 3");
    } else if (c === 3) {
        console.log("passage 4");
    } else if (c === 4) {
        clearInterval(foo);
    }
    c++;
    }, 3000);


/* Exercice 1.5
Écrire un script qui affiche “coucou” en console au bout de 2 secondes. */

setTimeout(function () {
    alert('Hello');
}, 2000);

// That's all folks! 🐰
