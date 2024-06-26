import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async create(createCountryDto: CreateCountryDto) {
    const countryName = createCountryDto.name;
    const isAtleastSameCountryInDb = await this.countryRepository.findOne({
      where: { name: countryName },
    });
    if (isAtleastSameCountryInDb) {
      return isAtleastSameCountryInDb;
    } else {
      const country = this.countryRepository.create(createCountryDto);
      return await this.countryRepository.save(country);
    }
  }

  async findAll() {
    return await this.countryRepository.find();
  }

  async findOne(id: string) {
    return await this.countryRepository.findOne({ where: { id } });
  }

  async findOneByName(countryName: string) {
    return await this.countryRepository.findOne({
      where: { name: countryName },
      relations: ['city'],
    });
  }

  async update(id: string, updateCountryDto: UpdateCountryDto) {
    return await this.countryRepository.update(id, updateCountryDto);
  }

  async remove(id: string) {
    return await this.countryRepository.delete(id);
  }
}
