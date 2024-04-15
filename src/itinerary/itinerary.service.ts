import { Injectable } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Itinerary } from './entities/itinerary.entity';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
  ) {}
  async create(createItineraryDto: CreateItineraryDto) {
    return this.itineraryRepository.save(createItineraryDto);
  }

  async findAll() {
    return this.itineraryRepository.find();
  }

  async findOne(id: string) {
    return this.itineraryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateItineraryDto: UpdateItineraryDto) {
    return this.itineraryRepository.update(id, updateItineraryDto);
  }

  async remove(id: string) {
    return this.itineraryRepository.delete(id);
  }
}
