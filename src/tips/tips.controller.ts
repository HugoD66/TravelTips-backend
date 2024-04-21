/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from "@nestjs/common";
import { TipsService } from './tips.service';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';

@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) {}

  @Post()
  async create(@Body() createTipDto: CreateTipDto) {
    console.log('create method de tips.controller')
    console.log(createTipDto)
    return this.tipsService.create(createTipDto);
  }

  @Get()
  async findAll() {
    return this.tipsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tipsService.findOne(id);
  }

  @Get('myTips/:id')
  async findOneByUser(@Param('id') id: string) {
    return this.tipsService.findOneByUser(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTipDto: UpdateTipDto) {
    return this.tipsService.update(id, updateTipDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tipsService.remove(id);
  }
}
