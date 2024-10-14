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

