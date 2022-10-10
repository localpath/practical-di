import { Controller, Get, Query } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ETradeService } from './ETrade.service';
import NasdaqService from './Nasdaq.service';
import RobinHoodService from './RobinHood.service';

@Controller()
export class AppController {
  constructor(private configService: ConfigService) {}

  /* @Get()
  async getStockPrice(@Query('stock') stock: string) {
    const service = new ETradeService();
    const price = await service.getPrice(stock);
    return { price: price, stock: stock };
  } */

  @Get()
  async getStockPrice(@Query('stock') stock: string) {
    let service;
    switch (this.configService.get<string>('STOCK_SERVICE')) {
      case 'etrade':
        service = new ETradeService();
        break;
      case 'nasdaq':
        service = new NasdaqService();
        break;
      case 'robinhood':
        service = new RobinHoodService();
        break;
      default:
        throw new Error('No price provider found');
    }
    const price = await service.getPrice(stock);
    return { price: price, stock: stock };
  }
}
