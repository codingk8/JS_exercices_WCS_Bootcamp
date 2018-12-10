<h1 align="center">JS_exercices_WCS_Bootcamp</h1>
<h2 align="center">Basic JS practice, in :fr:</h2>

<h2 align="center">Thanks to <a href="https://github.com/NideXTC">NideXTC</a></h2>

***

## Recap

#### Les fonctions : setInterval(), clearInterval(), setTimeout(), clearTimeout()

#### Les tableaux : sort(), for, for each()

#### Les fonctions mathématiques : Math.min(), Math.max(), Math.random(), Math.PI, Math.round(), Math.ceiling(), Math.floor(), Math.pow(), Math.sign(), Math.trunc()

#### Les regexp : exec(), test(), search(), match()

#### Les nombres entiers : parseInt(), parseFloat(), Number(), typeof

#### Les chaînes de caractères : toString(), concat()

#### Les dates : date, getHours(), getMinutes(), toLocaleTimeString(), toLocaleDateString()

#### Les objets : (doing)

#### + Liens utiles JS

***

## 1. Les fonctions

### Exercice 1.1
Faire une fonction show qui affichera en console le texte passé en paramètre.  
Exemple : ```show('coucou');```

### Exercice 1.2
Nous voulons stocker notre fonction faite dans l’exercice précédent dans une variable.  
Utilisez cette fonction et affichez le résultat en console. 

