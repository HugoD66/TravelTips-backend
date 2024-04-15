/* eslint-disable prettier/prettier */
import { Tip } from 'src/tips/entities/tip.entity';
import User from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  @Column()
  comment!: string;
  @Column()
  date!: Date;

  @ManyToOne(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  idTips: Tip |string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idUser' })
  idUser: User |string;
}
