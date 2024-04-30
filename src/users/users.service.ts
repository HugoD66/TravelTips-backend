import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto, isUUID } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { loginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, saltOrRounds),
    });
    const insertedUser = await this.userRepository.save(newUser);
    delete insertedUser.password;
    return insertedUser;
  }

  async signIn(loginUserDto: loginUserDto) {
    const options: FindOneOptions<User> = {
      where: { mail: loginUserDto.mail },
    };
    const user = await this.userRepository.findOne(options);
    if (user == null) {
      throw new NotFoundException();
    }
    const match = await bcrypt.compare(loginUserDto.password, user.password);
    if (!match) {
      throw new UnauthorizedException();
    }
    try {
      const payload = { sub: user.id, mail: user.mail, role: user.role };
      return {
        access_token: await this.jwtService.signAsync(payload),
        id: user.id,
        role: user.role,
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    for (const user of users) {
      delete user.password;
    }
    return users;
  }
  async updateUser(id: string, updatedUserData: Partial<User>): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    const hashedPassword = await bcrypt.hash(updatedUserData.password, 10);
    updatedUserData.password = hashedPassword;

    Object.assign(user, updatedUserData);
    await this.userRepository.save(user);

    return user;
  }

  async findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  async deleteOne(id: string) {
    return this.userRepository.delete(id);
  }

  async returnUser(id: string) {
    if (!isUUID(id)) {
      throw new BadRequestException(
        "Format UUID invalide pour l'ID utilisateur",
      );
    }

    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (user === null) {
      throw new NotFoundException(`Utilisateur avec l'ID ${id} non trouvé`);
    }

    return user;
  }
}
