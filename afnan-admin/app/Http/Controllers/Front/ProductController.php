<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Category;
use App\Models\Admin\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->where('status', 1)->get();
        return response()->json($products);
    }
    public function getByCategoryId($id)
    {
        $products = Product::where('status', 1)
            ->whereHas('categories', function ($query) use ($id) {
                $query->where('category_id', $id);
            })
            ->get();
        return response()->json($products);
    }
    public function getById($id)
    {
        $product = Product::where('status', 1)->where('id',$id)->first();
        return response()->json($product);
    }
   
}
