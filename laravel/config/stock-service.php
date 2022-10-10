<?php

use Illuminate\Support\Str;

return [

    'provider' => env('STOCK_SERVICE', 'nasdaq'),

    'etrade' => [
        'account_id' => Str::random(12),
        'secret_key' => Str::random(32),
    ],

    'nasdaq' => [
        'account_id' => Str::random(12),
        'secret_key' => Str::random(32),
    ],

    'robinhood' => [
        'account_id' => Str::random(12),
        'secret_key' => Str::random(32),
    ],
];
