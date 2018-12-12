/* Exercice 7.1
Ressortir l’heure en console. */

const date = new Date(); 
console.log(date.getHours() + ':' + date.getMinutes());
console.log(date.toLocaleTimeString());

/* C'est l'heure du navigateur, si on change l'heure de l'ordi on change le retour

Heure parfaite : horloge atomique, possibilité de se greffer dessus

Objet : normalement il faudrait toujours mettre new

Autre possibilité : console.log(toLocaleTimeString())

Pour la mettre à jour toutes les 30 sec :
<script>
setInterval(function(){ 
const d = new Date();
document.queryselector('.navbar').innerHTML = d.getHours() + ':' d.getMinutes();
},
30000);
</script>
+ laisser une div vide avec un sélecteur css (ici .navbar) à l'endroit où on veut que ça s'affiche */


/* Exercice 7.2
Afficher en console la date sous la forme “23/10/2015”. */

const d = new Date(); 
console.log(d.getDate() + "/" + (d.getMonth() + 1)  + "/" + d.getFullYear()); 
console.log(d.toLocaleDateString("fr-FR"));
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
