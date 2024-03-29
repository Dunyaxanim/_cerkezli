<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TimelineCategoryRequest;
use App\Http\Requests\TimelineRequest;
use App\Models\Admin\Category;
use App\Models\Admin\Timeline;
use App\Models\Admin\TimelineCategory;
use App\Models\Admin\TimelineCategoryTranslation;
use App\Services\RepositoryService\TimelineCategoryService;
use App\Services\RepositoryService\TimelineService;
use Illuminate\Http\Request;

class TimelineController extends Controller
{

    public function __construct(protected TimelineService $service)
    {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $timelines = Timeline::all();

        return view('admin.pages.timeline.index', compact('timelines'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $timelineCategory = TimelineCategory::all();
        return view('admin.pages.timeline.form', compact('timelineCategory'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TimelineRequest $request)
    {
        //
        $this->service->store($request);
        return redirect()->route('timeline.index')->with('success', 'Blog uğurla əlavə edildi');
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
    public function edit(Timeline $timeline)
    {
        //
        $categories=TimelineCategory::all();
        return view('admin.pages.timeline.form',['model'=>$timeline, 'categories'=>$categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TimelineRequest $timelineRequest, Timeline $timeline)
    {
        //
//        dd($timelineRequest);
        $this->service->update($timelineRequest, $timeline);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Timeline $timeline)
    {
        $this->service->destroy($timeline);
        return redirect()->route('timeline.index')->with('success', 'Category silindi');
    }
}
