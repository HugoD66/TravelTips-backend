/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
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
  approvate: string;
  @IsNotEmpty()
  lng: string;
  @IsNotEmpty()
  lat: string;
}
