<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tickets extends Model
{
    protected $fillable = ['title', 'place', 'price','event_date'];

    use HasFactory;
}
