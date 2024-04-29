import { Injectable } from '@nestjs/common';
import { CreateDayItineraryDto } from './dto/create-day-itinerary.dto';
import { UpdateDayItineraryDto } from './dto/update-day-itinerary.dto';
import { DayItinerary } from './entities/day-itinerary.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DayItineraryService {
  constructor(
    @InjectRepository(DayItinerary)
    private dayItineraryRepository: Repository<DayItinerary>,
  ) {}
  async create(createDayItineraryDto: CreateDayItineraryDto) {
    const dayItinerary = this.dayItineraryRepository.create(
      createDayItineraryDto,
    );
    return this.dayItineraryRepository.save(dayItinerary);
  }

  async findAll() {
    const dayItineraries = await this.dayItineraryRepository.find({
      relations: [
        'idItinerary',
        'idTips',
        'idItinerary.idUser',
        'idItinerary.idCategory',
        'idTips.idCity',
      ],
    });
    console.log(dayItineraries);
    return dayItineraries;
  }

  async findOne(id: string) {
    return this.dayItineraryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateDayItineraryDto: UpdateDayItineraryDto) {
    return this.dayItineraryRepository.update(id, updateDayItineraryDto);
  }

  async remove(id: string) {
    return this.dayItineraryRepository.delete(id);
  }
}
