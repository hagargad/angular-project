<?php

namespace App\Http\Controllers;
use App\Http\Resources\tickets as ticketsResource;
use App\http\Resources\TicketsCollection;
use App\Models\Ticket;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTicketsRequest;
use App\Http\Requests\UpdateTicketsRequest;
use App\Models\About;

class TicketController extends Controller
{
    //view the content
    public function index()
    {
       $ticket= Ticket::all();
       return $ticket;


    }

    //show function
    public function showTickets($id)
    {
        return new TicketsResource(Ticket::findOrFail($id));
    }

    //create and store tickets
    public function storeTickets(StoreTicketsRequest $request)
    {
        // $request->validate([
        //     'name' => 'required|max:255',
        // ]);

        // $ticket = tickets::create($request->all());

        // return (new TicketsResource($ticket))
        //         ->response()
        //         ->setStatusCode(201);
        $ticket = Ticket::create([
            'title' => $request-> eventtitle,
            'desc' => $request-> eventdesc,
            'price' => $request-> eventprice,
            'image' => $request->eventimage,
            'date' => $request->eventdate,
            'timing' => $request->eventtiming,
            'city' => $request->eventcity,
            'venue' => $request->eventvenue,
            'category' => $request->eventcategory,


        ]);

        return $ticket;
    }
    public function updateTickets(UpdateTicketsRequest $request,Ticket $ticket)
    {
        $ticket = Ticket::find($ticket->id);

        $ticket =  $ticket->update([
            'title' => $request-> eventtitle,
            'desc' => $request-> eventdesc,
            'price' => $request-> eventprice,
            'image' => $request->eventimage,
            'date' => $request->eventdate,
            'timing' => $request->eventtiming,
            'city' => $request->eventcity,
            'venue' => $request->eventvenue,
            'category' => $request->eventcategory,

        ]);

        return $ticket;

    }
    //delete tickets
    public function deleteTicket($id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->delete();
        return $ticket;
    }
}

