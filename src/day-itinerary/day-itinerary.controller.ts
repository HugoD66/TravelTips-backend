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
  create(@Body() createDayItineraryDto: CreateDayItineraryDto) {
    return this.dayItineraryService.create(createDayItineraryDto);
  }

  @Get()
  findAll() {
    return this.dayItineraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dayItineraryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDayItineraryDto: UpdateDayItineraryDto,
  ) {
    return this.dayItineraryService.update(+id, updateDayItineraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dayItineraryService.remove(+id);
  }
}
