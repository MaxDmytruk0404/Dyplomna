import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {

  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Перевірки чи є користувач в БД
  async checkCredentials(name: string, password: string, type: string): Promise<boolean> {
    const user = await this.databaseService.post.findFirst({
      where: {
        name: name,
        password: password,
        type: type,
      },
    });
    return !!user; // Повертає true, якщо користувач знайдений
  }

  
}
