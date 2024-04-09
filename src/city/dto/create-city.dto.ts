/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateCityDto {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  zipCode!: number;
  @IsNotEmpty()
  idCountry!: string;
}
