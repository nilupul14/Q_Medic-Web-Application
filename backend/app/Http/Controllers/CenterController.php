<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Center;
use Validator;

class CenterController extends Controller{

        //Save M-Center data to db
    public function createCenter(Request $request){
        //validate user input

    	$validator = Validator::make($request->all(),[
    		'cen_name' => 'required',
    		'cen_description' => 'required',
            'cen_email' => 'required|unique:centers|email',
    		'cen_pno' =>'required',
    		'cen_address' => 'required'
    	]);

    	//Returns erros if validation fails.
    	if($validator->fails()){
    		return response()->json($validator->errors(),400);
    	}

    	$input = $request->all();
    	// validate phone number medical center unique
        //return $input;
    	$center = Center::create($input); //Center.php in model

    	return response()->json(['details'=>$center], 200);
    }

        // Get view centers
    public function viewCenter(){

        $centers = Center::all();

        return $centers;
        
        //return response()->json(['centers'=> $centers], 200); 

    }


    // update center
    public function updateCenter(Request $request, $id){
        
        //Validate user input.
        $validator = Validator::make($request->all(),[
            'cen_name' => 'required',
            'cen_description' => 'required',
            'cen_email' => 'required|unique:users|email',
            'cen_pno' =>'required',
            'cen_address' => 'required'
        ]);

        //Return errors if validation fails.
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }

        // update goes here
        $center = Center::find($id);
        if ($center !=null){

            $center->cen_name = $request['cen_name'];
            $center->cen_description = $request['cen_description'];
            $center->cen_email = $request['cen_email'];
            $center->cen_pno = $request['cen_pno'];
            $center->cen_address = $request['cen_address'];

            $result = $center->save();

            return response()->json(['details'=> $result], 200); 
        }else{
            return response()->json(['details'=> "Medical Center not found!"], 404); 
        }
    }

 
    // delete center
    public function deleteCenter($id){

        $center = Center::find($id);

        $result = $center->delete();

        return response()->json(['message'=> $result], 400); 

    }
}



