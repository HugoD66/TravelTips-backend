import { IsNotEmpty } from 'class-validator';
import { Geo } from '../entities/geo.entity';

export class CreateGeoDto {
  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  lng: string;

  @IsNotEmpty()
  countryId: string;

  tipsId?: string;
}
