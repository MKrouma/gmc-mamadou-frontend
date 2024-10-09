# React


## S1/S2 : React + Demarrer
React est un framework js pour developper des interfaces UI. 
Il est basé sur le concept de SPA : Single-Page App. C'est à dire que le serveur
ramène qu'un seul fichier index.html et tout le rendu se faire de manière 
dynamique dans la même page depuis le navigateur. 

Le point principal d'entrer d'un projet react est le fichier `App.js`.

Pour cela on utilise : 
- Nodejs : pour installer des librairies et packages importats au fonctoonnement de react;
- Npx : runner des codes avec des packages sans les installer
- Vite : pour demarrer vite. 

Pour create un projet : 
- npx create-react-app myapp
- npm create vite@latest myapp


## S3 : Start a project
npm start : il va tourner le script appeler start dans le fichier `pakage.json`.

Un projet react est en général structuré en deux grandes familles : 
- Fichiers relatifs à node : node_modeules, package.json
- Fichiers relatifs à react : public, src

Npm regustry : c'est l'endroit où les developers vont hebergés leur package afin qu'ils soient utilisés 
plus tard dans les projets react. 


## S4 : Virtual DOM
Pour rendre dynamiquement les pages, react fonctionne sur le principe de Virtual DOM. 
Pour cela il crée deux virtual DOM dont l'un comprend la version précédente et l'autre la dernière version. 
A chaque changement, il trouve l'élement nouveau entre ces deux V.Dom et ensuite l'ajoute au DOM réel du site. 

On parle donc de `diffing`.

React DOM
C'est un package qui intègre des méthodes DOM à react. 
Il est basé sur plusieurs fonctions dont l'une d'entre elles est le render qui prend 3 paramètres : 
- Le contenu, le DOM et le callback.