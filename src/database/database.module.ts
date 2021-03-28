import { UserEntity } from './users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'db-nest',
      username: 'admin',
      password: '123456789',
      entities: [UserEntity],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
