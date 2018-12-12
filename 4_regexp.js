/* Exercice 4.1
Écrire une regexp pour ressortir le chiffre dans la chaîne “Coucou 3”. */

const text = "Coucou 3"; 
console.log(text.match(/[0-9]+/g));
console.log(text.exec(/\d+/));


/* Exercice 4.2
Écrire une regexp pour ressortir la lettre dans la chaîne “1231f156415”. */

console.log("1231f156415".match(/[a-z]/i));


/* Exercice 4.3
Écrire une regexp pour ressortir le mot “yolo” dans la chaîne “fjezoifjezyoloceuhfez”. */

console.log('fjezoifjezyoloceuhfez'.match(/yolo/));
console.log('fjezoifjezyoloceuhfez'.match(/y[a-z]{3}/);


/* Exercice 4.4
Écrire une regexp pour ressortir le mot “yolo” (le mot cherché est en minuscule) dans la chaîne “FOEIJFOEZIJFEYOLOFEZKUHFEI". */

console.log("FOEIJFOEZIJFEYOLOFEZKUHFEI".match(/y[a-z]{3}/i));


/* Exercice 4.5
Écrire une regexp pour ressortir les chaînes de caractères dans la chaîne “fezf1548ffdsaf515154v54654” 
et sortir les valeurs en console. */

console.log("fezf1548ffdsaf515154v54654".match(/[a-z]+/g));

// That's all folks! 🐰
