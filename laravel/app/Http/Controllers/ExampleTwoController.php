<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\StockService\Etrade;
use App\Services\StockService\Nasdaq;
use App\Services\StockService\RobinHood;
use Illuminate\Http\Request;

class ExampleTwoController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $stockService = match ($provider = config('stock-service.provider')) {
            'etrade' => new Etrade(
                accountId: config('stock-service.etrade.account_id'),
                secretKey: config('stock-service.etrade.secret_key')
            ),
            'nasdaq' => new Nasdaq(
                accountId: config('stock-service.nasdaq.account_id'),
                secretKey: config('stock-service.nasdaq.secret_key')
            ),
            'robinhood' => new RobinHood(
                accountId: config('stock-service.robinhood.account_id'),
                secretKey: config('stock-service.robinhood.secret_key')
            ),
            default => throw new \RuntimeException(
                "unknown stock service provider [{$provider}]"
            )
        };

        $priceData = $stockService->retrieveStockPrice(
            stock: $request->query('stock', 'ABC')
        );

        return response()->json(
            data: $priceData
        );
    }
}
