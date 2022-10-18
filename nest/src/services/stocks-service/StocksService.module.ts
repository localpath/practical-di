import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ETradeService from './ETrade.service';
import IStockService, { SStockService } from './IStockService';
import NasdaqService from './Nasdaq.service';
import RobinHoodService from './RobinHood.service';

@Module({
  exports: [SStockService],
  imports: [ConfigModule],
  providers: [
    {
      provide: SStockService,
      useFactory: (configService: ConfigService) => {
        const currentStockService = configService.get<string>(
          'stockService.provider',
        );
        let stockService: IStockService;

        switch (currentStockService) {
          case 'etrade':
            stockService = new ETradeService(
              configService.get<string>('stockService.etrade.accountId', ''),
              configService.get<string>('stockService.etrade.secretKey', ''),
            );
            break;
          case 'nasdaq':
            stockService = new NasdaqService(
              configService.get<string>('stockService.nasdaq.accountId', ''),
              configService.get<string>('stockService.nasdaq.secretKey', ''),
            );
            break;
          case 'robinhood':
            stockService = new RobinHoodService(
              configService.get<string>('stockService.robinhood.accountId', ''),
              configService.get<string>('stockService.robinhood.secretKey', ''),
            );
            break;
          default:
            throw new Error(
              `unknown stock service provider [${currentStockService}]`,
            );
        }

        return stockService;
      },
      inject: [ConfigService],
    },
  ],
})
export default class StocksServiceModule {}
