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

// Route::get('/', function () {
//     // $blogArticle = DB::table('blogs')->get(); // get all rows from the database.
//     return view('welcome');
//     // return $blogArticle;
// });

Route::any('{all}', function () {
    return view('welcome');
})->where(['all' => '.*']);