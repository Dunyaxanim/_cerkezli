<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    public $translationModel = VideoTranslation::class;
    protected $fillable = [ 'status','order','img','url'];
    public $translatedAttributes = ['title','desc'];

}
