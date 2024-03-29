<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TimelineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $data = [
            'img' => [ 'nullable','mimetypes:image/jpeg,image/png,image/webp,image/avif,image/svg'],
            'timeline_category_id' => ['nullable']
        ];
        return $this->mapLanguageValidations($data);
    }

    public function messages(): array
    {
        $messages = [];
        foreach (config('app.languages') as $lang) {
            $messages["$lang.heading.required"] = "  $lang Name sahəsi məcburidir.";
            $messages["$lang.heading.string"] = "  $lang Name sahəsi məcburidir.";
            $messages["$lang.heading.max"] = " $lang Name sahəsi ən çox 255 simvol ola bilər.";
            $messages["$lang.title.string"] = "$lang təsvir sahəsi bir mətn olmalıdır.";
            $messages["$lang.description.string"] = "$lang təsvir sahəsi bir mətn olmalıdır.";
        }
        return $messages;
    }
    private function mapLanguageValidations($data)
    {
        foreach (config('app.languages') as $lang) {
            $data[$lang] = 'required|array';
            $data["$lang.heading"] = 'string|max:500';
            $data["$lang.title"] = 'string|max:500';
            $data["$lang.description"] = 'nullable|string';
        }
        return $data;
    }
}
