# SS4 : React hooks

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

