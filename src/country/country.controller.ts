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
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { AuthGuard } from '../auth/auth.gards';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createCountryDto: CreateCountryDto) {
    return this.countryService.create(createCountryDto);
  }
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.countryService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get('/get-by-name/:countryName')
  async findOneByName(@Param('countryName') countryName: string) {
    return this.countryService.findOneByName(countryName);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.countryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCountryDto: UpdateCountryDto,
  ) {
    return this.countryService.update(id, updateCountryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.countryService.remove(id);
  }
}
