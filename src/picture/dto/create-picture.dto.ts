/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreatePictureDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  createdBy: string;

  @IsNotEmpty()
  tipsId: string;
}
