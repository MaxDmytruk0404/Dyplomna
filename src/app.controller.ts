import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('get-info/:name')
  async getInfo(@Param('name') name: string) {
    const exists = await this.appService.getInfo(name);
    return { exists }
  }

  @Post('sendInfo/:name')
  async sendInfo(@Body() data:any, @Param('name') name: string) {
   return this.appService.sendInfo(data, name)
  }
  
}
