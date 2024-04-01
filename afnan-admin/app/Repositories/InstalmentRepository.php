<?php

namespace App\Repositories;

use App\Models\Admin\Instalment;
use App\Repositories\Abstract\AbstractRepository;

class InstalmentRepository extends AbstractRepository
{
    protected $modelClass = Instalment::class;
}
