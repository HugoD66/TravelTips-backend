import { Injectable } from '@nestjs/common';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Itinerary, ItineraryApprovate } from './entities/itinerary.entity';
import { Tip } from '../tips/entities/tip.entity';

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
    return this.itineraryRepository.find({
      relations: ['idUser', 'idCategory'],
    });
  }

  async findOne(id: string) {
    return this.itineraryRepository.findOne({
      where: { id },
      relations: ['idUser', 'idCategory'],
    });
  }

  async update(id: string, updateItineraryDto: UpdateItineraryDto) {
    return this.itineraryRepository.update(id, updateItineraryDto);
  }

  async getLatestItinerary(): Promise<Itinerary[]> {
    return await this.itineraryRepository.find({
      order: {
        createdAt: 'DESC',
      },
      take: 4,
      relations: ['idUser', 'idCategory'],
    });
  }
  async remove(id: string) {
    return this.itineraryRepository.delete(id);
  }
  async getItineraryByUser(idUser: string) {
    return this.itineraryRepository.find({
      where: { idUser: { id: idUser } },
      relations: ['idUser', 'idCategory'],
    });
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
