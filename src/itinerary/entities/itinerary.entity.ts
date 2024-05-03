import { IsDateString } from 'class-validator';
import { Category } from 'src/category/entities/category.entity';
import { DayItinerary } from 'src/day-itinerary/entities/day-itinerary.entity';
import User from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';

export enum ItineraryApprovate {
  Approvate = 'true',
  Disapprovate = 'false',
  Pending = 'pending',
}

@Entity()
export class Itinerary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name!: string;

  @Column()
  numberDay: number;
  @Column()
  dayOne: Date;

  @IsDateString()
  @Column()
  lastDay: Date;

  @Column({ default: true })
  public: boolean;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'idCategory' })
  idCategory: Category | string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idUser' })
  idUser: User | string;

  @Column({ default: ItineraryApprovate.Pending })
  approvate: string;

  @Column({ default: 3 })
  nbApprobation: number;

  @OneToMany(() => DayItinerary, (dayItinerary) => dayItinerary.idItinerary)
  dayItinerary!: DayItinerary[] | string[];
}
