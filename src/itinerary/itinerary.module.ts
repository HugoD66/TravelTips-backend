import { Module } from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { ItineraryController } from './itinerary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itinerary } from './entities/itinerary.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([Itinerary])],
  controllers: [ItineraryController],
  providers: [ItineraryService],
  exports: [ItineraryService, TypeOrmModule],
})
export class ItineraryModule {}
