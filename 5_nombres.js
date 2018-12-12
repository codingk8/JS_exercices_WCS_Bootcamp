/* Exercice 5.1
Sans modifier les lignes actuelles, comment faire ressortir le typeof en “number” et non en “string” ? */

let test = "0123";
console.log(typeof test);

console.log(parseInt(test));

// Ou bien

test = +test // Et ça le transforme en nombre
console.log(typeof test);


/* Exercice 5.2
Additionnez ces deux valeurs et affichez le résultat en console. */

let uno = "01";
let dos = "02";

console.log(parseInt(uno) + parseInt(dos));


// That's all folks! 🐰
