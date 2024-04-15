/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {Country} from "../../country/entities/country.entity";
export class CreateCityDto {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  zipCode!: number;
  @IsNotEmpty()
  idCountry: Country | string;
}
