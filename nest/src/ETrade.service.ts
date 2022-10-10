export class ETradeService {
  async getPrice(stock: string): Promise<string> {
    return Promise.resolve('100.99');
  }
}
