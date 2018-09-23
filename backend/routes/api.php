<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:Origin, Content-Type,Authorization,X-Auth-Token');
header('Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS');

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Doctor Routes
Route::post('savedoctors', 'DoctorController@doctorCreate');
Route::get('getdoctors', 'DoctorController@doctorGet');
Route::put('updatedoctors/{id}', 'DoctorController@updateDoctor');
Route::delete('deletedoctors/{id}', 'DoctorController@deleteDoctor');


//Medical Center Routes
Route::post('postcenters', 'CenterController@createCenter');
Route::get('getcenters', 'CenterController@viewCenter');
Route::put('updatecenters/{id}', 'CenterController@udpateCenter');
Route::delete('deletecenters/{id}', 'CenterController@deleteCenter');


//Appointment Routes
Route::post('regis', 'RegisterController@registerCreate');