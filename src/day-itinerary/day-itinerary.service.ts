import { Injectable } from '@nestjs/common';
import { CreateDayItineraryDto } from './dto/create-day-itinerary.dto';
import { UpdateDayItineraryDto } from './dto/update-day-itinerary.dto';

@Injectable()
export class DayItineraryService {
  create(createDayItineraryDto: CreateDayItineraryDto) {
    return 'This action adds a new dayItinerary';
  }

  findAll() {
    return `This action returns all dayItinerary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dayItinerary`;
  }

  update(id: number, updateDayItineraryDto: UpdateDayItineraryDto) {
    return `This action updates a #${id} dayItinerary`;
  }

  remove(id: number) {
    return `This action removes a #${id} dayItinerary`;
  }
}
