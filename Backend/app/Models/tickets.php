<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tickets extends Model
{
    protected $fillable = ['title','details', 'place', 'price','event_date','image'];

    use HasFactory;
}
