<?php

namespace App\Models\Admin;

use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timeline extends Model implements TranslatableContract
{
    use HasFactory;
    use Translatable;

    protected $fillable = [ 'img','timeline_category_id'];
    public $translationModel =TimelineTranslation::class;
    public $translatedAttributes = ['heading','title','description'];



    public function timeLineCategory()
    {
        return $this->belongsTo(TimeLineCategory::class, 'timeline_category_id');
    }
}
