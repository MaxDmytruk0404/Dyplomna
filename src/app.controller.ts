import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // Створення інформації користувача
  @Post('create')
  async create(@Body() data:any) {
   return this.appService.save(data)
  }

  
}
