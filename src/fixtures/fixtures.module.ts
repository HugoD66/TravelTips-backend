import { Module } from '@nestjs/common';
import { FixturesService } from './fixtures.service';
import { FixturesController } from './fixtures.controller';
import { CategoryModule } from '../category/category.module';
import { CityModule } from '../city/city.module';
import { CommentModule } from '../comment/comment.module';
import { CountryModule } from '../country/country.module';
import { DayItineraryModule } from '../day-itinerary/day-itinerary.module';
import { ItineraryModule } from '../itinerary/itinerary.module';
import { PictureModule } from '../picture/picture.module';
import { RateModule } from '../rate/rate.module';
import { TipsModule } from '../tips/tips.module';
import { UsersModule } from '../users/users.module';
import { Mockups } from './datas';
import { GeoModule } from '../geo/geo.module';

@Module({
  imports: [
    CategoryModule,
    CityModule,
    CommentModule,
    CountryModule,
    DayItineraryModule,
    ItineraryModule,
    PictureModule,
    RateModule,
    TipsModule,
    UsersModule,
    GeoModule,
  ],
  controllers: [FixturesController],
  providers: [FixturesService, Mockups],
  exports: [FixturesService],
})
export class FixturesModule {}
