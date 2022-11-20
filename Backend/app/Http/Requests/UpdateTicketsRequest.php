<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTicketsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'id'  => ['required'],
            'title' => ['required'],
            'details'=>['required'],
            'price' => ['required'],
            'place' => ['required'],
            'event_date' => ['required'],
            'image' => ['required']
        ];
    }
}
