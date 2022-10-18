import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import stockServiceConfig from './config/stock-service.config';
import StocksServiceModule from './services/stocks-service/StocksService.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [stockServiceConfig],
    }),
    StocksServiceModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
