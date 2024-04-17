/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import {Country} from "../../country/entities/country.entity";
export class CreateCityDto {
  @IsNotEmpty()
  name!: string;
  @IsNotEmpty()
  @IsString()
  zipCode!: string;
  @IsNotEmpty()
  idCountry: Country | string;
}
