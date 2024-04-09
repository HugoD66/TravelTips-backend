import { Module } from '@nestjs/common';
import { DayItineraryService } from './day-itinerary.service';
import { DayItineraryController } from './day-itinerary.controller';

@Module({
  controllers: [DayItineraryController],
  providers: [DayItineraryService],
})
export class DayItineraryModule {}
