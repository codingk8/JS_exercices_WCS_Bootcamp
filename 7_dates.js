/* Exercice 7.1
Ressortir l’heure en console. */

const date = new Date(); 
console.log(date.getHours() + ':' + date.getMinutes());
console.log(date.toLocaleTimeString());


/* Exercice 7.2
Afficher en console la date sous la forme “23/10/2015”. */

const d = new Date(); 
console.log(d.getDate() + "/" + (d.getMonth() + 1)  + "/" + d.getFullYear());  
console.log(d.toLocaleDateString("en-GB")); // Inverse le mois et le jour


/* Exercice 7.3
Afficher en console la date sous la forme “23 octobre 2015” (en français). */

const d = new Date(); 

const month = ['janvier', '', '','','','','','','','octobre'];
console.log(d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());

console.log(d.toLocaleDateString("fr-FR", {
	year : "numeric", 
	month : "long", 
	day : "numeric"
})); // fonctionne dans Chrome mais pas dans RunKit


// That's all folks! 🐰
