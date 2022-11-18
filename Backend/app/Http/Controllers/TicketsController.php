<?php

namespace App\Http\Controllers;
use app\Http\Resources\tickets as ticketsResource;
use app\http\Resources\TicketsCollection;
use app\Models\Tickets;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTicketsRequest;
use App\Http\Requests\UpdateTicketsRequest;
class TicketsController extends Controller
{
    //view the content
    public function index()
    {
       $tickets= Tickets::all();
       return $tickets;
    }

    //show function
    public function showTickets($id)
    {
        return new TicketsResource(Tickets::findOrFail($id));
    }

    //create and store tickets
    public function storeTickets(StoreTicketsRequest $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        // $ticket = tickets::create($request->all());

        // return (new TicketsResource($ticket))
        //         ->response()
        //         ->setStatusCode(201);
        $ticket = Tickets::create([
            'title' => $request->title,
            'details' => $request->details,
            'price' => $request->price,
            'place' => $request->place,
            'event_date' => $request->menu_category_id,
            'image' => $request->image
        ]);

        return $ticket;
    }
    public function updateTickets(UpdateTicketsRequest $request,Tickets $ticket)
    {
        $ticket = tickets::find($ticket->id);

        $ticket =  $ticket->update([
            'title' => $request->title,
            'details' => $request->details,
            'price' => $request->price,
            'place' => $request->place,
            'event_date' => $request->menu_category_id,
            'image' => $request->image
        ]);

        return $ticket;

    }
    //delete tickets
    public function deleteTicket($id)
    {
        $ticket = Tickets::findOrFail($id);
        $ticket->delete();

        return response()->json(null, 204);
    }
}
