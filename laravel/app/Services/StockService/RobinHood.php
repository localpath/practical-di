<?php

namespace App\Services\StockService;

use App\Contracts\StocksService;
use Illuminate\Support\Str;

class RobinHood extends StockAbstract implements StocksService
{
    public function __construct(
        private string $accountId,
        private string $secretKey,
    ) {
    }

    public function retrieveStockPrice(string $stock): array
    {
        return [
            'price' => $this->generateRandomStockPrice(),
            'provider' => 'robinhood',
            'stock' => Str::upper($stock),
        ];
    }
}
