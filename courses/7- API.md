# SS7 : API

## S1 : Understanding
Jusqu'ici on a appris quelques elements essentiels. Maintenant c'est comment communiquer
avec le backend ? 
- What is API ?
- What is web services ? 
- Request/Response approach ? 

APi veut dire Application Programming interface. C'est une interface avec le derrière de la scène. 
Il peut d'avoir accès aux données et fonctionnalités d'une application sans les developer. 


## S2 : web service
Un service web est une ressource rendue disponible sur internet/le web. Donc un service web requiert
un réseau. Pour les tester, on utilise postman ou tout autre outil. 

Un API permet l'échange entre applications. Quand cela se fait en ligne, on parlera de web service. 


## S3 : Request
Architecture client serveur. Le client fait la requête et le serveur répond à la requête. 

## S4 : Methodes
Ce sont des mots-clés utilisés pour faire des opérations de requêtes. 
- HEAD, GET
- POST, PATCH
- PUT
- DELETE

## S5 Lib
On va utiliser fetch ou axios pour ça. Fetch vient avec JS et il faut installer axios. 
Fetch est async avec les fucntions then et catch. 

Avantage de axios : request plus simple et supporté par tous les browsers.
Pour installer axios : npm install axios