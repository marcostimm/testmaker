<?php

use Illuminate\Http\Request;


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

// Route::group(['middleware' => ['api','cors']], function () {
//     Auth::routes();
//     // Route::post('auth/login', 'ApiController@login');
//     // Route::group(['middleware' => 'jwt.auth'], function () {
//     //     Route::get('user', 'ApiController@getAuthUser');
//     // });
// });

// Route::post('/test', function () {
//     dd(123);
// })->middleware('auth:api');;


// Route::group(['middleware' => ['api','cors']], function () {
//     Route::post('auth/login', 'AuthController@login');
//     Route::group(['middleware' => 'jwt.auth'], function () {
//         Route::get('user', 'AuthController@getAuthUser');
//     });
// });

Route::middleware('throttle:240,1')->group( function () {
    Route::post('/auth/login', 'AuthController@login');
});

Route::group(['middleware' => ['auth:api']], function () {

    // Get the user information
    Route::get('/user', function(Request $request){
        return $request->user();
    });

    // Get Categories
    Route::get('/questions', 'Question\QuestionController@index');
    // Get Types
    Route::get('/types', 'TypeController@index');
    // Get Categories
    Route::get('/categories', 'CategoryController@index');

});