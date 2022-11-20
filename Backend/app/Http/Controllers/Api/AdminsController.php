<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminsCntroller extends Controller
{
    //
    function store(Request $request){
        $admins = Admin::create([
            'first_name'=>$request->FirstName,
            'last_name'=>$request->LastName,
            'email'=>$request->E_mail,
            'password'=>$request->Password,
            'phone'=>$request->phoneNumber,
        ]);

        return $admins;
    }

    function Adminlogin(Request $request)
    {
        $request->validate([
            'email'=> 'required',
            'password'=> 'required'
        ]);

        $credntials = request(['email', 'password']);

        return $credntials;

    }
}
