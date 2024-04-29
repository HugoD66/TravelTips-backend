import { Injectable } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Itinerary, ItineraryApprovate } from './entities/itinerary.entity';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(Itinerary)
    private itineraryRepository: Repository<Itinerary>,
  ) {}
  async create(createItineraryDto: CreateItineraryDto): Promise<Itinerary> {
    const itinerary: Itinerary =
      this.itineraryRepository.create(createItineraryDto);
    const itinerarySaved = this.itineraryRepository.save(itinerary);
    return itinerarySaved;
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

  async approvateItinerary(id: string) {
    const options: FindManyOptions<Itinerary> = {
      where: { id: id },
      relations: ['idUser', 'idCategory'],
    };
    const itinerary = await this.itineraryRepository.findOne(options);
    if (!itinerary) {
      throw new Error('Itinerary not found');
    }
    itinerary.approvate = ItineraryApprovate.Approvate;

    await this.itineraryRepository.save(itinerary);
    return itinerary;
  }
  async disapprovateItinerary(id: string) {
    const options: FindManyOptions<Itinerary> = {
      where: { id: id },
    };
    const itinerary = await this.itineraryRepository.findOne(options);
    if (!itinerary) {
      throw new Error('Itinerary not found');
    }
    itinerary.approvate = ItineraryApprovate.Disapprovate;

    await this.itineraryRepository.save(itinerary);
    return itinerary;
  }

  async getPendingItinerary() {
    const options: FindManyOptions<Itinerary> = {
      where: { approvate: ItineraryApprovate.Pending },
      relations: ['idUser', 'idCategory'],
    };
    return this.itineraryRepository.find(options);
  }

  async getApprovateItinerary() {
    const options: FindManyOptions<Itinerary> = {
      where: { approvate: ItineraryApprovate.Approvate },
      relations: ['idUser', 'idCategory'],
    };
    return this.itineraryRepository.find(options);
  }

  async getDisapprovateItinerary() {
    const options: FindManyOptions<Itinerary> = {
      where: { approvate: ItineraryApprovate.Disapprovate },
      relations: ['idUser', 'idCategory'],
    };
    return this.itineraryRepository.find(options);
  }
}
