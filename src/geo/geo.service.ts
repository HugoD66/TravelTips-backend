import { Injectable } from '@nestjs/common';
import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { Geo } from './entities/geo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GeoService {
  constructor(
    @InjectRepository(Geo)
    private geoRepository: Repository<Geo>,
  ) {}
  async create(createGeoDto: CreateGeoDto) {
    console.log(createGeoDto);
    console.log(createGeoDto);
    console.log(createGeoDto);
    console.log(createGeoDto);
    console.log(createGeoDto);
    const geo = this.geoRepository.create(createGeoDto);
    return await this.geoRepository.save(geo);
  }

  async findAll() {
    return await this.geoRepository.find();
  }

  async findOne(id: string) {
    return await this.geoRepository.findOne({ where: { id } });
  }

  async update(id: string, updateGeoDto: UpdateGeoDto) {
    return await this.geoRepository.update(id, updateGeoDto);
  }

  async remove(id: string) {
    return await this.geoRepository.delete(id);
  }
}
