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
Route::get('tickets', TicketsController::class,'index');
Route::get('tickets/{id}',TicketsController::class,'showTickets');
Route::post('tickets', TicketsController::class,'storeTickets');
Route::post('tickets/{id}/addTickets', TicketsController::class,'addTickets');
Route::delete('tickets/{id}', TicketsController::class,'deleteTickets');
Route::post('tickets/{id}', TicketsController::class,'add_to_cart');

//About
Route::post('about',AboutController::class,'index');
Route::post('about',AboutController::class,'getData');
Route::post('about',AboutController::class,'storeData'); // to be added for the admin
Route::post('about',AboutController::class,'updateTitle');
Route::post('about',AboutController::class,'updateBody'); //For the edit
Route::post('about',AboutController::class,'delete'); //For the edit
