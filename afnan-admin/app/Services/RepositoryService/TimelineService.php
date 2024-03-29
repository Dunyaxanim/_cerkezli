<?php

namespace App\Services\RepositoryService;

use App\Http\Requests\TimelineCategoryRequest;
use App\Http\Requests\TimelineRequest;
use App\Models\Admin\Timeline;
use App\Models\Admin\TimelineCategory;
use App\Repositories\TimelineCategoryRepository;
use App\Repositories\TimelineRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;

class TimelineService
{

    protected TimelineRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(TimelineRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }


    public static function clearCached()
    {
        Cache::forget('Timeline');
    }

    public function store(TimelineRequest $request)
    {
        $data = $request->validated();
//        dd($data);
        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'img');
        }
        $model = $this->repository->save($data, new Timeline());

        self::clearCached();

        return $model;
    }

    public function destroy($model)
    {
        self::ClearCached();
        return $this->repository->delete($model);
    }

    public function update($request,$model) {


        $data=$request->all();
        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'video');
        }
        $model=$this->repository->save($data,$model);

        self::ClearCached();
        return $model;
    }
}
