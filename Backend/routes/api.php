<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Tickets(Products)
Route::get('/tickets', 'TicketsController@index');
Route::get('/tickets/{id}', 'TicketsController@show');
Route::post('/tickets', 'TicketsController@store');
Route::post('/tickets/{id}/add', 'TicketsController@add');
Route::delete('/tickets/{id}', 'TicketsController@delete');
Route::post('/tickets/{id}', 'TicketsController@add_to_cart');

//About
Route::post('about','AboutController@getData');
Route::post('about','AboutController@storeData'); // to be added for the admin
Route::post('about','AboutController@updateTitle');
Route::post('about','AboutController@updateBody'); //For the edit
