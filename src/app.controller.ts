import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('check-credentials')
  async checkCredentials(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    const exists = this.appService.checkCredentials(name, type);
    return { exists }
  }

  
}
