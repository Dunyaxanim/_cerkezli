<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metaverse extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    protected  $table='metaverse';
    public $translationModel = MetaverseTranslation::class;
    protected $fillable = [ 'status','img'];
    public array $translatedAttributes = ['heading','title','desc','content'];
}
