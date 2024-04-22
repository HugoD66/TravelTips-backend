import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    const city = this.cityRepository.create(createCityDto);

    return await this.cityRepository.save(city);
  }

  async findByName(name: string) {
    return await this.cityRepository.findOne({
      where: { name },
      relations: ['tips'],
    });
  }
  async findAll() {
    return await this.cityRepository.find();
  }

  async findOne(id: string) {
    return await this.cityRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    return await this.cityRepository.update(id, updateCityDto);
  }

  async remove(id: string) {
    return await this.cityRepository.delete(id);
  }
}
