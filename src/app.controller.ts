import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  // Перевірка на вхід
  @Get('check-credentials')
  async checkCredentials(
    @Query('name') name: string,
    @Query('password') password: string,
    @Query('type') type: string,
  ): Promise<boolean> {
    return this.appService.checkCredentials(name, password, type);
  }

  // Отримання БС
   @Get('get-BS')
  async getBS(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    return this.appService.getBSInfo(name, type);
  }

  // Отримання ОВ
   @Get('get-OW')
  async getOW(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    return this.appService.getOWInfo(name, type);
  }

  // Отримання усіх результатів тестування 
  @Get('get-Res')
  async getRes(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    return this.appService.getRes(name, type);
  }

  // Оновлення інформації по всіх результатах тестування 
  @Post('send-Res')
  async sendRes(
    @Query('name') name: string,
    @Query('type') type: string,
    @Query('data') data: any
  ) {
    return this.appService.getRes(name, type, data);
  }
  
}
