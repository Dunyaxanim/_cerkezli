<?php

namespace App\Services\RepositoryService;


use App\Http\Requests\ProductRequest;
use App\Models\Admin\Category;
use App\Models\Admin\Product;
use App\Repositories\ProductRepository;
use App\Services\FileUploadService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class ProductService
{
    protected ProductRepository $repository;
    protected FileUploadService $fileUploadService;

    public function __construct(ProductRepository $repository, FileUploadService $fileUploadService)
    {
        $this->repository = $repository;
        $this->fileUploadService = $fileUploadService;
    }

    public static function clearCached()
    {
        Cache::forget('Product');
    }

    public function dataAllWithPaginate()
    {
        return Product::with('categories')->paginate(10);
    }

    public function store(ProductRequest $request)
    {

        $data = $request->validated();

        foreach (config('app.languages') as $lang) {

            if (isset($data[$lang])) {

                foreach ($data[$lang] as $key => $name) {
                    $data[$lang]['slug'] = Str::slug($data[$lang]['name']);
                }
            }
        }

        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->uploadFile($request->img, 'Product');
        }
        if ($request->has('img_hover')) {
            $data['img_hover'] = $this->fileUploadService->uploadFile($request->img_hover, 'Product');
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') === 'on' ? 1 : 0;
        }


         $randomNumber = rand(1, 1000);
        $randomNumber=$randomNumber/1000;
         if (strlen(str_replace(' ','',$request['az']['name']))>5){
             $stock_code = strtoupper(substr(str_replace(' ', '', $request['az']['name']), 0, 5));

             $data['stock_code']=$stock_code.str_replace('.','',$randomNumber);

         }else{
         $data['stock_code']=strtoupper(str_replace(' ','',$request['az']['name'])).str_replace('.','',$randomNumber);
         }
         $data['in_stock']=$request['in_stock'];
         $data['user_id']=Auth::id();

        $model = $this->repository->save($data, new Product());
        $categoryIds = $request->category_id ?? [];


        if ($categoryIds[0] !== null) {
            $categoryIdsArray = explode(',', $categoryIds[0]);
            foreach ($categoryIdsArray as $categoryId) {
                $categoryId = (int) $categoryId;
                $model->categories()->attach($categoryId);
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
    public function update($request, $model)
    {
        $data = $request->all();
        foreach (config('app.languages') as $lang) {
            if (isset($data[$lang])) {
                foreach ($data[$lang] as $key => $name) {
                    $data[$lang]['slug'] = Str::slug($data[$lang]['name']);
                }
            }
        }

        if ($request->has('status')) {
            $data['status'] = $request->input('status') ? 1 : 0;
        }

        if ($request->has('f_status')) {
            $data['f_status'] = $request->input('f_status') ? 1 : 0;
        }

        if ($request->has('img')) {
            $data['img'] = $this->fileUploadService->replaceFile($request->img, $model->img, 'Product');
        }

        if ($request->has('img_hover')) {
            $data['img_hover'] = $this->fileUploadService->replaceFile($request->img_hover, $model->img_hover, 'Product');
        }


        $categoryIds = $request->category_id ?? [];



        if ($categoryIds[0] === null) {
            $model->categories()->detach();
        } else {
            $categoryIdsArray = explode(',', $categoryIds[0]);

            $existingCategoryIds = $model->categories->pluck('id')->toArray();

            if ((array_diff($categoryIdsArray, $existingCategoryIds) || array_diff($existingCategoryIds, $categoryIdsArray)) && !in_array('', $categoryIdsArray)) {
                $model->categories()->sync($categoryIdsArray);
            }
        }

         $data['category_id'] = null;

        $model = $this->repository->save($data, $model);
        self::ClearCached();
        return $model;
    }

}
