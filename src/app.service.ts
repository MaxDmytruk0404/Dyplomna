import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {

  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // отримання інформації з бази днаих
  async getInfo(name: string): Promise<any> {
    const user = await this.databaseService.post.findFirst({
      where: {
        data: {
          path: '$.name',
          equals: name,
        },
      },
    });


    return user?.data ?? null;
  }

  // Додавання інформаціх до БД
  async sendInfo(data: any, name: string): Promise<any> {

    const user = await this.databaseService.post.findFirst({
      where: {
        data: {
          path: '$.name',
          equals: name, 
        },
      },
    });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return this.databaseService.post.update({
      where: {
        id: user.id,
      },
      data: {
        data: data
      }

    });
  }
}
