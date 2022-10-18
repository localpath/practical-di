import { Injectable } from '@nestjs/common';
import IStockService, { StockInfo } from './IStockService';
import StockAbstract from './StockAbstract';

export const SRobinHoodService = Symbol('SRobinHoodService');

@Injectable()
export default class RobinHoodService
  extends StockAbstract
  implements IStockService
{
  constructor(private accountId: string, private secretKey: string) {
    super();
  }

  async retrieveStockPrice(stock: string): Promise<StockInfo> {
    const stockInfo: StockInfo = await Promise.resolve({
      price: this.generateRandomStockPrice(),
      provider: 'robinhood',
      stock: stock.toUpperCase(),
    });

    return stockInfo;
  }
}
