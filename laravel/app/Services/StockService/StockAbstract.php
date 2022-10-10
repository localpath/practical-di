<?php

namespace App\Services\StockService;

abstract class StockAbstract
{
    protected function generateRandomStockPrice(): string
    {
        return number_format(
            num: mt_rand(min: 1, max: 1000),
            decimals: 2
        );
    }
}
