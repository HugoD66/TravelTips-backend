import { Module } from '@nestjs/common';
import { TipsService } from './tips.service';
import { TipsController } from './tips.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tip } from './entities/tip.entity';
import { UsersModule } from '../users/users.module';
import { CityModule } from '../city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tip]), UsersModule, CityModule],
  controllers: [TipsController],
  providers: [TipsService],
  exports: [TipsService, TypeOrmModule],
})
export class TipsModule {}
