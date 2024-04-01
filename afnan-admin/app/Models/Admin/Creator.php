<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Creator extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    protected  $table='creator';
    public $translationModel = CreatorTranslation::class;
    protected $fillable = [ 'status','img'];
    public array $translatedAttributes = ['heading','title','desc','content'];
}
