<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Blog;
use App\Models\Admin\Product;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = Blog::with(['category', 'user' => function ($query) {
            $query->select('id', 'name');
        }])->where('status', 1)->get();

        $blogs->each(function ($blog) {
            $blog->formatted_created_at = $blog->getFormattedCreatedAtAttribute();
        });
        return response()->json($blogs);
    }

    public function getById($id)
    {
        $blog = Blog::with(['category', 'user' => function ($query) {
            $query->select('id', 'name');
        }])->where('id', $id)->first();

        $blog->formatted_created_at = $blog->getFormattedCreatedAtAttribute();
        $blog->formatted_publish_date = $blog->getFormattedPublishDateAtAttribute();
        return response()->json($blog);
    }

    public function getRandom()
    {

        $count = rand(2, 2);

        $blogs = Blog::where('status', 1)->inRandomOrder()->limit($count)->get();

        return response()->json($blogs);
    }
}
