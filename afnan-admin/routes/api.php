<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('setLocale')->group(callback: function () {
    Route::get('categories', [\App\Http\Controllers\Front\CategoryController::class, 'index']);
    Route::get('products', [\App\Http\Controllers\Front\ProductController::class, 'index']);
    Route::get('blogs', [\App\Http\Controllers\Front\BlogsController::class, 'index']);
    Route::get('sitesetting', [\App\Http\Controllers\Front\SettingController::class, 'index']);
    Route::get('blogs/{id}', [\App\Http\Controllers\Front\BlogsController::class, 'getById']);
    Route::get('blogs-rand', [\App\Http\Controllers\Front\BlogsController::class, 'getRandom']);

    // home page 
    Route::get('looks', [\App\Http\Controllers\Front\HomeController::class, 'ourLook']);
    Route::get('collections', [\App\Http\Controllers\Front\HomeController::class, 'getCollections']);
    Route::get('slideshows', [\App\Http\Controllers\Front\HomeController::class, 'getSlideShow']);
    Route::get('latest-collections', [\App\Http\Controllers\Front\HomeController::class, 'latestCollections']);
    Route::get('catalog', [\App\Http\Controllers\Front\HomeController::class, 'catalog']);

    // product page
    Route::get('products/{id}', [\App\Http\Controllers\Front\ProductController::class, 'getByCategoryId']);
    Route::get('product/{id}', [\App\Http\Controllers\Front\ProductController::class, 'getById']);
    Route::get('collections/{id}', [\App\Http\Controllers\Front\CategoryController::class, 'collectionById']);
});

Route::get('dimensions', [\App\Http\Controllers\Front\ProductController::class, 'dimensions']);


//change language route

Route::get('/lang/{lang}', function ($lang) {
    if (in_array($lang, config('app.languages'))) {
        app()->setLocale($lang);
        return "lang" . $lang;
    } else {
        app()->setLocale(config('app.fallback_locale'));
        return "lang" . $lang;
    }
})
    ->withoutMiddleware('auth');
