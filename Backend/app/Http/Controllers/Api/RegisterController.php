<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\User;
class RegisterController extends Controller
{
    //
    function registration(Request $request){
        $users = User::create([
            'first_name'=> $request->FirstName,
            'last_name'=> $request->LastName,
            'gender'=> $request->gender,
            'country'=> $request->country,
            'city'=> $request->city,
            'phone'=> $request->phoneNumber,
            'email'=> $request->Email,
            'password'=> $request->Password,


        ]);
        return $users;

    }

    function Userlogin(Request $request)
    {
        // $user = User::all();
        // return $request->useremail;
        // $request->validate([
        //     'useremail'=> 'required|email',
        //     'userpassword' => 'required'
        // ]);
        // dd($request->useremail);
        // $credntials = request(['useremail', 'userpassword']);
        // $db = User::where('email', $request->useremail)->first();
        // if(!empty($db)){

        //     dd($request->useremail);
        // }else{
        //     dd("failed");
        // }
    //    return User::all();
        // return $db;
        // return $re;
        // dd("successfully");
        echo $request->useremail;
        redirect("https://www.google.com");

    }

    function show($id)
    {
       $user= User::find($id);
        return $user;
    }
}
