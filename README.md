<h1 align="center">JS_exercices_WCS_Bootcamp</h1>
<h2 align="center">Basic JS practice, in :fr:</h2>

<h2 align="center">Thanks to <a href="https://github.com/NideXTC">NideXTC</a></h2>

***

## 1. Les fonctions

### Exercice 1.1
Faire une fonction show qui affichera en console le texte passé en paramètre.  
Exemple : ```show('coucou');```

### Exercice 1.2
Nous voulons stocker notre fonction faite dans l’exercice précédent dans une variable.  
Utilisez cette fonction et affichez le résultat en console.  
[(aide)](https://www.w3schools.com/js/js_function_definition.asp)

### Exercice 1.3 [(aide)](https://www.w3schools.com/jsref/met_win_setinterval.asp)
Écrire un script qui affiche “coucou” en console toutes les secondes.  

_Rajouter complément sur fonction SetInterval, à compléter par clearInterval_

### Exercice 1.4
Écrire un script qui affiche “coucou” en console toutes les secondes et s’arrête après le 3e passage.

### Exercice 1.5 [(aide)](https://www.w3schools.com/jsref/met_win_settimeout.asp)
Écrire un script qui affiche “coucou” en console au bout de 2 secondes.  

_Rajouter complément sur fonction SetTimeout_

***

## 2. Les tableaux

### Exercice 2.1
Nous avons les valeurs 4,3,5,8.     
Mettre ces valeurs dans un tableau et ressortir en console : toutes les valeurs, la première valeur, la taille du tableau.

### Exercice 2.2
En reprenant votre tableau de l’exercice précédent, trier ce tableau et le sortir en console.

**[sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)**

> La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau.
> Ordre alphabétique ou croissant par défaut (sinon utiliser la fonction)

### Exercice 2.3
Faire une boucle for et, à chaque tour, afficher la valeur en console.

### Exercice 2.4
Faire une boucle **[for each()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)** et, à chaque tour, afficher la valeur en console.

> La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

***

## 3. Les fonctions mathématiques

[Math sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math)

### Exercice 3.1
Nous avons les valeurs 9,11,55,22.  
Comment trouver la valeur minimum et maximum ? Afficher votre résultat en console.

### Exercice 3.2
Afficher en console un numéro au hasard via une fonction javascript.

### Exercice 3.3
Afficher en console la valeur de PI (via une constante javascript).

### Exercice 3.4
Afficher en console la valeur arrondie de PI à la valeur supérieure et inférieure.

***

## 4. Les regexp [(aide)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp)

### Exercice 4.1
Écrire une regexp pour ressortir le chiffre dans la chaîne “Coucou 3”.

### Exercice 4.2
Écrire une regexp pour ressortir la lettre dans la chaîne “1231f156415”.

### Exercice 4.3
Écrire une regexp pour ressortir le mot “yolo” dans la chaîne “fjezoifjezyoloceuhfez”.

### Exercice 4.4
Écrire une regexp pour ressortir le mot “yolo” (le mot cherché est en minuscule) dans la chaîne “FOEIJFOEZIJFEYOLOFEZKUHFEI.

### Exercice 4.5 [(aide)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match)
Écrire une regexp pour ressortir les chaînes de caractères dans la chaîne “fezf1548ffdsaf515154v54654” et sortir les valeurs en console.

***

## 5. Les nombres entiers

### Exercice 5.1
Sans modifier les lignes actuelles, comment faire ressortir le typeof en “number” et non en “string” ?
```
var test = "0123";
console.log(typeof test);
```

### Exercice 5.2
Additionnez ces deux valeurs et affichez le résultat en console.
```
var uno = "01";
var dos = "02";
```

***

## 6. Les chaînes de caractères

### Exercice 6.1
Sans modifier les lignes actuelles, comment faire ressortir le typeof en “string” et non en “number” ?
```
var test = 0123;
console.log(typeof test);
```

### Exercice 6.2
Ressortez la chaîne en console sous la forme “Hello World”.
```
var hello = "Hello";
var world = "World";
```

***

## 7. Les dates [(aide)](https://www.w3schools.com/jsref/jsref_obj_date.asp) 

[More on dates in JS with exercices](https://www.w3schools.com/js/js_dates.asp)

### Exercice 7.1 
Ressortir l’heure en console.

### Exercice 7.2
Afficher en console la date sous la forme “23/10/2015”.

### Exercice 7.3
Afficher en console la date sous la forme “23 octobre 2015” (en français).

 
***
 
## 8. Les objets ([aide](https://www.w3schools.com/js/js_json_syntax.asp) & [aide](https://www.tutorialspoint.com/json/json_syntax.htm))

### Exercice 8.1
Créer un JSON avec 2 élèves :  
prénom : Han / nom : Solo   
prénom : Chew / nom : Bacca  
Afficher cet objet en console.

### Exercice 8.2
Créer un JSON avec 2 tableaux de JSON à l’intérieur :  
prof :  
prénom : Chew / nom : Bacca   
prénom : Han / nom : Solo    
élève :  
prénom : Marty / nom : McFly  
prénom : Doc / nom : Brown  
Ressortir cet objet en console.  

### Exercice 8.3
Avec le JSON fait dans l’exercice précédent, affichez en console le nom de Marty.  

### Exercice 8.4
Nous avons un JSON au format texte ; affichez en console la valeur du prénom.
```
var text = '{"name" : "Dupont", "first_name" : "Jean"}';
```

### Exercice 8.5
Nous avons le JSON suivant :
```
var number = {"random" : "1"};
```
Nous voulons qu’il nous ressorte un nombre aléatoire. Placez une fonction pour qu’en faisant ```number.random();``` elle affiche un nombre aléatoire en console.

***

## Liens utiles Javascript
**[OpenClassroom 1](https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript)**  
**[OpenClassroom 2](https://openclassrooms.com/fr/courses/1916641-dynamisez-vos-sites-web-avec-javascript)**  
**[Developpez.com](https://javascript.developpez.com/cours/)**  
**[Codecademy](https://www.codecademy.com/catalog/language/javascript)**

***

# Enjoy and have fun :sunglasses:
<p align="center"><img src="https://media.giphy.com/media/Tmwir1pAi8fUk/giphy.gif" alt="Have fun!")</p>
  
***
