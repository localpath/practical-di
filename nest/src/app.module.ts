import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ETradeService } from './ETrade.service';
import NasdaqService from './Nasdaq.service';
import RobinHoodService, { SRobinHoodService } from './RobinHood.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    ETradeService,
    NasdaqService,
    RobinHoodService,
    {
      provide: SRobinHoodService,
      useClass: RobinHoodService,
    },
  ],
})
export class AppModule {}
