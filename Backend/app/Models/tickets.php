<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    // protected $table = 'tickets';
    protected $fillable = ['title', 'details', 'place', 'price', 'event_date', 'image'];

    use HasFactory;
}
