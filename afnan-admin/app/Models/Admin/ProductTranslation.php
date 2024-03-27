<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductTranslation extends Model
{
    use HasFactory;
    public $fillable = ['text','name','slug','slogan','payment_options','seo_title','seo_key','seo_desc'];
    public $timestamps = false;
}
