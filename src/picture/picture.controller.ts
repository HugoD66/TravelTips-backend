import {
  Controller,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  BadRequestException, Get
} from "@nestjs/common";
import { PictureService } from './picture.service';
import { CreatePictureDto } from './dto/create-picture.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../multer.config';
import { FileSizeValidationPipe } from '../pipe/FileSizeValidationPipe';
import { TipsService } from '../tips/tips.service';

@Controller('picture')
export class PictureController {
  constructor(
    private readonly pictureService: PictureService,
    private tipsService: TipsService,
  ) {}

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
    const tip = await this.tipsService.findOne(tipsId);
    const createPictureDto = {
      url: file.path,
      createdBy: userId,
      idTips: tip,
    };

    return await this.pictureService.create(createPictureDto);
  }

  @Get(':tipsId')
  async getPictures(@Param('tipsId') tipsId: string) {
    const tipsList =  await this.pictureService.findByTips(tipsId);

    return tipsList;
  }
  @Post()
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.create(createPictureDto);
  }
}
