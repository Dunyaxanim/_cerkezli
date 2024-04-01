<?php

namespace App\Repositories;

use App\Models\Admin\Blog;
use App\Models\Admin\TimelineCategory;
use App\Repositories\Abstract\AbstractRepository;

class TimelineCategoryRepository extends AbstractRepository
{
    protected $modelClass = TimelineCategory::class;

}
