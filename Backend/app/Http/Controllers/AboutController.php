<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Resources\AboutResource;
use App\Http\Requests\StoreDataRequest;

class AboutController extends Controller
{
    //indexing
    public function index()
    {
        $about = About::all();

        return AboutResource::collection($about);
    }

    //get all data
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
            'title' => request()->title,
            'body' => $data['body'],
        ]);

        return new AboutResource($about);
    }

    //update data
    public function updateData(StoreDataRequest $request)
    {
    }


    public function deleteData($id)
    {
        $about = About::findOrFail($id);
        $about->delete();

        return response()->json(null, 204);
    }
}
