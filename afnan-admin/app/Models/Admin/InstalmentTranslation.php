<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class InstalmentTranslation extends Model
{
    use HasFactory;
    public $fillable = ['heading','title','desc','content'];
    public $timestamps = false;
}
