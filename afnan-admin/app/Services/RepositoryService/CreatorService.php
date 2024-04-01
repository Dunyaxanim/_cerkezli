<?php

namespace App\Services\RepositoryService;

use App\Http\Requests\CreatorRequest;
use App\Models\Admin\Creator;
use App\Repositories\CreatorRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;

class CreatorService
{
    protected CreatorRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(CreatorRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('creator');
    }

    public function dataAllWithPaginate()
    {
        return $this->repository->paginate(20);
    }

    public function store(CreatorRequest $request)
    {
        $data = $request->validated();

        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'creator');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }

        $model = $this->repository->save($data, new Creator());
        self::clearCached();
        return $model;
    }

    public function delete($model)
    {
        self::clearCached();
        return $this->repository->delete($model);
    }

    public function update($request, $model)
    {
        $data = $request->all();

        if ($request->has('status')) {
            $data['status'] = $request->input('status') ? 1 : 0;
        }

        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'creator');
        }
        $model = $this->repository->save($data, $model);
        self::clearCached();
        return $model;
    }
}
