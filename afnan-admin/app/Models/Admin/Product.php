<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    public $translationModel =ProductTranslation::class;
    protected $fillable=['status','view_count','img','img_hover','publish_date','category_id','user_id','stock_code'];
    public $translatedAttributes = ['text','name','slug','slogan','payment_options','seo_title','seo_key','seo_desc'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    public function sizes()
    {
        return $this->hasMany(Size::class);
    }
}
