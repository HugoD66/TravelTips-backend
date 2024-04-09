/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateTipDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  numberAdress: number;

  @IsNotEmpty()
  adress: string;
  @IsNotEmpty()
  idCity: string;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  idUser: string;
}
