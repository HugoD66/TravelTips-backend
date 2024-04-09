/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateCommentDto {
  @IsNotEmpty()
  idTips!: string;
  @IsNotEmpty()
  idUser!: string;
  @IsNotEmpty()
  comment!: string;
  @IsNotEmpty()
  date!: Date;
}
