import { Module } from '@nestjs/common';
import { DayItineraryService } from './day-itinerary.service';
import { DayItineraryController } from './day-itinerary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DayItinerary } from './entities/day-itinerary.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DayItinerary])],
  controllers: [DayItineraryController],
  providers: [DayItineraryService],
  exports: [DayItineraryService, TypeOrmModule],
})
export class DayItineraryModule {}
