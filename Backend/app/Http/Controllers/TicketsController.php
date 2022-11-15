<?php

namespace App\Http\Controllers;
use app\Http\Resources\tickets as ticketsResource;
use app\http\Resources\TicketsCollection;
use app\Models\tickets;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    public function index()
    {
        return new TicketsCollection(tickets::all());
    }
    public function show($id)
    {
        return new TicketsResource(tickets::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $ticket = tickets::create($request->all());

        return (new TicketsResource($ticket))
                ->response()
                ->setStatusCode(201);
    }

    public function delete($id)
    {
        $ticket = tickets::findOrFail($id);
        $ticket->delete();

        return response()->json(null, 204);
    }
}

