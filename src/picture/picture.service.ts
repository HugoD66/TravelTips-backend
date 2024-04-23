import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create-picture.dto';
import { Picture } from './entities/picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private pictureRepository: Repository<Picture>,
  ) {}
  async create(createPictureDto: CreatePictureDto): Promise<Picture> {
    const picture = this.pictureRepository.create(createPictureDto);
    return await this.pictureRepository.save(picture);
  }
  async findByTips(tipsId: string): Promise<Picture[]> {
    return await this.pictureRepository.find({ where: { idTips : { id: tipsId} }, relations: ['idTips'] });
  }
}
