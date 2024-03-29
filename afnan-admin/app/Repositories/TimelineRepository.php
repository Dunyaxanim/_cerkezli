<?php

namespace App\Repositories;

use App\Models\Admin\Timeline;
use App\Repositories\Abstract\AbstractRepository;

class TimelineRepository extends AbstractRepository
{
    protected $modelClass = Timeline::class;

}
