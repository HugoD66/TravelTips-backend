/* eslint-disable prettier/prettier */
import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.id)
  idItinerary!: Itinerary[] | string[];
}
