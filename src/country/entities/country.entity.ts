/* eslint-disable prettier/prettier */
import { City } from 'src/city/entities/city.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name!: string;
  @OneToMany(() => City, (city) => city.idCountry)
  city!: City[];
}
