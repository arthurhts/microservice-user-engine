import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './database/users.entity';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find();
  }

  async create(user: IUser): Promise<IUser> {
    return this.userRepository.save(user);
  }
}
