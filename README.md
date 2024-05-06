# TravelTips Backend

Ce dépôt contient le backend de l'application TravelTips, une application de partage de conseils de voyage.

## Installation

Assurez-vous d'avoir Docker installé sur votre machine.

1. Clonez ce dépôt sur votre machine locale :

   bash
   git clone https://github.com/HugoD66/TravelTips-backend.git

Accédez au répertoire cloné :

bash
cd TravelTips-backend
Construisez l'image Docker de l'application :

Démarrez les services à l'aide de Docker Compose :

bash
docker-compose up

Cela lancera le serveur de base de données PostgreSQL.

bash
nest start

Cela lancera l'application Nest.js.

Attendez que les services démarrent. Une fois que vous voyez que PostgreSQL est prêt à accepter les connexions, vous pouvez accéder à l'API de l'application à l'adresse suivante :

http://localhost:4000
