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

// Auth::routes();
Route::redirect('/', '/dashboard', 301);

Route::any('{slug}', 'ReactController@index')
        // ->where(['all' => '.*'])
        // ->middleware('auth')
        ->where('slug', '(?!api)([A-z\d-\/_.]+)?');


// Route::get('{slug}', function() {
//         return view('index');
//     })
//     ->where('slug', '(?!api)([A-z\d-\/_.]+)?');
     


// Route::middleware(['auth'])->group(
//     function () {

//         Route::get('/dashboard',   'DashboardController@index')->name('dashboard');
//         Route::get('/exams',       'ExamController@index')->name('exams');
//         Route::get('/questions',   'QuestionController@index')->name('questions');
//         Route::get('/formatting',  'FormattingController@index')->name('formatting');

//     }
// );