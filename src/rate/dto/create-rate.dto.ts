/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateRateDto {
  @IsNotEmpty()
  @MinLength(3)
  note: string;
}
