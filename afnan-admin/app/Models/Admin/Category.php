<?php

namespace App\Models\Admin;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Category extends Model implements TranslatableContract
{
    use Translatable;
    use HasFactory;
    public $translationModel = CategoryTranslation::class;
    protected $fillable = [ 'status','f_status','parent_id','order','img'];
    public array $translatedAttributes = ['name','slug','desc','seo_title','seo_desc','seo_key'];

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
    
    public function childiren()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

}
