/* Exercice 2.1
Nous avons les valeurs 4,3,5,8 
Mettre ces valeurs dans un tableau et ressortir en console : toutes les valeurs, la première valeur, la taille du tableau. */

let tableau = [4, 3, 5, 8];
console.log(tableau);
console.log(tableau[0]);
console.log(tableau.length);


/* Exercice 2.2
En reprenant votre tableau de l’exercice précédent, trier ce tableau et le sortir en console. */

/* Fonction sort() compliquée à utiliser en particulier avec des Strings pour un classement par ordre alphabétique,
plus facile avec des nombre => regarder les détails dans MDN */

// V1 pour le reclasser par ordre croissant
tableau.sort(function(a, b){
    return a - b;
});
console.log(tableau);

// Fonctionne aussi a > b pour ordre croissant, ce qui est contre-intuitif
tableau.sort(function(a, b){
    return a > b;
});
console.log(tableau);

// v2 pour le classer par ordre décroissant
tableau.sort(function(a, b){
    return b - a;
});
console.log(tableau);

// Fonctionne aussi a < b pour ordre décroissant, ce qui est aussi contre-intuitif
tableau.sort(function(a, b){
    return a < b;
});
console.log(tableau);


/* Exercice 2.3
Faire une boucle for et, à chaque tour, afficher la valeur en console. */
for(let i = 0; i < tableau.length ; i++){
	console.log('Pour l\'index ' + i + ' la valeur est ' + tableau[i]);
}

const tab = [1,2,3];
for(let i = 0; i < tab.length; i++) {
    console.log(i, tab[i]);  
}

const arr = [1, 2, 3]; 
for(let i = 0; i < arr.length ; i++){
	console.log('index',i);
	console.log('valeur', arr[i]);
	console.log('------');
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

// Autre

['A', 'B', 'C'].forEach(function(element){
	console.log(element);
});


// That's all folks! 🐰
