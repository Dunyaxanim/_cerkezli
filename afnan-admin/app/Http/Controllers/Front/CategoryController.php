<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $categories=Category::where('status',1)->get();
        return response()->json($categories);
    }
    public function collectionById($id)
    {
        $categories = Category::where('status', 1)->where('id', $id)->first();
        return response()->json($categories);
    }
}
