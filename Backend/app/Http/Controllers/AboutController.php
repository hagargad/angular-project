<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Resources\AboutResource;
use App\Http\Requests\StoreDataRequest;
use App\Http\Requests\UpdateDataRequest;
use App\Models\Ticket;

class AboutController extends Controller
{
    //indexing
    public function index()
    {
        $about = About::all();
        // return AboutResource::collection($about);
        return $about;


    }

    // get all data
    public function getData()
    {
        return new AboutResource(About::all());
    }

    //Store tickets
    public function storeData(StoreDataRequest $request)
    {
        $request->validate([
            'title' => 'required|max:255',
        ]);

        $data = $request->all();
        $about = About::create([
            'title' => $request()->title,
            'body' => $data['body'],
        ]);

        return new AboutResource($about);
        // $data=About::create([
        //    'title'=>$request->title,
        //    'body'=>$request->body
        // ]);

        // return $data;

    }

    //update data
    public function updateData(UpdateDataRequest $request, About $about)
    {
        $about = About::find(1);

        $about = $about->update([
            'title' => $request->titleinput,
            'body' => $request->bodyinput
        ]);

        return $about;

    }


    public function deleteData($id)
    {
        $about = About::findOrFail($id);
        $about->delete();

        return $about;
    }
}