[(Fonctions :gb:)](https://www.w3schools.com/js/js_function_definition.asp)

### Exercice 1.3 **[(setInterval() :gb:)](https://www.w3schools.com/jsref/met_win_setinterval.asp)**
Écrire un script qui affiche “coucou” en console toutes les secondes.  

[MDN setInterval() :gb:](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)  
[MDN clearInterval() :gb:](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

### Exercice 1.4
Écrire un script qui affiche “coucou” en console toutes les secondes et s’arrête après le 3e passage.

### Exercice 1.5 **[(setTimeout() :gb:)](https://www.w3schools.com/jsref/met_win_settimeout.asp)**
Écrire un script qui affiche “coucou” en console au bout de 2 secondes.  

[MDN setTimeout() :gb:](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)  
[MDN clearTimeout() :gb:](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)

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
Faire une boucle **[for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for)** et, à chaque tour, afficher la valeur en console.

> L'instruction for crée une boucle composée de trois expressions optionnelles séparées par des points-virgules et 
> encadrées entre des parenthèses qui sont suivies par une instruction (généralement une instruction de bloc) à 
> exécuter dans la boucle.

### Exercice 2.4
Faire une boucle **[for each()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)** et, à chaque tour, afficher la valeur en console.

> La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.

***

## 3. Les fonctions mathématiques

[Math sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math)

### Exercice 3.1
Nous avons les valeurs 9,11,55,22.  
Comment trouver la valeur minimum et maximum ? Afficher votre résultat en console.

[MDN Math.min()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/min)
> La fonction Math.min() renvoie le plus petit nombre d'une série de 0 ou plusieurs nombres ou bien NaN si au moins un des
> arguments fourni n'est pas un nombre ou ne peut pas être converti en nombre.

[MDN Math.max()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/max)
> La fonction Math.max() renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres.

### Exercice 3.2
Afficher en console un numéro au hasard via une fonction javascript.

[MDN Math.random()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random)  
> La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle (0, 1) (ce qui signifie 
> que 0 est compris dans l'intervalle mais que 1 en est exclu) selon une distribution approximativement uniforme sur 
> cet intervalle. Ce nombre peut ensuite être multiplié afin de couvrir un autre intervalle.

### Exercice 3.3
Afficher en console la valeur de PI (via une constante javascript).

[MDN Math.PI](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/PI)  

### Exercice 3.4
Afficher en console la valeur arrondie de PI à la valeur supérieure et inférieure.

[MDN Math.round()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/round)  
> La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.

### Autres fonctions mathématiques utiles

[MDN Math.ceiling()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/ceil)  
> La fonction Math.ceil() retourne le plus petit entier supérieur ou égal au nombre donné.

[MDN Math.floor()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor)  
> La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.

[MDN Math.pow()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/pow)  
> La fonction Math.pow() renvoie un nombre à une certaine puissance, c'est-à-dire baseexposant.

[MDN Math.sign()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sign)  
> La fonction Math.sign() renvoie le signe d'un nombre et permet de savoir si un nombre est positif, négatif ou nul.

[MDN Math.trunc()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/trunc)  
> La fonction Math.trunc() retourne la partie entière d'un nombre en retirant la partie décimale.

***

## 4. Les regexp [(MDN regexp)](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp)

[MDN exec()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/exec)
> La méthode exec() exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau 
> contenant les résultats ou null.

[MDN test()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/test)  
> La méthode test() vérifie s'il y a une correspondance entre un texte et une expression rationnelle. Elle retourne true 
> en cas de succès et false dans le cas contraire.

[MDN search()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/search)  
> La méthode search() éxecute une recherche dans une chaine de caractères grâce à une expression rationnelle appliquée 
> sur la chaîne courante.

### Exercice 4.1
Écrire une regexp pour ressortir le chiffre dans la chaîne “Coucou 3”.

### Exercice 4.2
Écrire une regexp pour ressortir la lettre dans la chaîne “1231f156415”.

### Exercice 4.3
Écrire une regexp pour ressortir le mot “yolo” dans la chaîne “fjezoifjezyoloceuhfez”.

### Exercice 4.4
Écrire une regexp pour ressortir le mot “yolo” (le mot cherché est en minuscule) dans la chaîne “FOEIJFOEZIJFEYOLOFEZKUHFEI.

### Exercice 4.5 [(MDN match())](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match)
Écrire une regexp pour ressortir les chaînes de caractères dans la chaîne “fezf1548ffdsaf515154v54654” et sortir les valeurs en console.

> La méthode match() permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.

***

## 5. Les nombres entiers

[MDN parseInt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt)  
> La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une 
> base donnée.

[MDN parseFloat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat)  
> La fonction parseFloat() permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée 
> celle-ci (parsing).

[MDN Number()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number)  
> Utilisé pour convertir une chaîne de caractères représentant une valeur numérique en nombre

[MDN typeof](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_typeof)  
> L'opérateur typeof renvoie une chaîne qui indique le type de son opérande.

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

[MDN toString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toString)  
> La méthode toString() renvoie une chaine de caractères représentant l'objet renseigné.

[MDN concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/concat)  
> La méthode concat() combine le texte de plusieurs chaînes avec la chaîne appelante et renvoie la nouvelle chaîne 
> ainsi formée.

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

## 7. Les dates [(Dates :gb:)](https://www.w3schools.com/jsref/jsref_obj_date.asp) 

[Dates + exercices :gb:](https://www.w3schools.com/js/js_dates.asp)

[MDN date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date)  
> Ce constructeur permet de créer des instances Date qui représentent un moment précis dans le temps. Les objets Date se 
> basent sur une valeur de temps qui est le nombre de millisecondes depuis 1er janvier 1970 minuit UTC.

[MDN date prototype, la liste des fonctions de date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/prototype)  

[MDN getHours()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getHours)  
> La méthode getHours() renvoie l'heure pour la date renseignée, d'après l'heure locale.

[MDN getMinutes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/getMinutes)  
> La méthode getMinutes() renvoie les minutes pour la date renseignée d'après l'heure locale.

[MDN toLocaleTimeString](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleTimeString)  
> La méthode toLocaleTimeString() renvoie une chaine de caractères correspondant à l'heure dans la date, exprimée selon une 
> locale. Les arguments locales et options permettent aux applications de définir le langage utilisé pour les conventions de 
> format et permettent de personnaliser le comportement de la fonction.

[MDN toLocaleDateString](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleDateString)  
> La méthode toLocaleDateString() renvoie une chaine de caractères correspondant à la date (le fragment de l'objet qui 
> correspond à la date : jour, mois, année) exprimée selon une locale. Les arguments locales et options permettent aux 
> applications de définir le langage utilisé pour les conventions de format et permettent de personnaliser le comportement de 
> la fonction.

### Exercice 7.1 
Ressortir l’heure en console.

### Exercice 7.2
Afficher en console la date sous la forme “23/10/2015”.

### Exercice 7.3
Afficher en console la date sous la forme “23 octobre 2015” (en français).

 
***
 
## 8. Les objets ([Objects :gb:](https://www.w3schools.com/js/js_json_syntax.asp) & [json :gb:](https://www.tutorialspoint.com/json/json_syntax.htm))

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
