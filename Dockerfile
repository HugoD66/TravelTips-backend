# Sélectionnez l'image de base
FROM node:14

# Définissez le répertoire de travail
WORKDIR /usr/src/app

# Copiez les fichiers de package et installez les dépendances
COPY package*.json ./
RUN npm install

# Installation des dépendances supplémentaires
RUN npm install @nestjs/common@^10.3.7 \
                @nestjs/config@^3.2.2 \
                @nestjs/core@^10.0.0 \
                @nestjs/jwt@^10.2.0 \
                @nestjs/mapped-types@* \
                @nestjs/passport@^10.0.3 \
                @nestjs/platform-express@^10.0.0 \
                @nestjs/typeorm@^10.0.2 \
                bcrypt@^5.1.1 \
                class-transformer@^0.5.1 \
                class-validator@^0.14.1 \
                dotenv@^16.4.5 \
                mysql@^2.18.1 \
                mysql2@^3.9.3 \
                passport-jwt@^4.0.1 \
                pg@^8.11.5 \
                reflect-metadata@^0.1.13

# Copiez le reste de votre application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre app va tourner
EXPOSE 8080

# Commande pour démarrer votre application avec Docker Compose
CMD ["docker-compose", "up";"npm", "run", "start:dev" ]
