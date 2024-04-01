<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instalment extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    protected  $table='instalment';
    public $translationModel = InstalmentTranslation::class;
    protected $fillable = [ 'status','img'];
    public array $translatedAttributes = ['heading','title','desc','content'];
}
