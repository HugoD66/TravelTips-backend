import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureController } from './picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Picture } from './entities/picture.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Picture])],
  controllers: [PictureController],
  providers: [PictureService, JwtService],
  exports: [PictureService, TypeOrmModule],
})
export class PictureModule {}
