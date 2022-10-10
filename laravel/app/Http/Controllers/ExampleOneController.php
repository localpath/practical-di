<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\StockService\Nasdaq;
use Illuminate\Http\Request;

class ExampleOneController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $stockService = new Nasdaq(
            accountId: config('stock-service.nasdaq.account_id'),
            secretKey: config('stock-service.nasdaq.secret_key')
        );

        $priceData = $stockService->retrieveStockPrice(
            stock: $request->query('stock', 'ABC')
        );

        return response()->json(
            data: $priceData
        );
    }
}
