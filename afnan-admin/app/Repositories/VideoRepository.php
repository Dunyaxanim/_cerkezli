<?php

namespace App\Repositories;


use App\Models\Admin\Video;
use App\Repositories\Abstract\AbstractRepository;

class VideoRepository extends AbstractRepository
{
    protected $modelClass = Video::class;
}
