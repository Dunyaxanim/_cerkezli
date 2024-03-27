<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use App\Models\Admin\Video;
use App\Services\RepositoryService\VideoService;
use Illuminate\Http\Request;


class VideoController extends Controller
{
    public function __construct(protected VideoService $service)
    {}
    public function index(){
        $models=$this->service->dataAllWithPaginate();
        return view('admin.pages.video.index',['models'=>$models]);
    }
    public function create(){
        return view('admin.pages.video.form');
    }
    public function store(VideoRequest $request){
        $this->service->store($request);
        return redirect()->route('video.index')->with('success', 'Video uğurla əlavə edildi');
    }
    public function destroy(Video $video)
    {
        $this->service->delete($video);
        return redirect()->route('video.index')->with('success', 'Video silindi');
    }
    public function updateStatus(Request $request, $id)
    {
        $model =Video::findOrFail($id);
        $model->status = $request->status;
        $model->save();
        return response()->json(['message' => 'Status uğurla dəyişdirildi']);
    }
    public function edit(Video $video)
    {
        return view('admin.pages.video.form',['model'=>$video]);
    }
    public function update(VideoRequest $videoRequest, Video $video)
    {
        $this->service->update($videoRequest,$video);
        return redirect()->back();
    }

}
