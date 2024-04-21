import { IsNotEmpty } from 'class-validator';

export class CreateGeoDto {
  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  lng: string;

  @IsNotEmpty()
  countryId: string;

  tipsId?: string;
}
