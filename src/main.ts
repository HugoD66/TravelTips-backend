import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  //Upload de fichier.
  app.use(`/uploads`, express.static(`uploads`));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ne permet que les propriétés définies dans les DTOs
      forbidNonWhitelisted: true, // Rejette les requêtes contenant des propriétés non définies dans les DTOs
      transform: true, // Transforme les objets entrants en leur type de classe DTO approprié
    }),
  );

  await app.listen(4000);
}

bootstrap();
