<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Blog;
use App\Models\Admin\Product;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index(){
        $blogs = Blog::with('category')->where('status',1)->get();
        return response()->json($blogs);
    }
}
