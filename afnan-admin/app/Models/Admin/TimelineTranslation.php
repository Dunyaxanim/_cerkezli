<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelineTranslation extends Model
{
    use HasFactory;

    protected $fillable = ['heading', 'description', 'title'];
    public $timestamps = false;
}
