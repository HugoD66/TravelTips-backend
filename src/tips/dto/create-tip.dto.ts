/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Geo } from "../../geo/entities/geo.entity";
export class CreateTipDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  adress: string;
  @IsNotEmpty()
  idCity: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  idUser: string;
  @IsNotEmpty()
  approvate: boolean;
  @IsNotEmpty()
  public: boolean;
  @IsNotEmpty()
  geo: Geo;
}
