import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ETradeService from './services/stocks-service/ETrade.service';
import IStockService, {
  SStockService,
} from './services/stocks-service/IStockService';
import NasdaqService from './services/stocks-service/Nasdaq.service';
import RobinHoodService from './services/stocks-service/RobinHood.service';

@Controller()
export class AppController {
  constructor(
    @Inject(SStockService)
    private readonly stockService: IStockService,
    private configService: ConfigService,
  ) {}
  /* @Get('/stocks')
  async exampleOne(@Query('stock') stock: string) {
    const stockService = new NasdaqService(
      this.configService.get<string>('stockService.nasdaq.accountId', ''),
      this.configService.get<string>('stockService.nasdaq.secretKey', ''),
    );

    const priceData = await stockService.retrieveStockPrice(stock ?? 'ABC');

    return priceData;
  } */

  /* @Get('/stocks')
  async exampleTwo(@Query('stock') stock: string) {
    const currentStockService = this.configService.get<string>(
      'stockService.provider',
    );
    let stockService: IStockService;

    switch (currentStockService) {
      case 'etrade':
        stockService = new ETradeService(
          this.configService.get<string>('stockService.etrade.accountId', ''),
          this.configService.get<string>('stockService.etrade.secretKey', ''),
        );
        break;
      case 'nasdaq':
        stockService = new NasdaqService(
          this.configService.get<string>('stockService.nasdaq.accountId', ''),
          this.configService.get<string>('stockService.nasdaq.secretKey', ''),
        );
        break;
      case 'robinhood':
        stockService = new RobinHoodService(
          this.configService.get<string>(
            'stockService.robinhood.accountId',
            '',
          ),
          this.configService.get<string>(
            'stockService.robinhood.secretKey',
            '',
          ),
        );
        break;
      default:
        throw new Error(
          `unknown stock service provider [${currentStockService}]`,
        );
    }

    const priceData = await stockService.retrieveStockPrice(stock || 'ABC');

    return priceData;
  } */

  @Get('/stocks')
  async exampleThree(@Query('stock') stock: string) {
    const priceData = await this.stockService.retrieveStockPrice(
      stock || 'ABC',
    );

    return priceData;
  }
}
