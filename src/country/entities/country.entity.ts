import { City } from 'src/city/entities/city.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Geo } from '../../geo/entities/geo.entity';

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  name!: string;
  @OneToMany(() => City, (city) => city.idCountry)
  city!: City[] | string[];

  @OneToMany(() => Geo, (geoCoord) => geoCoord.country)
  geoCoords?: Geo[];
}
