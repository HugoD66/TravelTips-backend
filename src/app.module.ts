import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItineraryModule } from './itinerary/itinerary.module';
import { DayItineraryModule } from './day-itinerary/day-itinerary.module';
import { TipsModule } from './tips/tips.module';
import { RateModule } from './rate/rate.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { PictureModule } from './picture/picture.module';
import { Itinerary } from './itinerary/entities/itinerary.entity';
import { DayItinerary } from './day-itinerary/entities/day-itinerary.entity';
import { Tip } from './tips/entities/tip.entity';
import { Rate } from './rate/entities/rate.entity';
import { Category } from './category/entities/category.entity';
import { Comment } from './comment/entities/comment.entity';
import { Country } from './country/entities/country.entity';
import { City } from './city/entities/city.entity';
import { Picture } from './picture/entities/picture.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FixturesModule } from './fixtures/fixtures.module';
import User from './users/entities/user.entity';

@Module({
  imports: [
    ItineraryModule,
    DayItineraryModule,
    TipsModule,
    RateModule,
    CategoryModule,
    CommentModule,
    CountryModule,
    CityModule,
    PictureModule,
    FixturesModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig = {
          type: `postgres` as const,
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [
            Itinerary,
            DayItinerary,
            Tip,
            Rate,
            Category,
            Comment,
            Country,
            User,
            City,
            Picture,
          ],
          synchronize: true,
        };
        return dbConfig;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
