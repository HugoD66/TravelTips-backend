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
  zipCode?: string;

  @ManyToOne(() => Country, (country) => country.id)
  @JoinColumn({ name: 'idCountry' })
  idCountry: Country |string;

  @OneToMany(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  tips!: Tip[] |string[];
}
