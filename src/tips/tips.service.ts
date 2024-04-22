/* eslint-disable prettier/prettier */

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipDto } from './dto/create-tip.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tip, TipsApprovate } from './entities/tip.entity';
import { FindManyOptions, Repository } from 'typeorm';
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
    if (!createTipDto.idCity) {
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

  async getPendingTips() {
    const options: FindManyOptions<Tip> = {
      where: { approvate: TipsApprovate.Pending },
      relations: ['idUser'],
    };
    const tips = await this.tipRepository.find(options);
    //delete tips.idUser.password;
    return tips;
  }

  async getApprovateTips() {
    const options: FindManyOptions<Tip> = {
      where: { approvate: TipsApprovate.Approvate },
      relations: ['idUser'],
    };
    return await this.tipRepository.find(options);
  }

  async getDisapprovateTips() {
    const options: FindManyOptions<Tip> = {
      where: { approvate: TipsApprovate.Disapprovate },
      relations: ['idUser'],
    };
    return await this.tipRepository.find(options);
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
  async approvateTips(id: string): Promise<Tip> {
    const options: FindManyOptions<Tip> = {
      where: { id: id },
    };
    const tip = await this.tipRepository.findOne(options);

    // Si le tip existe
    if (!tip) {
      throw new Error('Tip not found');
    }

    // Mettre à jour la propriété "approvate" à true
    tip.approvate = TipsApprovate.Approvate;

    // Enregistrer les modifications dans la base de données
    await this.tipRepository.save(tip);

    return tip;
  }

  async disapprovateTips(id: string): Promise<Tip> {
    const options: FindManyOptions<Tip> = {
      where: { id: id },
    };
    const tip = await this.tipRepository.findOne(options);

    // Si le tip existe
    if (!tip) {
      throw new Error('Tip not found');
    }

    // Mettre à jour la propriété "approvate" à true
    tip.approvate = TipsApprovate.Disapprovate;

    // Enregistrer les modifications dans la base de données
    await this.tipRepository.save(tip);

    return tip;
  }
}
