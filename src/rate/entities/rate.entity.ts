/* eslint-disable prettier/prettier */
import { Tip } from 'src/tips/entities/tip.entity';
import User from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Rate {
  @PrimaryColumn()
  idUser: string;

  @PrimaryColumn()
  idTips: string;

  @Column()
  note: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'idUser' })
  user!: User;

  @ManyToOne(() => Tip, (tip) => tip.id)
  @JoinColumn({ name: 'idTips' })
  tips!: Tip;
}
