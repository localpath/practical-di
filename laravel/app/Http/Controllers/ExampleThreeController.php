<?php

namespace App\Http\Controllers;

use App\Contracts\StocksService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExampleThreeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Contracts\StocksService  $stocksService
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, StocksService $stocksService)
    {
        $priceData = $stocksService->retrieveStockPrice(
            stock: $request->query('stock', 'ABC')
        );

        return response()->json(
            data: $priceData
        );
    }
}
