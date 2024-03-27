<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoRequest extends FormRequest
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
        'order'=>['nullable','integer'],
        'url'=>['string'],
    ];
    return $this->mapLanguageValidations($data);
}
    public function messages(): array
    {
        $messages = [];
        foreach (config('app.languages') as $lang) {
            $messages["$lang.title.max"] = "  $lang Title sahəsi ən çox  max 500 simvol ola bilər.";
            $messages["$lang.title.string"] = "  $lang Title sahəsi məcburidir.";
            $messages["$lang.desc.string"] = "$lang Təsvir sahəsi bir mətn olmalıdır.";
            $messages["$lang.desc.max"] = "$lang Təsvir sahəsi ən çox  max 500 simvol ola bilər.";

        }
        $messages['url.required']= 'URL sahəsi boş ola bilməz ';
        $messages['url.string']= 'URL sahəsi boş ola bilməz ';
        return $messages;
    }
    private function mapLanguageValidations($data)
    {
        foreach (config('app.languages') as $lang) {
            $data[$lang] = 'required|array';
            $data["$lang.title"] = 'string|max:500';
            $data["$lang.desc"] = 'nullable|string|max:500';

        }
        return $data;
    }
}
