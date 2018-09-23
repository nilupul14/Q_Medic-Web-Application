<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Doctor;
use Validator;

class DoctorController extends Controller
{
    // Save doctor
    public function doctorCreate(Request $request){
    	//Validate user input.
    	$validator = Validator::make($request->all(),[
    		'name'=> 'required',
    		'desc'=> 'required',
    		'address'=> 'required',
    		'email'=> 'required|unique:users|email',
    	]);

    	//Return errors if validation fails.
    	if($validator->fails()){
    		return response()->json($validator->errors(), 400);
    	}

    	$input = $request->all();

    	// //Encrypt errors if validation fails
    	// $input['p']

    	$doctor = Doctor::create($input);

    	return response()->json(['details'=> $doctor], 200);
    }

    // Get doctors
    public function doctorGet(){

        $doctors = Doctor::all();

        return $doctors;

        // return response()->json(['doctors'=> $doctors], 200); 

    }


    // update docrtor
    public function updateDoctor(Request $request, $id){
        $validator = Validator::make($request->all(),[
            'name'=> 'required',
            'desc'=> 'required',
            'address'=> 'required',
            'email'=> 'required|unique:users|email',
        ]);

        //Return errors if validation fails.
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        // update goes here
        $doctor = Doctor::find($id);

        if ($doctor !=null) {
            # code..        
            $doctor->name = $request['name'];
            $doctor->desc = $request['desc'];
            $doctor->address = $request['address'];
            $doctor->email = $request['email'];

            $result = $doctor->save();

            return response()->json(['details'=> $result], 200);
        }else {
            return response()->json(['details'=> "User not found!"], 404);
        }
    }

 
    // delete docrtor
    public function deleteDoctor($id){

        $doctor = Doctor::find($id);

        $result = $doctor->delete();

        return response()->json(['message'=> $result], 400); 

    }
}
