<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Category;
use App\Models\Admin\Look;
use Illuminate\Http\Request;
use App\Models\Admin\Product;

class HomeController extends Controller
{
    public function ourLook()
    {
        $looks = Look::with('detail')->where('status', 1)->get();

        foreach ($looks as $look) {
            foreach ($look->detail as $detail) {
                $products = Product::where('id', $detail->product_id)->get();
                $detail->products = $products;
            }
        }

        return response()->json($looks);
    }

    public function getCollections()
    {
        $collections = Category::where('parent_id', 2)->get();
        return response()->json($collections);
    }
    public function getSlideShow()
    {
        $collections = Category::where('parent_id', 2)->orderBy('order', 'asc')->take(5)->get();
        return response()->json($collections);
    }
    public function latestCollections()
    {
        $collections = Product::latest()->take(6)->get();
        return response()->json($collections);
    }
    public function catalog()
    {
        $category = Category::where('status', 1)->where('id', 1)->with('products')->first();
        if (!$category) {
            return response()->json(['error' => 'Kategori bulunamadı'], 404);
        }

        $childrenCategories = $category->childiren;
        foreach ($childrenCategories as $category) {
            $categoryId = $category->id;
            $products = Product::where('status', 1)->whereHas('categories', function ($query) use ($categoryId) {
                $query->where('category_id', $categoryId);
            })->get();
            $category->products = $products;
        }
        return response()->json($childrenCategories);
    }
}
