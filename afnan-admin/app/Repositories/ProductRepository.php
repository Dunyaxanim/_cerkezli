<?php

namespace App\Repositories;


use App\Models\Admin\Product;
use App\Repositories\Abstract\AbstractRepository;

class ProductRepository extends AbstractRepository
{
    protected $modelClass = Product::class;
}
