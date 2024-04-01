<?php

namespace App\Http\Requests;

use App\Models\Dimension;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        try {
            $data = [
                'img' => ['nullable', 'mimetypes:image/jpeg,image/png,image/webp,image/avif,image/svg'],
            ];
            $data = $this->mapLanguageValidations($data);
            $data = $this->dimensions($data);
            return $data;
        } catch (\Exception $e) {
            Log::error('Validation error: ' . $e->getMessage());
            throw $e;
        }
    }
    public function messages(): array
    {
        $dimensions = Dimension::all();
        $messages = [];
        foreach (config('app.languages') as $lang) {
            $messages["$lang.name.required"] = "  $lang Name sahəsi məcburidir.";
            $messages["$lang.name.string"] = "  $lang Name sahəsi məcburidir.";
            $messages["$lang.name.max"] = " $lang Name sahəsi ən çox 255 simvol ola bilər.";
            $messages["$lang.slogan.string"] = "$lang slogan sahəsi bir mətn olmalıdır.";
            $messages["$lang.slogan.max"] = "$lang slogan sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.text.string"] = "$lang təsvir sahəsi bir mətn olmalıdır.";
            $messages["$lang.text.max"] = "$lang təsvir sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.seo_title.string"] = "$lang SEO başlıq sahəsi bir mətn olmalıdır.";
            $messages["$lang.seo_title.max"] = "$lang SEO başlıq sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.seo_desc.string"] = "$lang SEO təsvir sahəsi bir mətn olmalıdır.";
            $messages["$lang.seo_desc.max"] = "$lang SEO təsvir sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.seo_key.string"] = "$lang SEO açar sözlər sahəsi bir sətir olmalıdır.";
            $messages["$lang.seo_key.max"] = "$lang SEO açar sözlər sahəsi ən çox :max simvol ola bilər.";
            $messages["$lang.payment_options"] = "$lang payment options sahəsi bir sətir olmalıdır.";
            $messages["$lang.payment_options"] = "$lang payment options sahəsi ən çox :max simvol ola bilər.";
        }
        foreach ($dimensions as $dimension) {
            $messages["$dimension->name.price.numeric"] = "$dimension->name sahəsi numeric deyer olamlidir.";
            $messages["$dimension->name.stock.integer"] = "$dimension->name sahəsi integer deyer olmalidir.";
            $messages["$dimension->name.size.string"] = "$dimension->name sahəsi integer deyer olmalidir.";
        }
        return $messages;
    }
    private function mapLanguageValidations($data)
    {
        foreach (config('app.languages') as $lang) {
            $data[$lang] = 'required|array';
            $data["$lang.name"] = 'string|max:500';
            $data["$lang.slogan"] = 'nullable|string|max:600';
            $data["$lang.text"] = 'nullable|string';
            $data["$lang.seo_title"] = 'nullable|string|max:500';
            $data["$lang.seo_desc"] = 'nullable|string|max:500';
            $data["$lang.seo_key"] = 'nullable|string|max:500';
            $data["$lang.payment_options"] = 'nullable|string|max:500';
        }
        return $data;
    }

    private function dimensions($data)
    {
        $dimensions = Dimension::all();
        foreach ($dimensions as $dimension) {
            // $data[$dimension->name] = 'required|array';
            $data["$dimension->name.stock"] = 'nullable|numeric';
            $data["$dimension->name.size"] = 'nullable|string';
            $data["$dimension->name.price"] = 'nullable|numeric';
        }
        return $data;
    }
}
