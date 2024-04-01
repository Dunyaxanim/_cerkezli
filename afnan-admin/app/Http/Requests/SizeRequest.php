<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SizeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        $data = [
            'stock' => ['required', 'integer'],
            'price' => ['required', 'decimal'],
            'size' => ['required', 'string'],
        ];
        return $data;
    }
    public function messages(): array
    {
        $messages = [];
        $messages["stock.required"] = "Stock sahəsi məcburidir.";
        $messages["size.required"] = " Ölçü sahəsi məcburidir.";
        $messages["stock.integer"] = "Name sahəsi integer dəyər olmalıdır.";
        $messages["price.decimal"] = "Name sahəsi decimal dəyər olmalıdır.";
        $messages["size.string"] = "Qiymət string məcburidir";
        return $messages;
    }
}
