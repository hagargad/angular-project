<?php

namespace App\Http\Controllers;
use app\Http\Resources\tickets as ticketsResource;
use app\http\Resources\TicketsCollection;
use app\Models\tickets;
use Illuminate\Http\Request;
use App\Http\Requests\StoreDataRequest;

class TicketsController extends Controller
{
    //view the content
    public function index()
    {
        return new TicketsCollection(tickets::all());
    }

    //show function
    public function showTickets($id)
    {
        return new TicketsResource(tickets::findOrFail($id));
    }

    //create and store tickets
    public function storeTickets(StoreDataRequest $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $ticket = tickets::create($request->all());

        return (new TicketsResource($ticket))
                ->response()
                ->setStatusCode(201);

        // $product =  tickets::create([
        //     'title' => $request->title,
        //     'details' => $request->details,
        //     'price' => $request->price,
        //     'type' => $request->type,
        //     'menu_category_id' => $request->menu_category_id,
        //     'image' => $request->image
        // ]);

        // return $product;

    }

    //delete tickets
    public function deleteTicket($id)
    {
        $ticket = tickets::findOrFail($id);
        $ticket->delete();

        return response()->json(null, 204);
    }
}

