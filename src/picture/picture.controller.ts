import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { PictureService } from './picture.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { UpdatePictureDto } from './dto/update-picture.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../multer.config';
import { AuthGuard } from '../auth/auth.gards';
import { FileSizeValidationPipe } from '../pipe/FileSizeValidationPipe';
import { Picture } from './entities/picture.entity';

@Controller('picture')
export class PictureController {
  constructor(private readonly pictureService: PictureService) {}

  //@UseGuards(AuthGuard)
  @Post('upload-file/:userId/:tipsId')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async addPicture(
    @Param('userId') userId: string,
    @Param('tipsId') tipsId: string,
    @UploadedFile(new FileSizeValidationPipe()) file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const createPictureDto = {
      url: file.path,
      createdBy: userId,
      tipsId: tipsId,
    };

    return await this.pictureService.create(createPictureDto);
  }
  @Post()
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.create(createPictureDto);
  }
}
