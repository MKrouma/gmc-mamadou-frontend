# SS9 : State management


## S1 : How to handle state?
But : mental models, history, 8 manières de gérer les states. 

History : Au debut le state existait que pour les classes on parlait de statefull 
component. En 2014, Facebook a release la librairie flux pour centraliser les stores. 
Quelques mois plus tard en 2015, redux a été mis en service. C'est aujourd'hui l'outil 
le plus populaire pour gérer les states dans react. 

Quelques mois, React a introduit les functions state management. Le context API 
est utile pour partager les données et fonctiosn entre plusieurs components. 
Ensuite, on a les hooks en 2019 et a permis de pouvoir tout gérer dans une 
function component. 


8 ways pour gérer les states dans React (données de l'app qui changent):
- URL : pour savoir où on est et il faut utiliser React Router;
- Web storage : pour les states qui doit perdurer entre les reload donc comme des cookies;
- Local state : utiliser quand un seul component a besoin de ce state;
- Lifted state : c'est un state qu'on laisse dans le parent component et distribue aux enfants;
pour ça on le declare dans le parent C et le passe comme props. Utile lorsque plusieurs C
partagent le même state. 
- Derived state : un état derivé d'un autre qu'on veut pas garder en memoire;
- Refs : DOM Reference, pour les uncontrolled components, il gère les librairies qui sont pas react
donc on dira tout ce qui n'est pas affiché;
- Context : permet d'éviter le props drilling, et passe le state et les functions à un ensemble
de components. Ex : logged user, auth settings, theming, i8n settings. 
- Third party library : Redux, MobX, Zustand, Recoil. Remote state : Appolo, Relay, Smr, 

Variables d'env, quelques cas pour react :
- REACT_APP_BASE_URL


JS data structures : 
Primitives : boolean, number, string, bigint, symbol;
Collection : object, array, map, set. 

Les collections sont mutables et les primitives immutables. Donc quand
on utilise les objects ou arrays pour nos states, il faut faire attention. 


## S2 : Demo 2
Event handlers : 
- onClick, onHover, onChange, onSubmit, onBluer, onMouseOver.

Derivated state
_ C'est juste une variable derivée d'un state. Elle est donc actualisée a chaque
fois que le state change de valeur. 

When react render ? 
_
- State change
- Prop change
- Parent render
- Context change

React n'est pas rendu quand une variable change. C'est normal et c'est ce qui est attendu. 
React est rendu lorsque des états, pops, contextes changent et donc le component est rendu 
a nouveau avec lui tous ces dérivés. 


Fetching & storing data via useEffect
_ useEffect est comme un lifecycle method. 

4 ways to handle API calls 
_ 
- Inline API call with fetch & axios dans le component, pas recommendé;
Les inline calls sont assez difficiles a gerer dans l'app. 
- Centralized functions : on va ecrire des bouts de fonctions dans un module
comme services et les appeler quand il y a le besoin. 
- Custom hooks : créer et appeler son propre custom hooks;
- Third party library : comme react-query, swr etc.


Errors handling & boundaries
_ Error boundaries permet de tracker toutes les erreurs de l'app et l'afficher à l'utilisateur. 
Pour ça, on va utiliser une class component. 
Error boundary une fois configurée au dessus de App va retourner les erreurs dans notre code. 
Toutefois, il ne traque pas toutes les erreurs comme l'async, server side etc.

Loading state
_ avec le loading state, on peut gérer un loading pour une information de fetching qui dure. 
Pour ça on crée un state loading et l'ajouter dans le `finally` pour le set a false quand
le fetching est bon. Ensuite avec une condition, on affiche notre component Spinner. 


Async/await in UseEffect
_ c'est comme le promise fetch avec then, catch et finally. On peut donc les mixer comme on veut. 


## S3 : URL state & Web storage
Un des problèmes lorsqu'on a plusieurs components c'est de savoir où avoir mon state ? 
Pour ça, il faut appliquer le principe du least privilege et essayer de garder le state le plus local possible sinon
le declarer dans le parent pour un lifted state.

Le process pour manager un state : 
- Commencer par le declarer dans le component en local;
- Si un enfant en a besoin le passé en props;
- Si c'est plutôt le parent qui en a besoin le declarer labas en lift state;
- Si c'est tout compliqué utiliser context ou redux. 

L'immutabilité est important et permet d'augmenter la performance. on fera par exemple les 
comparaisons par référence au lieu d'en faire par valeur. 

Donc comment gérer l'immutabilité ? A la base les states sont des objets, arrays donc mutables. 
Mais ca veut juste dire que dans le code on ne va pas les changer si besoin mais juste assigner un nouveau state. 

Pour créer donc une copy de notre state, on a plusieurs méthodes : 
- object assign : Object.assign({}, state, { role : 'admin'})
- spread : const newState = {...state, role: 'admin'}

Lorsqu'on modifie l'état d'une collection sous forme de function, les items sont injectés par react. 
setCart((items) = {

}) ici le item est le contenu de la cart et est injecté par react parce que c'est un state.

Comment faire pour que l'état de la cart reste intacte ? Pour retenir des infos dans le navigateur on a plusieus méthodes : 
- cookies;
- local storage;
- session storage;
- indexDB;
- cache storage;

On les appelle tous les web storages.


## S4 : Managing Form State and Validation
