export default abstract class StockAbstract {
  protected generateRandomStockPrice(): string {
    return (Math.floor(Math.random() * 1000) + 1).toFixed(2);
  }
}
