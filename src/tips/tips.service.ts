/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tip } from './entities/tip.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { CityService } from '../city/city.service';

@Injectable()
export class TipsService {
  constructor(
    @InjectRepository(Tip)
    private tipRepository: Repository<Tip>,
    private userService: UsersService,
    private cityService: CityService,
  ) {}
  async create(createTipDto: CreateTipDto) {
    /*
      const dayItinerary = this.dayItineraryRepository.create(
      createDayItineraryDto,
    );
     */
    const tip = this.tipRepository.create(createTipDto);

    tip.idUser = await this.userService.findOne(createTipDto.idUser);
    tip.idCity = await this.cityService.findOne(createTipDto.idCity);

    return this.tipRepository.save(tip);
  }

  async findAll() {
    return this.tipRepository.find();
  }

  async findOne(id: string) {
    return this.tipRepository.findOne({ where: { id } });
  }

  async findOneByUser(userId: string): Promise<Tip[]> {
    return this.tipRepository.find({ where: { idUser: { id: userId } } });
  }
  async update(id: string, updateTipDto: UpdateTipDto) {
    return this.tipRepository.update(id, updateTipDto);
  }

  async remove(id: string) {
    return this.tipRepository.delete(id);
  }
}
