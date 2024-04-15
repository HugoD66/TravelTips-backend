import { MinLength, IsEmail, IsNotEmpty } from 'class-validator';

export class loginUserDto {
  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
