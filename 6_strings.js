/* Exercice 6.1
Sans modifier les lignes actuelles, comment faire ressortir le typeof en “string” et non en “number” ? */

let test = 0123;
test = test.toString();
console.log(typeof test);

/* Exercice 6.2
Ressortez la chaîne en console sous la forme “Hello World”. */

let hello = "Hello";
let world = "World";

console.log(hello + " " + world); 
console.log(hello.concat(" " + world));
console.log(`${hello} ${world}`);

// That's all folks ! 🐰
