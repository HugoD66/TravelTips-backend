import { PartialType } from '@nestjs/mapped-types';
import { CreateDayItineraryDto } from './create-day-itinerary.dto';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class UpdateDayItineraryDto extends PartialType(CreateDayItineraryDto) {
  @IsNotEmpty()
  idDay!: string;

  @IsNotEmpty()
  idTips!: string;

  @IsNotEmpty()
  OrderInDay!: number;

  @IsDateString()
  @IsNotEmpty()
  date!: Date;
}
