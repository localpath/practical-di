import { Injectable } from '@nestjs/common';
import IStockService, { StockInfo } from './IStockService';
import StockAbstract from './StockAbstract';

@Injectable()
export default class NasdaqService
  extends StockAbstract
  implements IStockService
{
  constructor(private accountId: string, private secretKey: string) {
    super();
  }

  async retrieveStockPrice(stock: string): Promise<StockInfo> {
    const stockInfo: StockInfo = await Promise.resolve({
      price: this.generateRandomStockPrice(),
      provider: 'nasdaq',
      stock: stock.toUpperCase(),
    });

    return stockInfo;
  }
}
