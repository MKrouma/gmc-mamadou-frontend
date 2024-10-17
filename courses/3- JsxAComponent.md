# SS3 : JSX & Component

## S1 : JSX & HTML
JSX est une extension de JS. Il sert principalmeent à créer des elements ou components de React.
JSX est un language de template comme jinja en python. HTML + JS = React JS

Le JSX ressemble à du HTML, mais ils sont différents. On pourrait se demander pourquoi du HTML dans du js?
Le navigateur connait que du HTML. Alors, la route d'entreer est le id root dans index.html. 
React transforme dans le JSX en HTML dans ce fichier une fois et c'est ce qui est affiché à l'utilisateur.

- Injection d'un composant dans un element HTML : Rendering;
- One root component : App
- Only need one html as a SPA : index.html
- JSX est compilé et rendu dans la root element du index.html


## S2 : Variables
Avec JSX au lieu d'utiliser du DOM pour ecrire du JS sur un élement html, on va le faire directement. 
On va donc écrire nos expressions avec des {} comme : 
`return <p>{firstName + " " + lastName}</p>`

Type : JSX c'est pour écrire du HTML dans un fichier JS. En JS, on peut tout stocker dans une variable. C'est 
donc pareil avec JSX. let button = <button>Submit</button>. On peut aussi le retourner dans une fonction. 
Tous les élemens JSX se font inside the brackets.


## S3 : Attributes : style
Pour faire du inline styling, on va changer quelques principes qu'avec du HTML. 
Exemple : <h1 style={{ color: "red", fontSize: 60 }}>...</h1>

CamelCase est utilisé pour écrire les vvariables en JS. No _ no - or space. 
Exemple : HTML : text-align, JSX : textAlign

En JSX, les unités par default sont du pixel. S'il faut les changer dans ce cas il faut utiliser un string pour ecrire. 
Exemple : <div style={{height:'10px'}}/> et <div style={{height:10}}/>


## S4 : Style file
Une autre façon de styler leur HTML c'est d'utiliser des class. EN JSX, on va transformer le keyword class en className. 
Parce que class est reservé à JS.

On peut donc utiliser un fichier css pour faire du external css à partir des className définies dans notre JSX.
Ensuite, il faut simplement importer le fichier dans le composant : import "./styles.css";


## S5 : Attributes src
On va utiliser {} pour ajouter src s'ils sont des string ou des variables.

Pour intégrer les images, on a deux méthodes: soit public ou src.
- Public : src={"/myImage.png"}
- Src : import myImage from "./myImage.png"

Pour public, c'est comme attribut et pour src il faut plutôt importer dans le fichier.


## S6 : Loop & conditional operators
Function array map : La première chose est le function map. Avec JSX (ES6), on peut retourner facilement des 
elements avec les mêmes caractéristiques; [1,2,3].map(value => <div>{value}</div>)

Condition : Pour retourner des elts avec condition, JSX est utile et ça donne du sens au SPA. 

Conditional operators : on a deux operateurs && et || pour respetivement et & ou condition. 
location.href = websiteUrl || 'http://google.com'; let protocolUsed = (websiteUrl.startsWith("https")) ? "https" : "http";


## S7 : JSX: Bad Practices
Avant React 17, il fallait forcément importer React pour utiliser JSX.
Aussi une mauvaise pratique c'est que c'est obligatoire d'avoir un seul root element dans le return. 
Soit avec une div, un <><> ou un React.Fragment.

En JSX, on utilise className au lieu de class, ca permet d'éviter les conflits.


## S8 : Introduction to components
Un component est une pièce de code qui peut être reutilisé et mis ensemble pour avoir une interface. 
Avantages : reutilisability, maintenability, platform independance (html, css, js), privacy. 

React component : js class or function that takes an input (props) and return a section of UI. 

const Greeting = () => <h1>Hello World from my first component!</h1>;


## S9 : Type of components
Il y a deux types : class components & functional components.

## S10 : First components
Best pratices : keep components small, keep them in a single folder (style, jsx)

## S11 : Using components
On peut utiliser un composant en l'important d'abord puis l'appelant dans le return. 
Un composant peut avoir d'autres components. On parle de relation enfant-parent. 

Le root component est celui dans le index.js ou main.js et c'est le composant principal 
comme vu dans le React Virtual DOM. 


## S12 : Component HOC
En javascript on a la vu le higher-order function, qui prend une function en paramètre. 
Avec react on a le même principe appelé HOC : Higher Order Component. 

HOC : prend un component en paramètres et retourne un component. 
Principale DRY : Don't Repeat Yourself


## S13 : Common mistakes
Return one jsx element.
Use relative path instead of absolute path. 

