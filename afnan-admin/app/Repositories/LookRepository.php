<?php

namespace App\Repositories;

use App\Models\Admin\Look;
use App\Repositories\Abstract\AbstractRepository;

class LookRepository extends AbstractRepository

{
    protected $modelClass = Look::class;
}
