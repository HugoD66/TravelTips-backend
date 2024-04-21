import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Country } from '../../country/entities/country.entity';
import { Tip } from '../../tips/entities/tip.entity';

@Entity()
export class Geo {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  lat!: string;

  @Column()
  lng!: string;

  @ManyToOne(() => Country, (country) => country.geoCoords)
  country!: Country;

  @OneToOne(() => Tip)
  @JoinColumn()
  tip!: Tip;
}
