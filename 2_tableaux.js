/* Exercice 2.1
Nous avons les valeurs 4,3,5,8 
Mettre ces valeurs dans un tableau et ressortir en console : toutes les valeurs, la première valeur, la taille du tableau. */

let tableau = [4, 3, 5, 8];
console.log(tableau);
console.log(tableau[0]);
console.log(tableau.length);


/* Exercice 2.2
En reprenant votre tableau de l’exercice précédent, trier ce tableau et le sortir en console. */

// V1
tableau.sort();
console.log(tableau); // le reclasse par ordre croissant

// v2 pour le classer par ordre décroissant
tableau.sort(function(a, b){
    return a < b;
});
console.log(tableau); // le reclasse par ordre décroissant


/* Exercice 2.3
Faire une boucle for et, à chaque tour, afficher la valeur en console. */
for(let i = 0; i < tableau.length ; i++){
	console.log('Pour l\'index ' + i + ' la valeur est ' + tableau[i]);
}


/* Exercice 2.4
Faire une boucle for each et, à chaque tour, afficher la valeur en console. */

tableau.forEach(function(elementActuel, position, tableauQueJUtilise){
	console.log(elementActuel + ' est l\'element actuel de l\'index ' + position + ' du tableau que j\'utilise ' + tableauQueJUtilise);
	console.log('--- Next ---');
});

// Ou bien

tableau.forEach(function(elementActuel, position, tableauQueJUtilise){
	console.log(`${elementActuel} est l'element actuel de l'index ${position} du tableau que j'utilise ${tableauQueJUtilise}`);
	console.log(`--- Next ---`);
});

// That's all folks !
