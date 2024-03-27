<?php

namespace App\Services\RepositoryService;


use App\Http\Requests\VideoRequest;
use App\Models\Admin\Video;
use App\Repositories\VideoRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;



class VideoService
{
    protected VideoRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(VideoRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('Video');
    }

    public function dataAllWithPaginate()
    {
        return $this->repository->paginate(10);
    }

    public function store(VideoRequest $request)
    {

        $data = $request->validated();



        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'video');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }


        $model = $this->repository->save($data, new Video());

        self::clearCached();

        return $model;
    }
    public function delete($model)
    {
        self::ClearCached();
        return $this->repository->delete($model);
    }
    public function update($request,$model)
    {
        $data=$request->all();

        if ($request->has('status')) {
            $data['status'] = $request->input('status') ? 1 : 0;
        }


        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'video');
        }
        $model=$this->repository->save($data,$model);
        self::ClearCached();
        return $model;
    }
}
