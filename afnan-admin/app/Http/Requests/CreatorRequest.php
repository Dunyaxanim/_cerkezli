<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatorRequest extends FormRequest
{
    public function rules(): array
    {
        $data = [
            'img' => ['nullable', 'mimetypes:image/jpeg,image/png,image/webp,image/avif,image/svg'],
        ];
        return $this->mapLanguageValidations($data);
    }

    public function messages(): array
    {
        $messages = [];
        foreach (config('app.languages') as $lang) {
            $messages["$lang.heading.required"] = "  $lang heading sahəsi məcburidir.";
            $messages["$lang.heading.string"] = "  $lang heading sahəsi məcburidir.";
            $messages["$lang.heading.max"] = " $lang heading sahəsi ən çox 255 simvol ola bilər.";
            $messages["$lang.title.string"] = "$lang title sahəsi bir mətn olmalıdır.";
            $messages["$lang.title.max"] = "$lang title sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.desc.string"] = "$lang təsvir sahəsi bir mətn olmalıdır.";
            $messages["$lang.desc.max"] = "$lang təsvir sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.content.string"] = "$lang content başlıq sahəsi bir mətn olmalıdır.";
            $messages["$lang.content.max"] = "$lang content başlıq sahəsi ən çox :max simvol ola bilər.";
        }
        return $messages;
    }

    private function mapLanguageValidations($data)
    {
        foreach (config('app.languages') as $lang) {
            $data[$lang] = 'required|array';
            $data["$lang.heading"] = 'string|max:255';
            $data["$lang.title"] = 'nullable|string|max:400';
            $data["$lang.desc"] = 'nullable|string|max:500';
            $data["$lang.content"] = 'nullable|string|max:500';
        }
        return $data;
    }
}
