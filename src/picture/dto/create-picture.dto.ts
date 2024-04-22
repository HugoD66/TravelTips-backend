/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Tip } from "../../tips/entities/tip.entity";
export class CreatePictureDto {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  createdBy: string;

  @IsNotEmpty()
  idTips: Tip;
}
