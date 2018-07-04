<?php

use Illuminate\Http\Request;

Route::middleware('throttle:240,1')->group( function () {
    Route::post('/auth/login', 'AuthController@login');
});

Route::group(['middleware' => ['auth:api']], function () {

    // Get exams list
    Route::get('/exams', 'ExamController@index');

    // Get the user information
    Route::get('/user', function(Request $request){
        return $request->user();
    });

    // Get Types
    Route::get('/types', 'TypeController@index');

    // Get Categories
    Route::get('/categories', 'CategoryController@index');
    // Post Category
    Route::post('/categories', 'CategoryController@create');
    // Delete Category
    Route::delete('/categories/{id}', 'CategoryController@destroy');

    // Get Entities
    Route::get('/entities', 'EntityController@index');
    // Post Category
    Route::post('/entities', 'EntityController@create');
    // Delete Category
    Route::delete('/entities/{id}', 'EntityController@destroy');

    // Get Questions
    Route::get('/questions', 'Question\QuestionController@index');
    // Get Questions Types
    Route::get('/questions-type', 'Question\TypeController@index');
    // Post Questions
    Route::post('/questions', 'Question\QuestionController@create');

});