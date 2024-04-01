<?php

namespace App\Repositories;
use App\Models\Admin\Creator;
use App\Repositories\Abstract\AbstractRepository;

class CreatorRepository extends AbstractRepository
{
    protected $modelClass = Creator::class;
}
