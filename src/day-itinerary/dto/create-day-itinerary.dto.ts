import { IsNotEmpty, IsDateString } from 'class-validator';
export class CreateDayItineraryDto {
  @IsNotEmpty()
  idDay!: string;

  @IsNotEmpty()
  idTips!: string;

  @IsNotEmpty()
  idItinerary!: string;

  @IsNotEmpty()
  slot!: string;

  @IsDateString()
  @IsNotEmpty()
  date!: Date;
}
