import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { AuthGuard } from '../auth/auth.gards';

@Controller('itinerary')
export class ItineraryController {
  constructor(private readonly itineraryService: ItineraryService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createItineraryDto: CreateItineraryDto) {
    return this.itineraryService.create(createItineraryDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.itineraryService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.itineraryService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateItineraryDto: UpdateItineraryDto,
  ) {
    return this.itineraryService.update(id, updateItineraryDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.itineraryService.remove(id);
  }
}
