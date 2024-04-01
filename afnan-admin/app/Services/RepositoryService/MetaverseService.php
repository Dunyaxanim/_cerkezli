<?php

namespace App\Services\RepositoryService;


use App\Http\Requests\InstalmentRequest;
use App\Http\Requests\MetaverseRequest;
use App\Models\Admin\Instalment;
use App\Models\Admin\Metaverse;
use App\Repositories\MetaverseRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;

class MetaverseService
{
    protected MetaverseRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(MetaverseRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('Metaverse');
    }

    public function dataAllWithPaginate()
    {
        return $this->repository->paginate(20);
    }

    public function store(MetaverseRequest $request)
    {

        $data = $request->validated();


        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'Metaverse');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }


        $model = $this->repository->save($data, new Metaverse());

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
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'Metaverse');
        }
        $model=$this->repository->save($data,$model);
        self::ClearCached();
        return $model;
    }
}
