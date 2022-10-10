import { Injectable } from '@nestjs/common';

@Injectable()
export default class NasdaqService {
  async getPrice(stock: string): Promise<string> {
    return Promise.resolve('100.99');
  }
}
