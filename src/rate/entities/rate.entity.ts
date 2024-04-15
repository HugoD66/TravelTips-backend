/* eslint-disable prettier/prettier */
import { Tip } from 'src/tips/entities/tip.entity';
import User from 'src/users/entities/user.entity';
import {Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Rate {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  idUser: string;

  @PrimaryColumn()
  idTips: string;

  @Column()
  note: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idUser' })
  user!: User | string;

  @ManyToOne(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  tips!: Tip | string;
}
