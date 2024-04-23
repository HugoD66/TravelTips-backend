/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateTipDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
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
  nbApprovate: number;
}
