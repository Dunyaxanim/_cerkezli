<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Requests\ProductRequest;
use App\Models\Admin\Blog;
use App\Models\Admin\Category;
use App\Models\Admin\Product;
use App\Models\Admin\Size;
use App\Models\Dimension;
use App\Services\RepositoryService\PrivacyService;
use App\Services\RepositoryService\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function __construct(protected ProductService $service)
    {
    }

    public function index()
    {
        $models = $this->service->dataAllWithPaginate();
        return view('admin.pages.product.index', ['models' => $models]);
    }
    public function create()
    {
        $dimensions = Dimension::all();
        $categories = Category::all();
        return view('admin.pages.product.form', ['categories' => $categories, 'dimensions' => $dimensions]);
    }
    public function store(ProductRequest $request)
    {
        $this->service->store($request);
        return redirect()->route('product.index')->with('success', 'Product uğurla əlavə edildi');
    }
    public function updateStatus(Request $request, $id)
    {
        $model = Product::findOrFail($id);
        $model->status = $request->status;
        $model->save();
        return response()->json(['message' => 'Status uğurla dəyişdirildi']);
    }
    public function destroy(Product $product)
    {
        $this->service->delete($product);
        return redirect()->route('product.index')->with('success', 'Product silindi !');
    }
    public function edit(Product $product)
    {
        $categories = Category::all();
        $dimensions = Dimension::all();
        $size = Size::where('product_id', $product->id)->get();
        return view('admin.pages.product.form', ['model' => $product, 'categories' => $categories, 'dimensions' => $dimensions, 'size' => $size]);
    }
    public function update(ProductRequest $productrequest, Product $product)
    {

        $this->service->update($productrequest, $product);
        return redirect()->back();
    }
}
