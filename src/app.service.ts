import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {

  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  // Збереження інформації коли користувач зареєструвався
  async save(dto: any) {
    console.log(dto)
    return this.databaseService.post.create({
      data: {
        data: dto,
      },
    });
  }
}
