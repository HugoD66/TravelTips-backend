/* eslint-disable prettier/prettier */
import { City } from 'src/city/entities/city.entity';
import { DayItinerary } from 'src/day-itinerary/entities/day-itinerary.entity';
import { Rate } from 'src/rate/entities/rate.entity';
import User from 'src/users/entities/user.entity';
import { Comment } from 'src/comment/entities/comment.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany, CreateDateColumn
} from "typeorm";
import { Picture } from 'src/picture/entities/picture.entity';

export enum TipsApprovate {
  Approvate = 'true',
  Disapprovate = 'false',
  Pending = 'pending',
}

@Entity()
export class Tip {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  address: string;
  @Column()
  price: number;

  @Column({ default: TipsApprovate.Pending })
  approvate: string;
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idUser' })
  idUser: User | string;

  @ManyToOne(() => City, (city) => city.id)
  @JoinColumn({ name: 'idCity' })
  idCity!: City | string;

  @OneToMany(() => Rate, (rate) => rate.idTips)
  rate?: Rate[];

  @OneToMany(() => Comment, (comment) => comment.idTips)
  comment?: Comment[];

  @OneToMany(() => DayItinerary, (dayItinerary) => dayItinerary.idTips)
  dayItinerary?: DayItinerary[];

  @OneToMany(() => Picture, (picture) => picture.idTips)
  pictures?: Picture; //Picture[] ?

  @Column()
  lng: string;

  @Column()
  lat: string;

  @Column({ default: 3 })
  nbApprobation: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;
}
