<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\AboutController;
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
Route::get('tickets', [TicketsController::class,'index']);
Route::get('tickets/{id}',[TicketsController::class,'showTickets']);
Route::post('tickets', [TicketsController::class,'storeTickets']);
Route::post('tickets/{id}/addTickets', [TicketsController::class,'addTickets']);
Route::delete('tickets/{id}', [TicketsController::class,'deleteTickets']);
// Route::post('tickets/{id}',[ TicketsController::class,'add_to_cart']);

//About
Route::get('/about',[AboutController::class,'index']);
Route::get('about',[AboutController::class,'getData']);
Route::post('about',[AboutController::class,'storeData']); // to be added for the admin
Route::post('about',[AboutController::class,'updateData']);
Route::delete('about',[AboutController::class,'deleteData']); //For the edit
