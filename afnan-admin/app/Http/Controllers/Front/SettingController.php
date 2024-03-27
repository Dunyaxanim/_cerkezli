<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Admin\Product;
use App\Models\Admin\Settings;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(){
        $settings = Settings::all();
        return response()->json($settings);
    }
}
