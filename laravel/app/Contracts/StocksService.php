<?php

namespace App\Contracts;

interface StocksService
{
    public function retrieveStockPrice(string $stock): array;
}
