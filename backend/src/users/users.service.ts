import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto, SignupUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  signup(dto: SignupUserDto) {
    return this.userRepository.save(dto);
  }

  login(dto: LoginUserDto) {
    return this.userRepository.query(
      `SELECT * FROM users WHERE email = '${dto.email}' AND password = '${dto.password}' LIMIT 1`,
    )[0];
  }

  getUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
