/* eslint-disable prettier/prettier */
import { Country } from 'src/country/entities/country.entity';
import { Tip } from 'src/tips/entities/tip.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  zipCode!: number;

  @ManyToOne(() => Country, (country) => country.id)
  @JoinColumn({ name: 'idCountry' })
  idCountry: Country;

  @OneToMany(() => Tip, (tip) => tip.id)
  tips!: Tip[];
}
