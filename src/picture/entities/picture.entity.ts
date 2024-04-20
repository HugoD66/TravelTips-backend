/* eslint-disable prettier/prettier */
import { Tip } from 'src/tips/entities/tip.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
@Entity()
export class Picture {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  url!: string;

  @Column()
  createdBy: string;

  @ManyToOne(() => Tip, (tip) => tip.pictures)
  @JoinColumn({ name: 'idTips' })
  idTips!: Tip;
}