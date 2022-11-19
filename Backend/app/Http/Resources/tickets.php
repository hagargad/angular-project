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

            'title' => $this->title,
            'desc' => $this->desc,
            'price' =>  (int)$this->price,
            'image' => $this->image,
            'date' => $this->date,
            'timing' => $this->timing,
            'city' => $this->city,
            'venue' => $this->venue,
            'category' => $this->category,
        ];
    }
}
