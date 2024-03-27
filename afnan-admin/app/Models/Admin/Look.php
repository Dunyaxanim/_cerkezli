<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Look extends Model
{
    use HasFactory;

    protected $fillable = ['status', 'img', 'button_number'];

    public function detail()
    {
        return $this->hasMany(LookDetail::class);
    }
}
