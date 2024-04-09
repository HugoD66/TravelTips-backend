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

  @ManyToOne(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  idTips!: Tip;
}
