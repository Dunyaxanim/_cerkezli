<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\InstalmentRequest;
use App\Models\Admin\Instalment;
use App\Services\RepositoryService\InstalmentService;


class InstalmentController extends Controller
{
    public function __construct(protected InstalmentService $service)
    {}

    public function index(){
        $models=Instalment::all();
        return view('admin.pages.instalment.index',['models'=>$models]);
    }

    public function create(){
//        $products=Instalment::all();
        return view('admin.pages.instalment.form');
    }
    public  function store(InstalmentRequest $instalmentRequest){


        $this->service->store($instalmentRequest);
        return redirect()->route('instalment.index')->with('success', 'Slide uğurla əlavə edildi');
    }
    public function updateStatus(InstalmentRequest $instalmentRequest, $id)
    {


        $model =Instalment::findOrFail($id);
        $model->status = $instalmentRequest->status;
        $model->save();
        return redirect()->route('instalment.index')->with('success', 'Status ugurla deyisdirildi');
    }
    public function destroy(Instalment $instalment)
    {
        $this->service->delete($instalment);
        return redirect()->route('instalment.index')->with('success', 'Slide silindi !');
    }


    public function edit(Instalment $instalment)
    {
        return view('admin.pages.instalment.form',['model'=>$instalment]);
    }
    public function update(InstalmentRequest $instalmentRequest, Instalment $instalment)
    {
        $this->service->update($instalmentRequest, $instalment);
        return redirect()->route('instalment.index');
    }
}
