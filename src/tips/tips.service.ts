/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from "@nestjs/common";
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
    console.log('create method de tips.service')
    console.log(createTipDto)
    /*
      const dayItinerary = this.dayItineraryRepository.create(
      createDayItineraryDto,
    );
     */
    const tip = this.tipRepository.create(createTipDto);
    tip.idUser = await this.userService.findOne(createTipDto.idUser);
    if(!createTipDto.idCity) {
      tip.idCity = await this.cityService.findOne(createTipDto.idCity);

    }

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


  async update(id: string, updateTipDto: Partial<Tip>): Promise<Tip> {
    const tip: Tip = await this.tipRepository.findOne({ where: { id } });
    if (!tip) {
      throw new NotFoundException(`Tip not found with id ${id}`);
    }
    const updatedTip = this.tipRepository.merge(tip, updateTipDto);
    await this.tipRepository.save(updatedTip);
    return updatedTip;
  }


  /* async update(userId, updateTipDto: UpdateTipDto) {
     const tips = await this.tipRepository.findOne({ where: { id: updateTipDto.id } });
     if(!tips) {
       throw new NotFoundException(`Tips not found`);
     }
     const updatedTip = {
       ...tips,
       ...updateTipDto,
     }
     await this.tipRepository.save(updateTipDto);
     return updatedTip;
   }
   */

  async remove(id: string) {
    return this.tipRepository.delete(id);
  }
}
