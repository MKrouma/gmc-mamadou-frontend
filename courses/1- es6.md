# Superskill : ES6

## S1 : Definition
Ecmascript est le langage de base de JS. Il a evolué vers la version Ecmasript 2015 en abrégé ES6.
Il a permis de donner a JS des élements nouveaux comme les variabes et la POO.

## S2 : Variables
Avant ES6, les variables étaient déclarées avec le mot clé `var`. Desormais il ya `let` et `const`.

La variable var vient avec deux problèmes :
- Double declaration possible;
- Scoping problem : possibilité d'avoir accès à la variable en dehors de son scope.


Le mot-clé const qui signifie constant est utilisé pour des variables dont les valeurs ne changeront pas.

## S3 : Template literals
C'est comme le f-string en python mais avec des guillemets speciaux.
console.log(`Hello world, ${user} !`)

`` : backtick ou backquote

On peut aussi utiliser le backtick pour faire du multiline string.

`Operateur ternaire`: c'est un opérateur utilsé pour évaluer une condition et executer des expressions 
selon si elle est vraie ou fausse. 
Ca s'écrit de la manière suivante : condition ? expression1 : expression2.


## S4 : Arrow functions
Le but de ES6 est d'écrire du code simple et optimal. 
Alors les arrow functions sont des syntaxes pour ecrire les functions.

const multiply = (x,y) => x*y

A la base les fonctions flechees sont anonymes et c'est pour cela qu'on les stocke dans des variables. 
S'il y a un seul argument et une expression on peut supprimer les () et {}.

Aussi, elles sont importantes dans la programmation OO, puisqu'elle permette d'avoir accès au keyword
this en dehors de la classe.


## S5 : Tableaux (Array)
Les tableaux sont très difficiles à manipuler en JS. ES6 envoie donc une serie de fonctions prédefinies pour cela. 
Entre autres : 
- find() : trouve et ramène le premier element qui respecte le pattern de recherche;
- forEach() : effectuer des opérations sur chaque elemnt du tableau;
- map() : pareil que forEach à la différence que l'opération est faite sur une copie du taleau et l'original;
- filter() : filtrer les elements sous certaines conditions;
- reduce() : reduit un tableau à une seule valeur en appliquant uen fonction intégrée à chaque element. (Accmulator, CurrentValue)


## S6 : Module
Un des aspects importants du developpement est la modularité. Cad, divise le code en plusieurs elements réutilisables stockés dans un fichier.
Pour ça, ES6 a introduire deux nouveaux concepts : `import` et `export`.

On peut donc importer et exporter les types connus comme : nombre, objet, fonction, tableau, etc.

Pour exporter des données ou un modules il y a deux types : 
- Exportations nommées : 0 ou plusieurs par mdules
- Exportations default : un seul possible par module.


## S7 : Destrcturing
Pour avoir accès aux propriétés d'un objet on utilise le `object access chain` qui est matérialisé par un `.`.
En général, lorsuq'on va manipuler des objets à plusieurs niveaux, on va enchainer des access chain et donc
on va créer accès de duplication. Qui dit duplication, dit erreurs.

Destructuring permet donc de unpack des vakeurs d'un tableau ou d'un objet.


## S8 : Spreading
L'opération de spreading permet d'ajouter ou modifier des arrays sans passer par des boucles for
let array2 = [...array1, 3]

Dans le cas des objets, le spreading est vraiment important et remplace la fonction assign() qui peut être
difficile à manipuler souvent.

