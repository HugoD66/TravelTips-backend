import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  async create(@Body() createRateDto: CreateRateDto) {
    return this.rateService.create(createRateDto);
  }

  @Get()
  async findAll() {
    return this.rateService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rateService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRateDto: UpdateRateDto) {
    return this.rateService.update(id, updateRateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.rateService.remove(id);
  }
}
