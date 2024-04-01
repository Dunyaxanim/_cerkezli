<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'file',
        'order',
    ];

    public function product() {
        return $this->belongsTo(Product::class, 'product_id');
    }


}
