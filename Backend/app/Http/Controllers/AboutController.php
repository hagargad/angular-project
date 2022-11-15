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

  public function show($id)
  {
      $about = About::find($id);

      return new AboutResource($about);
  }

  public function store(StorePostRequest $request)
  {
      $data = $request->all();
      $about = About::create([
          'title' => request()->title,
          'body' => $data['body'],
      ]);

      return new AboutResource($about);
  }
}
