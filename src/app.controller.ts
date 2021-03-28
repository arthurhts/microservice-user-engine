import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IUser } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private readonly logger = new Logger(AppController.name);

  @MessagePattern('find-all-user')
  async index(): Promise<IUser[]> {
    return await this.appService.findAll();
  }

  @MessagePattern('create-user')
  async create(@Payload() data: any): Promise<IUser> {
    this.logger.log(`User: ${JSON.stringify(data)}`);
    return await this.appService.create(data.value);
  }
}
