<?php

namespace App\Services\RepositoryService;

use App\Http\Requests\BlogRequest;
use App\Http\Requests\TimelineCategoryRequest;
use App\Models\Admin\Blog;
use App\Models\Admin\Timeline;
use App\Models\Admin\TimelineCategory;
use App\Repositories\TimelineCategoryRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class TimelineCategoryService
{
    protected TimelineCategoryRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(TimelineCategoryRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('TimelineCategory');
    }

    public function destroy($model)
    {
        self::ClearCached();
        return $this->repository->delete($model);
    }

    public function store(TimelineCategoryRequest $request)
    {
        $data = $request->validated();

        $model = $this->repository->save($data, new TimelineCategory());

        self::clearCached();

        return $model;
    }

    public function update($request,$model) {


        $data=$request->all();
//dd($data);
        $model=$this->repository->save($data,$model);

        self::ClearCached();
        return $model;
    }
}
