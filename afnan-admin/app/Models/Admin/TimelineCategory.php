<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelineCategory extends Model implements TranslatableContract
{
    use HasFactory ,Translatable;

    protected $fillable = [];
    public $translationModel =TimelineCategoryTranslation::class;
    public $translatedAttributes = ['name'];

    protected $guarded = ['_token'];



    public function timeline()
    {
        return $this->hasOne(Timeline::class, 'category_id');
    }
}
