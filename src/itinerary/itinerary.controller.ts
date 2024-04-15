import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';

@Controller('itinerary')
export class ItineraryController {
  constructor(private readonly itineraryService: ItineraryService) {}

  @Post()
  async create(@Body() createItineraryDto: CreateItineraryDto) {
    return this.itineraryService.create(createItineraryDto);
  }

  @Get()
  async findAll() {
    return this.itineraryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.itineraryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItineraryDto: UpdateItineraryDto,
  ) {
    return this.itineraryService.update(id, updateItineraryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.itineraryService.remove(id);
  }
}
