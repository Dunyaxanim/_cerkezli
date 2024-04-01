<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlogRequest;
use App\Http\Requests\TimelineCategoryRequest;
use App\Models\Admin\Blog;
use App\Models\Admin\Category;
use App\Models\Admin\TimelineCategory;
use App\Services\RepositoryService\BlogService;
use App\Services\RepositoryService\TimelineCategoryService;
use Illuminate\Http\Request;

class TimelineCategoryController extends Controller
{

    public function __construct(protected TimelineCategoryService $service)
    {}
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $timelineCategories = TimelineCategory::all();
        return view('admin.pages.timelineCategory.index', compact('timelineCategories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $timelineCategories = TimelineCategory::all();
        return view('admin.pages.timelineCategory.form', compact('timelineCategories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TimelineCategoryRequest $request)
    {
        $this->service->store($request);
        return redirect()->route('timeline-category.index')->with('success', 'Blog uğurla əlavə edildi');
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
    public function edit(TimelineCategory $timeline_category)
    {
//        dd($timelineCategory);
        $categories=Category::all();
        return view('admin.pages.timelineCategory.form',['model'=>$timeline_category, 'categories'=>$categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TimelineCategoryRequest $timelineRequest, TimelineCategory $timeline_category)
    {

        $this->service->update($timelineRequest, $timeline_category);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TimelineCategory $timeline_category)
    {
        //
//        dd($timeline);
        $this->service->destroy($timeline_category);
        return redirect()->route('timeline-category.index')->with('success', 'Category silindi');

    }

}
