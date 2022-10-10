<?php

namespace App\Providers;

use App\Contracts\StocksService;
use App\Services\StockService\Etrade;
use App\Services\StockService\Nasdaq;
use App\Services\StockService\RobinHood;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(StocksService::class, function () {
            $service = match ($provider = config('stock-service.provider')) {
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

            return $service;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
