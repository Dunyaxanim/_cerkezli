<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LookDetail extends Model
{
    use HasFactory;

    protected $fillable = ['look_id','product_id','x', 'y',  'img'];

    public function look()
    {
        return $this->belongsTo(Look::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
