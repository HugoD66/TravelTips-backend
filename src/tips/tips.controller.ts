/* eslint-disable prettier/prettier */
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
import { TipsService } from './tips.service';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';
import { AuthGuard } from '../auth/auth.gards';

@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) {}
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createTipDto: CreateTipDto) {
    return this.tipsService.create(createTipDto);
  }

  @UseGuards(AuthGuard)
  @Get('latest')
  getLatestTips() {
    return this.tipsService.getLatestTips();
  }

  @UseGuards(AuthGuard)
  @Get('by-city/:cityName')
  getTipsByCityName(@Param('cityName') cityName: string) {
    return this.tipsService.getTipsByCityName(cityName);
  }

  @UseGuards(AuthGuard)
  @Get('by-name/:name')
  getTipsByName(@Param('name') name: string) {
    return this.tipsService.getTipsByName(name);
  }

  @UseGuards(AuthGuard)
  @Patch('approvate/:id')
  async updateApprovate(@Param('id') id: string) {
    return this.tipsService.approvateTips(id);
  }
  @UseGuards(AuthGuard)
  @Patch('disapprove/:id')
  async disapproveTip(@Param('id') id: string) {
    return this.tipsService.disapprovateTips(id);
  }
  @UseGuards(AuthGuard)
  @Get('pendingTips')
  async getPendingTips() {
    return this.tipsService.getPendingTips();
  }
  @UseGuards(AuthGuard)
  @Get('approvateTips')
  async getApprovateTips() {
    return this.tipsService.getApprovateTips();
  }
  @UseGuards(AuthGuard)
  @Get('disapproveTips')
  async getDisapproveTipsUser() {
    return this.tipsService.getDisapprovateTips();
  }

  @UseGuards(AuthGuard)
  @Get('users/:id')
  async getPendingTipsUser(@Param('id') id: string) {
    return this.tipsService.getTipsUser(id);
  }
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.tipsService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tipsService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTipDto: UpdateTipDto) {
    return this.tipsService.update(id, updateTipDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tipsService.remove(id);
  }
}
