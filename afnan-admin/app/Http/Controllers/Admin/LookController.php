<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LookRequest;
use App\Http\Requests\ProductRequest;
use App\Models\Admin\Category;
use App\Models\Admin\Look;
use App\Models\Admin\LookDetail;
use App\Models\Admin\Product;
use App\Services\RepositoryService\LookService;
use App\Services\RepositoryService\VideoService;
use Illuminate\Http\Request;


class LookController extends Controller
{
    public function __construct(protected LookService $service)
    {}

   public function index(){
       $models=Look::all();
       return view('admin.pages.look.index',['models'=>$models]);
   }

    public function create(){
       $products=Product::all();
        return view('admin.pages.look.form',['products'=>$products]);
    }
   public  function store(LookRequest $request){


       $this->service->store($request);
       return redirect()->route('look.index')->with('success', 'Slide uğurla əlavə edildi');
   }
    public function updateStatus(Request $request, $id)
    {


        $model =Look::findOrFail($id);
        $model->status = $request->status;
        $model->save();
        return redirect()->route('look.index')->with('success', 'Status ugurla deyisdirildi');
    }
    public function destroy(Look $look)
    {
        $this->service->delete($look);
        return redirect()->route('look.index')->with('success', 'Slide silindi !');
    }
    public function detail($id){
        $models = LookDetail::with('look', 'product')->where('look_id', $id)->get();
        return view('admin.pages.look.detail',['models'=>$models]);
    }
    public function detaildelete($id){
        $lookDetail = LookDetail::find($id);


        if ($lookDetail) {
            $lookDetail->delete();
            return redirect()->back()->with('success', 'Detail silindi');
        } else {
            return redirect()->back()->with('error', 'Detail tapilmadi');
        }
    }
    public function edit(Look $look)
    {

        $products=Product::all();
        $lookDetails = $look->detail;
        return view('admin.pages.look.edit',['model'=>$look, 'products'=>$products,'lookDetails'=>$lookDetails]);
    }
    public function update(LookRequest $lookrequest, Look $look)
    {

        $this->service->update($lookrequest,$look);
        return redirect()->back();
    }

}
