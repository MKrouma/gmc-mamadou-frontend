# SS8 : React Router

## S1 : Overview
React router est la librairie standard pour la gestion du routage avec react dans son SPA. 
Une SPA a plusieurs views (pages) alors naviguer entre ces views ne devrait pas engendre un reload de la page. 

Pour les users : chaque view devrait avoir une URL. 

Declarative : il faut declarer les routes dans react. <Route path="/about" element={<About/>}/> 
React router n'est pas developpée par Facebook. C'est une librairie open source très utilisé. 

On verra donc 4 catégories de routing : 
- Basic navigation:
- Nested routing;
- Nested routing with path parameters;
- Protected routing.

Le router vient avec trois packages : react-router, react-router-dom et react-router-native. 
react-router est le coeur du package et les autres sont spécifiques à des envs. On va donc utiliser
react-router-dom si on construit une page web et le native pour une application mobile. 

Installation : npm install --save react-router-dom


## S2 : Basics

<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category" element={<Category />} />
    <Route path="/login" element={<Login />} />
    <Route path="/products" element={<Products />} />
</Routes>

Puisqu'on construit un browser based app, on a deux options : BrowserRouter et HashRouter. 

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);

Un ROuter component ne peux avoir qu'un seul child comme element qui peut être un HTML ou component react. 


## S3 : History links & routes
History est une lib js qui permet de gérer les historiques session dans n'importe quel env JS. Chaque Router component 
crée un historique qui track ou vous êtes et étiez avant (history.location). Quand une location est changé, alors 
la view est rendue et ce qui donne un sentiment de navigation. Comment reat le sait ? 
Quand on clique sur un Link, il invoque le history.push ou history.replace.

Le component Route est le plus important quand on travaille avec React Router. Il rend le UI si la location actuelle est 
en accord avec le path de la route. 

Le component Link est utilisé pour naviguer entre les élements. 


## Demo 1
Check platform.


## Router hooks
- useNavigate() : retourne function qui permet de changer l'url quand on veut, même principe que Link mais utilise dans une function JS;
- useLocation() : retourne l'objet de la localisation actuelle utilisée par react-router. Cet objet n'est pas modifiable;
- useParams() : retourne un objet avec tous les paramètres du chemin;
- useRouteMatch() : retourne la donnée qui matche avec une route par rapport à la loc actuelle.


Examples : 
const navigate = useNavigate();
<button onClick={() => navigate('/profile')}>Navigate to Profile </button>

const location = useLocation()


## Nested routes
Nested routes c'est juste du routing avec un parent component qui contrôle les enfants. Ca permet de respecter la logique UI de l'app. 
Pour ca on utilise le component Route et un /etoile.


## Nested routes with outlet
On va utiliser le outlet pour annoncer que les composants peuvent être rendus dans un espace en utilisant la route parent. 


## Protected routes
Souvent il faut proteger des routes pour les users pas auth. React Router n'a rien de particulier pour ça. DOnc on va définir un component. 

import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, isAuth }) => {
   return (
       isAuth === true ? children : <Navigate to='/login' replace />
   )
}

export default PrivateRoute



