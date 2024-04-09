# Sélectionnez l'image de base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de package et installez les dépendances
COPY package*.json ./
RUN npm install

# Copiez le reste de votre application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre app va tourner
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["npm", "run", "start:dev"]
