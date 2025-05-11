import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Перевірки чи є користувач в БД
  async checkCredentials(
    name: string,
    password: string,
    type: string,
  ): Promise<boolean> {
    if (!name || !password) {
      return false;
    }

    const user = await this.databaseService.post.findFirst({
      where: {
        name,
        password,
        type,
      },
    });

    return !!user;
  }

  // Отриумю дані з БД по БС
  async getBSInfo(name: string, type: string) {
    const user = await this.databaseService.post.findFirst({
      where: {
        name: name,
        type: type,
      },
    });
    return user?.data;
  }

  // Отриумю дані з БД по ОВ
  async getOWInfo(name: string, type: string) {
    const user = await this.databaseService.post.findFirst({
      where: {
        name: name,
        type: type,
      },
    });
    return user?.data;
  }
}
