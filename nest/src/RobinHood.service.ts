import { Injectable } from '@nestjs/common';

export const SRobinHoodService = Symbol('SRobinHoodService');

@Injectable()
export default class RobinHoodService {
  async getPrice(stock: string): Promise<string> {
    return Promise.resolve('100.99');
  }
}
