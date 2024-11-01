# SS6 : React hooks

## S1 : Overview
La verison 16.8 fut un soulagement dans la manière d'interagier avec les components
en react grâce aux hooks. Hooks ont litéralement réduit la complexité dans la gestion
de l'état des components.

- useState()
- useEffect()
- useRef()

State : on a vu qu'on peut update un state qu'avec this.setState.
Le state est caractérisé par deux éléments :
- valeur : getter;
- function de changement : setter.

Pour declarer une variable state dans notre projet, il faut d'abord importer
le hook useState de react. 

const [name, setName] = useState("John Snow") où John Snow est la valeur par defaut
et useState le hook. 

Pour avoir accès au state on utilise la variable et si c'est dans le JSX on met {}.
Pour update la valeur on utilise setName("nouvelle valeur").


## S2 : useEffect
Un useEFfect prend deux paramètres : 
- Function : qui définit l'effet;
- Array : qui determine quand l'effet doit apparaitre ou disparaitre.

Alors pour le démarrage on doit utiliser un Array vide [] pour le moment. 
useEffect(()=>{

 alert(`hello this a message`)

},[])

Il permet aux components de gérer des effets sécondaires. 


## S3 : useRef
useRef est une fonction qui retoune une référence à un objet mutable. On l'utilise souvent pour les
inputs dans l'app.

let nameRef = useRef();

une référence crée avec useRef existe que lorsque le component a déjà été créé et non avant.

Desctructuring hooks : 
- Il ne faut pas oublier. Les hooks utilsient des array pour stocker les données. 
- const { state, setState} = useState("intial state") va donner une erreur. 

Il faut aussi eviter de créer un hook dans une condition ou une loop. Ca va engendrer un bug. 
Il ne faut pas et jamais appeler un useState dans un useEffect, sinon àa produit une boucle infinie.


## S4 : Custom hooks
Un hook personnalisé est une fucntion dont le nom commence avec use. On peut appeler tous les hooks vus
dans notre hook personnalisé. Un custom hook est comme un decoateur autour des autres hooks. 

