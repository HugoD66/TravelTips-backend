import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DayItineraryService } from './day-itinerary.service';
import { CreateDayItineraryDto } from './dto/create-day-itinerary.dto';
import { UpdateDayItineraryDto } from './dto/update-day-itinerary.dto';

@Controller('day-itinerary')
export class DayItineraryController {
  constructor(private readonly dayItineraryService: DayItineraryService) {}

  @Post()
  async create(@Body() createDayItineraryDto: CreateDayItineraryDto) {
    return this.dayItineraryService.create(createDayItineraryDto);
  }

  @Get()
  async findAll() {
    return this.dayItineraryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.dayItineraryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDayItineraryDto: UpdateDayItineraryDto,
  ) {
    return this.dayItineraryService.update(id, updateDayItineraryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dayItineraryService.remove(id);
  }
}
