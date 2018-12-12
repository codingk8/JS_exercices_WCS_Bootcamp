/* Exercice 6.1
Sans modifier les lignes actuelles, comment faire ressortir le typeof en “string” et non en “number” ? */

let test = 0123;
test = test.toString();
console.log(typeof test);

/* Deux méthodes
test.toString qui est un prototype d'entiers
ou bien
test = String(test);
comme Number(), de nouveau on crée un objet donc on utilise plus de mémoire c'est pourquoi on va préférer le toString 
plus léger en mémoire */


/* Exercice 6.2
Ressortez la chaîne en console sous la forme “Hello World”. */

let hello = "Hello";
let world = "World";

console.log(hello + " " + world); 
console.log(hello.concat(" " + world));
console.log(`${hello} ${world}`);

/* Autres possibilités qui fonctionnent dans Chrome */
console.log(hello, world); 
console.log("%s %s", hello, world);

// %s : String et %d : decimal, une façon d'injecter directement les variables
console.log("%s %d", "coucou", 1);


// That's all folks ! 🐰
