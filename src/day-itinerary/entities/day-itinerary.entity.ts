import { IsDateString } from 'class-validator';
import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Tip } from 'src/tips/entities/tip.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class DayItinerary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  slot: string;

  @IsDateString()
  @Column()
  date: Date;

  @ManyToOne(() => Itinerary, (itinerary) => itinerary.id)
  @JoinColumn({ name: 'idItinerary' })
  idItinerary: Itinerary | string;

  @ManyToOne(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  idTips: Tip | string;
}
