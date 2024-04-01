<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SizeRequest;
use App\Http\Requests\CategoryRequest;
use App\Models\Admin\Size;
use App\Models\Admin\Category;
use App\Services\RepositoryService\SizeService;
use Illuminate\Http\Request;

class SizeController extends Controller
{
    public function __construct(protected SizeService $service)
    {
    }

    public function index()
    {
        $models = $this->service->dataAllWithPaginate();
        return view('admin.pages.Size.index', ['models' => $models]);
    }
    
    public function create()
    {
        $categories = Category::all();
        return view('admin.pages.Size.form', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SizeRequest $request)
    {
        $this->service->store($request);
        return redirect()->route('Size.index')->with('success', 'Size uğurla əlavə edildi');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Size $Size)
    {
        $categories = Category::all();

        return view('admin.pages.Size.form', ['model' => $Size, 'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SizeRequest $Sizerequest, Size $Size)
    {

        $this->service->update($Sizerequest, $Size);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Size $Size)
    {

        $this->service->delete($Size);
        return redirect()->route('Size.index')->with('success', 'Size silindi');
    }
    public function updateStatus(Request $request, $id)
    {

        $model = Size::findOrFail($id);
        $model->status = $request->status;
        $model->save();
        return response()->json(['message' => 'Status uğurla dəyişdirildi']);
    }
}
