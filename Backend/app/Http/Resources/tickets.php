<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class tickets extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'title'       => $this->title,
            'price'    => (int) $this->price,
            'place'     =>  $this->place,
            'event_date'     => $this->event_date,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
