import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rate } from './entities/rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private rateRepository: Repository<Rate>,
  ) {}

  async create(createRateDto: CreateRateDto) {
    return this.rateRepository.save(createRateDto);
  }

  async findAll() {
    return this.rateRepository.find();
  }

  async findOne(id: string) {
    return this.rateRepository.findOne({ where: { id } });
  }

  async update(id: string, updateRateDto: UpdateRateDto) {
    return this.rateRepository.update(id, updateRateDto);
  }

  async remove(id: string) {
    return this.rateRepository.delete(id);
  }
}
