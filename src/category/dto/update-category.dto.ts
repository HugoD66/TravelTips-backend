/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { MinLength } from 'class-validator';

export class UpdateCategoryDto  {
  @MinLength(3)
  name!: string;
}
