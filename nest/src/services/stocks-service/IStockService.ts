export const SStockService = Symbol('SStockService');

export type StockInfo = {
  price: string;
  provider: 'etrade' | 'nasdaq' | 'robinhood';
  stock: string;
};

export default interface IStockService {
  retrieveStockPrice(stock: string): Promise<StockInfo>;
}
