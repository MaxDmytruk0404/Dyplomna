import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {

  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Перевірки чи є користувач в БД
  async checkCredentials(name: string, type: string) {
    const user = await this.databaseService.post.findFirst({
      where: {
        name: name,
        type: type,
      },
    });
    return user?.data || undefined// Повертає true, якщо користувач знайдений
  }

  
}
