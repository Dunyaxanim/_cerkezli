<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatorRequest;
use App\Models\Admin\Creator;
use App\Services\RepositoryService\CreatorService;

class CreatorController extends Controller
{
    public function __construct(protected CreatorService $service)
    {}

    public function index()
    {
        $models = Creator::all();
        return view('admin.pages.creator.index', ['models' => $models]);
    }

    public function create()
    {
        return view('admin.pages.creator.form');
    }

    public function store(CreatorRequest $request)
    {
        $this->service->store($request);
        return redirect()->route('creator.index')->with('success', 'Slide uğurla əlavə edildi');
    }

    public function updateStatus(CreatorRequest $request, $id)
    {
        $model = Creator::findOrFail($id);
        $model->status = $request->status;
        $model->save();
        return redirect()->route('creator.index')->with('success', 'Status ugurla deyisdirildi');
    }

    public function destroy(Creator $creator)
    {
        $this->service->delete($creator);
        return redirect()->route('creator.index')->with('success', 'Slide silindi !');
    }

    public function edit(Creator $creator)
    {
        return view('admin.pages.creator.form', ['model' => $creator]);
    }

    public function update(CreatorRequest $request, Creator $creator)
    {
        $this->service->update($request, $creator);
        return redirect()->route('creator.index');
    }
}
