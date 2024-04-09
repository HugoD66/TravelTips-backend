/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreatePictureDto {
  @IsNotEmpty()
  idTips!: string;
  @IsNotEmpty()
  url!: string;
}
