<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/{controller}/{method}',function($controller, $method, Request $request){
    return App::make('\App\Http\Controllers\\'.ucfirst($controller).'Controller')->callAction($method, array($request));
});