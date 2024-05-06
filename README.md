# TravelTips Backend

Ce dépôt contient le backend de l'application TravelTips, une application de partage de conseils de voyage.

## Installation

Assurez-vous d'avoir Docker installé sur votre machine.

1. Clonez ce dépôt sur votre machine locale :

   bash
   git clone https://github.com/votre-utilisateur/TravelTips-backend.git

Accédez au répertoire cloné :

bash
cd TravelTips-backend
Construisez l'image Docker de l'application :

bash
docker build -t traveltips-backend .

Démarrage
Une fois l'image Docker construite, vous pouvez démarrer l'application à l'aide de Docker Compose.

Démarrez les services à l'aide de Docker Compose :

bash
docker-compose up

Cela lancera le serveur de base de données PostgreSQL et l'application Nest.js.

Attendez que les services démarrent. Une fois que vous voyez que PostgreSQL est prêt à accepter les connexions, vous pouvez accéder à l'API de l'application à l'adresse suivante :

http://172.16.70.192:3000

Mode de développement
Si vous souhaitez exécuter l'application en mode de développement, vous pouvez utiliser la commande suivante après avoir démarré les services avec Docker Compose :

bash
npm run start:dev

Cela lancera l'application Nest.js en mode de développement, avec un rechargement automatique lorsque des fichiers sont modifiés.
