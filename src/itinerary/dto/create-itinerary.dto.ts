import { IsNotEmpty } from "class-validator";

export class CreateItineraryDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  nbApprovate: number;
  @IsNotEmpty()
  numberDay: number;
  dayOne: Date;
  lastDay: Date;
  @IsNotEmpty()
  public: boolean;
  idCategory?: string;
  idUser: string;
  approvate: string;
  dayItinerary: string[];
}
