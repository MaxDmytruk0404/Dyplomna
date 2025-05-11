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
    @Query('password') password: string,
    @Query('type') type: string,
  ): Promise<boolean> {
    return this.appService.checkCredentials(name, password, type);
  }

   @Get('get-BS')
  async getBS(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    return this.appService.getBSInfo(name, type);
  }


   @Get('get-OW')
  async getOW(
    @Query('name') name: string,
    @Query('type') type: string,
  ) {
    return this.appService.getOWInfo(name, type);
  }
  
}
