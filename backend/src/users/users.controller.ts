import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LoginUserDto, SignupUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('signup')
  signup(@Body() dto: SignupUserDto) {
    return this.usersService.signup(dto);
  }

  @Post('login')
  login(@Body() dto: LoginUserDto) {
    return this.usersService.login(dto);
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }
}
