import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    url: 'mysql://root:dCCWtMAdLFbsiNkyBLnmcfpdVtJaIDxU@gondola.proxy.rlwy.net:59865/railway',
    autoLoadEntities: true, 
    synchronize: true, 
  }),DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
