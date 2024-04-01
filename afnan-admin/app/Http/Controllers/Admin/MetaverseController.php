<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MetaverseRequest;
use App\Models\Admin\Metaverse;
use App\Services\RepositoryService\MetaverseService;


class MetaverseController extends Controller
{
    public function __construct(protected MetaverseService $service)
    {}

    public function index(){
        $models=Metaverse::all();
        return view('admin.pages.metaverse.index',['models'=>$models]);
    }

    public function create(){
//        $products=Metaverse::all();
        return view('admin.pages.metaverse.form');
    }
    public  function store(MetaverseRequest $metaverseRequest){


        $this->service->store($metaverseRequest);
        return redirect()->route('metaverse.index')->with('success', 'Slide uğurla əlavə edildi');
    }
    public function updateStatus(MetaverseRequest $metaverseRequest, $id)
    {


        $model =Metaverse::findOrFail($id);
        $model->status = $metaverseRequest->status;
        $model->save();
        return redirect()->route('metaverse.index')->with('success', 'Status ugurla deyisdirildi');
    }
    public function destroy(Metaverse $metaverse)
    {
        $this->service->delete($metaverse);
        return redirect()->route('metaverse.index')->with('success', 'Slide silindi !');
    }


    public function edit(Metaverse $metaverse)
    {
        return view('admin.pages.metaverse.form',['model'=>$metaverse]);
    }
    public function update(MetaverseRequest $metaverseRequest, Metaverse $metaverse)
    {
        $this->service->update($metaverseRequest, $metaverse);
        return redirect()->route('metaverse.index');
    }
}
