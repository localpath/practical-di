import { registerAs } from '@nestjs/config';
import { randomBytes } from 'crypto';

export default registerAs('stockService', () => ({
  provider: process.env.STOCK_SERVICE ?? 'nasdaq',
  etrade: {
    accountId: randomBytes(12).toString('hex'),
    secretKey: randomBytes(32).toString('hex'),
  },
  nasdaq: {
    accountId: randomBytes(12).toString('hex'),
    secretKey: randomBytes(32).toString('hex'),
  },
  robinhood: {
    accountId: randomBytes(12).toString('hex'),
    secretKey: randomBytes(32).toString('hex'),
  },
}));
