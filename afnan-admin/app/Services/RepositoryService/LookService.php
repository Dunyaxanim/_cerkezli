<?php

namespace App\Services\RepositoryService;

use App\Http\Requests\LookRequest;
use App\Http\Requests\VideoRequest;
use App\Models\Admin\Look;
use App\Models\Admin\LookDetail;
use App\Models\Admin\Video;
use App\Repositories\LookRepository;
use App\Repositories\VideoRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Cache;

class LookService
{
    protected LookRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(LookRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('Look');
    }

    public function dataAllWithPaginate()
    {
        return $this->repository->paginate(10);
    }

    public function store(LookRequest $request)
    {
        $data = $request->validated();

        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'img');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }

        $model = $this->repository->save($data, new Look());

        // LookDetail'leri oluştur
        for ($i = 1; $i <= 4; $i++) {
            $x_key = 'x' . $i;
            $y_key = 'y' . $i;
            $product_id_key = 'product_id' . $i;
            $img_hover_key = 'img_hover' . $i;

            if (!is_null($request->input($x_key))) {
                $lookDetailData = [
                    'look_id' => $model->id,
                    'x' => $request->input($x_key),
                    'y' => $request->input($y_key),
                    'product_id' => $request->input($product_id_key),
                ];
                if ($request->has($img_hover_key)) {
                    $lookDetailData['img'] = $this->fileUploadService->uploadFile($request->$img_hover_key, 'img_hover');
                }
                LookDetail::create($lookDetailData);
            }
        }

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
        $model = $this->repository->save($data,$model);
        // LookDetail'leri güncelle ve ekle
        for ($i = 1; $i <= 4; $i++) {
            $x_key = 'x' . $i;
            $y_key = 'y' . $i;
            $product_id_key = 'product_id' . $i;
            $img_hover_key = 'img_hover' . $i;

            if (!is_null($request->input($x_key))) {
                $lookDetailData = [
                    'look_id' => $model->id,
                    'x' => $request->input($x_key),
                    'y' => $request->input($y_key),
                    'product_id' => $request->input($product_id_key),
                ];
                if ($request->hasFile($img_hover_key)) {
                    $lookDetailData['img'] = $this->fileUploadService->replaceFile($request->file($img_hover_key), 'img_hover');
                }

                // Güncellenecek veya oluşturulacak modeli bul
                $existingDetail = LookDetail::where('look_id', $model->id)
                    ->where('x', $request->input($x_key))
                    ->first();

                // Eğer model zaten varsa güncelle, yoksa yeni oluştur
                if ($existingDetail) {
                    $existingDetail->update($lookDetailData);
                } else {
                    LookDetail::create($lookDetailData);
                }
            }
        }
        self::clearCached();

        return $model;
    }

}
