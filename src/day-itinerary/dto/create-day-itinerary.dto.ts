import { IsNotEmpty, IsDateString } from 'class-validator';
export class CreateDayItineraryDto {
  @IsNotEmpty()
  idDay!: string;

  @IsNotEmpty()
  idTips!: string;

  @IsNotEmpty()
  idItinerary!: string;

  @IsNotEmpty()
  OrderInDay!: number;

  @IsDateString()
  @IsNotEmpty()
  date!: Date;
}
