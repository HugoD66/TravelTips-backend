import { Module } from '@nestjs/common';
import { GeoService } from './geo.service';
import { GeoController } from './geo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geo } from './entities/geo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Geo])],
  controllers: [GeoController],
  providers: [GeoService],
  exports: [GeoService, TypeOrmModule],
})
export class GeoModule {}
