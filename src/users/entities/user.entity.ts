/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsEmail, IsOptional } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Itinerary } from 'src/itinerary/entities/itinerary.entity';
import { Comment } from 'src/comment/entities/comment.entity';
import { Rate } from 'src/rate/entities/rate.entity';
import { Tip } from 'src/tips/entities/tip.entity';

//Creation database

export enum UserRole {
  User = 'User',
  Admin = 'Admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: string;

  @Column({ unique: true })
  @IsEmail({}, { message: "L'adresse e-mail n'est pas valide" })
  mail: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ default: UserRole.User })
  @IsOptional()
  role: UserRole;

  @OneToMany(() => Itinerary, (itinerary) => itinerary.idUser)
  itinerary?: Itinerary[];

  @OneToMany(() => Comment, (comment) => comment.idUser)
  comment?: Comment[];

  @OneToMany(() => Rate, (rate) => rate.idUser)
  rate?: Rate[];

  @OneToMany(() => Tip, (tip) => tip.idUser)
  tip?: Tip[];
}

export default User;
