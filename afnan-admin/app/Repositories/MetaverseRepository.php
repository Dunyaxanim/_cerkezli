<?php

namespace App\Repositories;

use App\Models\Admin\Instalment;
use App\Models\Admin\Metaverse;
use App\Repositories\Abstract\AbstractRepository;

class MetaverseRepository extends AbstractRepository
{
    protected $modelClass = Metaverse::class;
}
