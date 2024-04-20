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

  /*@UseGuards(AuthGuard)
  @Post(`upload-file/:userId/:tipsId`)
  @UseInterceptors(FileInterceptor(`file`, multerConfig))
  async addPicture(
    @Param(`userId`) userId: string,
    @Param(`tipsId`) tipsId: string,
    @UploadedFile(new FileSizeValidationPipe()) file: Express.Multer.File,
  ): Promise<Picture> {
    return await this.pictureService.create(userId, tipsId, { url: file.path });
  }*/

  @UseGuards(AuthGuard)
  @Post('upload-file/:userId/:tipsId')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async addPicture(
    @Param('userId') userId: string,
    @Param('tipsId') tipsId: string,
    @UploadedFile(FileSizeValidationPipe) file: Express.Multer.File,
  ): Promise<Picture> {
    console.log('file', file);
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    const createPictureDto = new CreatePictureDto();
    createPictureDto.url = file.path;
    createPictureDto.createdBy = userId;
    createPictureDto.tipsId = tipsId;

    return await this.pictureService.create(createPictureDto);
  }

  @Post()
  create(@Body() createPictureDto: CreatePictureDto) {
    return this.pictureService.create(createPictureDto);
  }

  @Get()
  findAll() {
    return this.pictureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pictureService.findOne(+id);
  }

  @Post(`upload-file/:id`)
  @UseGuards(AuthGuard)
  @Post(`upload-file/:userId/:tipsId`)
  @UseInterceptors(FileInterceptor(`file`, multerConfig))
  update(@Param('id') id: string, @Body() updatePictureDto: UpdatePictureDto) {
    return this.pictureService.update(id, updatePictureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pictureService.remove(+id);
  }
}
