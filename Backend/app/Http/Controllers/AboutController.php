<?php

namespace App\Http\Controllers;

use App\Models\About;
use Illuminate\Http\Request;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\AboutResource;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::all();

        return AboutResource::collection($about);
    }

    public function getData()
    {
        return new AboutResource(About::all());
    }

    public function storeData(Request $request)
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
    public function updateTitle()
    {
    }
    public function updateBody()
    {
    }

    public function delete($id)
    {
        $about = About::findOrFail($id);
        $about->delete();

        return response()->json(null, 204);
    }
}
