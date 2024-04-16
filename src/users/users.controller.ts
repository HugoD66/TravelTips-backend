import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  HttpStatus,
  HttpCode,
  Get,
  Req,
  UseGuards,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { loginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '../auth/auth.gards';

// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('auth/login')
  @UsePipes(new ValidationPipe())
  async signIn(@Body() signIn: loginUserDto) {
    return this.usersService.signIn(signIn);
  }
  @UseGuards(AuthGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Get(':id')
  async returnUser(@Param('id') userId: string) {
    const user = this.usersService.returnUser(userId);
    return user;
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async getUserById(
    @Param('id') userId: string,
    @Body() updateUserDto: CreateUserDto,
  ) {
    const user = this.usersService.updateUser(userId, updateUserDto);
    return user;
  }
}
