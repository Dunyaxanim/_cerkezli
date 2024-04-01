<?php

namespace App\Repositories;

use App\Models\Admin\Size;
use App\Repositories\Abstract\AbstractRepository;

class SizeRepository extends AbstractRepository

{
    protected $modelClass = Size::class;
}
