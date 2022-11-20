<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //
    public function index()
    {
        $data = Contact::all();
        return  ContactResource::collection($data);
    }
    public function show($id)
    {
        $data = Contact::find($id);
        return new ContactResource($data);
    }
    public function store()
    {
        // $Fname=request('SendMailInfo_nmFirstName','null')  ;
        // $Lname=request('SendMailInfo_nmLastName','null')  ;
        // $Email=request('SendMailInfo_ulEmail','null')  ;
        // $phone=request('SendMailInfo_noPhone',0);
        // $massage=request('SendMailInfo_dsMessage','null');
        // $Auth=request('haveAuthTermsAndConditions','')?request('haveAuthTermsAndConditions',''):0;
        $data = Contact::create([
            // 'Fname'=>$Fname,
            // 'Lname'=>$Lname,
            // 'email'=>$Email,
            // 'phone'=>$phone,
            // 'Massage'=>$massage,
            // 'agree'=>$Auth,
            'Fname' => request('Fname'),
            'Lname' => request('Lname'),
            'email' => request('Email'),
            'phone' => request('Mobile'),
            'Massage' => request('Massage'),
            'agree' => request('Auth'),
        ]);
        return new ContactResource($data);
    }
}
