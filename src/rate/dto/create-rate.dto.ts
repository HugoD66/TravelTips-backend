/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export class CreateRateDto {
  @IsNotEmpty()
  idUser: string;

  @IsNotEmpty()
  idTips: string;

  @IsNotEmpty()
  note: number;
}
