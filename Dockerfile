# Sélectionnez l'image de base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de package et installez les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copiez le reste de votre application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre app va tourner
EXPOSE 4000

# Commande pour démarrer votre application avec Docker Compose
CMD ["docker-compose", "up";"npm", "run", "start:dev" ]
