<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Register;
use Validator;

class RegisterController extends Controller
{
    public function customerCreate(Request $request){
    	//Validate user input.
    	$validator = Validator::make($request->all(),[
    		'reg_name'=> 'required',
    		'reg_email'=> 'required|unique:users|email',
    		'reg_password'=> 'required',
    	]);

    	//Return errors if validation fails.
    	if($validator->fails()){
    		return response()->json($validator->errors(), 400);
    	}

    	$input = $request->all();

    	// //Encrypt errors if validation fails
    	// $input['p']

    	$user_register = User::create($input);

    	return response()->json(['details'=> $user_register], 200);
    }
}
