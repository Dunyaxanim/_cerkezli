<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class MetaverseTranslation extends Model
{
    use HasFactory;
    public $fillable = ['heading','title','desc','content'];
    public $timestamps = false;
}
