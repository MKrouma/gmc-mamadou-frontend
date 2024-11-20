# SS10 : Redux


## S1 : Overview
Un des elets importants de React c'est le one-way data-flow. Redux est l'une des plus populaires de state management.

Le probleme du state management
_
Utiliser un state est très important et parce qu'il permet de connaitre le status surtout que react est component-based. 
Le problème est que ça devient confus de toujours passer les states comme props entre components. Ce qui envoie le prop-driling. 

Donc redux est une librairie de state management qui permet de surpasser le problème de prop-drilling.


## S2 : What is redux
Redux est un predictable state container for les apps Javascript. Il permet de créer des apps consistantes et facilent
à tester. 

Principles
_ 
Redux est fondé sur trois principes fondamentaux :
- Single source of truth : tout l'état de l'app est stocké dans un arbre d'objets dit store;
- The state is read-only : la sele manière de changer un état c'est d'émettre une action, un objet decrivant ce qui arrive;
- Changes are made with pure actions : on utilise des pure reducers pour écrire des actions qui vont transformer nos states, la 
modification de l'état prend place dans le reducer. 

Reducer est une function qui prend un state et une action et retourne un nouveau state. 


How redux works
_
Redux a trois parties : 
- Actions : partager la donnée depuis l'app au store;
- Reducers : c'est l'élement le plus important;
- Store : c'est l'éleemnt central qui possède l'état de l'application. 

'To make it easy to understand, let's imagine this scenario, the component triggers an action to change the value of the global state, 
The action gets dispatched to the store. The store calls the reducer to create a new state based on the dispatched action. 
When the new state is created the component updates its view.'


React-redux est la librairie officielle.
Redux n'est pas informé de react. Il faut donc installe rract-redux. 

Un element important c'est l'architecture redux. GMC propose l'architecture suivantes : 
- JS : Actions, Constants, Reducers, Store. 


## S3 : Redux Building Blocks
Actions : c'est un objet js qui contient le type et le playload ou la donnée. 
Actions Creator : c'est une function dont le but est juste de générer les actions. 

Reducers : c'est la fonction qui est chargé de changer l'état de l'app. Il prend en entrée
le state, une action et retourne un nouveau state. 

Store : c'est l'espace unique qui va regrouper tous les états de l'app et les rendre aux views. 
Il est créé avec createStore de la librairie redux. 


## S4 : The store
Le store est le seul responsable d'orchestrer les changements d'état dans l'app. 
Il doit avoir un seul store dans l'app créé avec createStore et qui prend en argument le reducer. 

Mais de façon large, voici les arguments : 
- Reducer : fucntion qui retroune le prochain arbre state based on le current state et l'action;
- [preloadedState] : c'est le state initial.
- [enhancer] :  c'est pour ajouter des 3-parties tools comme un middleware, temps de voyage ou la persistence. 

Store : un objet qui contient tout l'état de l'app. 


## S5 : Reducer
Un reducer dans redux est une function pure JS qui prend comme arguments un state et une action. 


## S6 : Actions
Reducer est le concept le plus important dans le redux. Il permet de générer l'état d'une app. Mais comment 
il sait quand générer cet état ? Il utilise donc des actions. Le 2nd principe de redux dit que la seule manière
de changer un état c'est d'envoyer un signal au store. Comment ? A travers un dispatching d'actions. 

Une action redux n'est qu'un objet JS. 
type: "INCREMENT_COUNTER",
payload: {
   value: 1
}

le type est la pour dire comment le state devrait changer. Le payload définit qu'est ce qui doit changer comme data. 


## S7 : Redux Toolkit
Il est evident que Redux est important pour le management de state dans une app recat. Toutefois la fconfigure est difficile. 
C'est la que rentre en jeu Redux Toolkit. 

Fonctionnalités
_
RTK est juste une abstratction de redux. Ca ne change pas le flow mais ne fait que rendre les functions plus accessibles. 
- configureStore : abstraction de createStore et configure automatiquement le devtools;
- createAction : abstraction de l'action creator qui prend en entrée le action.type et retourne une function action creator. 
- createReducer : prend en entrée le initial state, une table de correspondance entre action.type et reducers et va retourner
un reducer plus général qui gère tous les types d'actions;
- createSlice : c'est un peu plus large que le createReducer et va retourner des function action creator, actions types et reducer. 


## S8 : Middlewares
Avec Redux, les Middlewares sont les intermediaires entre les actions creators et le reducer. Le middleware intercepte
l'action avant le reducer et va le décorer avec des fonctionnalités supplémentaires que le reducer va dispatch. 

Le pattern action/reducer est bon si c'est seulement dans l'app. Mais comment communiquer avec des outils externes
comme une API? Donc on a besoin de pouvoir tourner un side-effect sans detruire le flow action/reducer. 

Une middleware est comme un décorateur. C'est une function qui retourne une function. 
const reduxMiddleware = store => next => action => {}
Ici store et action répresentent le current redux store. La vraie magie se passe au niveau du next().

Logging action_
L'avantage de redux est qu'il rend le changement d'un état prédictable et transparent. Un state est changé qu'à la
suite d'une action. 

Logger function_
Le middleware est créé à l'init du state et donc du store. Pour cela on appelle la functionapplyMidlleware
de la librairie redux comme ca : import { createStore, applyMiddleware  } from "redux";

Le middleware aussi permet de créér des aync requests dans notre projet. 


## S9 : Redux thunk
Le thunk est un terme utilise pour designer une fucntion qui est retournée par une autre (décorateur).
function wrapper_function() {
 // this one is a "thunk" because it defers work for later:
 return function thunk() {
   // it can be named, or anonymous
   console.log("do stuff now");
 };
}

Par exemple ici, si on veut exécuter le thunk on doit run la function deux fois : wrapper_function()()

function getUser() {
 return function() {
   return fetch("/current_user");
 };
}

A la base redux a besoin des actions pour savoir quand fait le dispatch. On a vu que les actions sont que de simple objects
avec un type ou tout ce qu'on veut. Mais pour eviter les erreurs et pouvoir les re-utiliser on a intégrer le concept de
action creator. C'est une couche d'abstraction au dessus. Mais pour l'instant notre action ne fait rien. Ce n'est qu'un objet. 

Alors appeler un API ou trigger une autre function, on va mettre cet action dans une function à l'intérieur de notre action creator. 
D'om l'introduction du reduc thunk comme dans l'exemple ci-dessus.

Il faut à la fin installer redux thunk comme une librarie dans notre projet : 
`npm install --save redux-thunk`.


## S10 : Redux with hook
React a envoyé des hook et redux a suivi. Il y a le hook API qui permet de souscrire au store sans emballer
son component avec le connect comme vu précédemment. 

- useSelector : il remplace me mapStatetoProps et connect et permet de se connecter au store. Il sera executé chaque
fois que le component est rendu. 

Quand le selecteur ne depend que du state, il aut s'assurer qu'il est créé en dehors du component donc la même
instance est utilisé pour chaque render. 

- useDispatch : retourne une référence à la fonction disptach à partir du Redux store. 
- useCallback : prend en entrée une function de callback et un array de dépendance. Va retourner une valeur du callback qui a changé
si une de ses dependances a changé.

- Custom context : 