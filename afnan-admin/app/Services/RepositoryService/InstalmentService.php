<?php

namespace App\Services\RepositoryService;


use App\Http\Requests\InstalmentRequest;
use App\Models\Admin\Instalment;
use App\Repositories\InstalmentRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class InstalmentService
{
    protected InstalmentRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(InstalmentRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('Instalment');
    }

    public function dataAllWithPaginate()
    {
        return $this->repository->paginate(20);
    }

    public function store(InstalmentRequest $request)
    {

        $data = $request->validated();


        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'Instalment');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }


        $model = $this->repository->save($data, new Instalment());

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
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'Instalment');
        }
        $model=$this->repository->save($data,$model);
        self::ClearCached();
        return $model;
    }
}
