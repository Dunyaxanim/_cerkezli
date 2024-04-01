@extends('admin.layout.app')
@section('_content')
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js"></script>


<div class="content-wrapper ">
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Look @if(isset($model)) update @else add @endif</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Ana səhifə</a></li>
                        <li class="breadcrumb-item active">Our Looks</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <section class="content">
        <div class="container-fluid">
            <?php $routeName = 'look' ?>
            <form action="{{ isset($model) ? route($routeName.'.update',$model->id) :  route($routeName.'.store')}}" method="POST" enctype="multipart/form-data">
                @csrf
                @isset($model)
                @method('PUT')
                @endisset


                <div class="row">
                    <div class="col-md-2">
                        <div class="form-group">
                            <label>Main Img</label>
                            @isset($model->img)
                            <br>
                            <img width="187" height="100" src="{{ asset('storage/'.$model->img) }}">
                            @endisset
                            <input type="file" name="img" class="form-control">
                            @error('img')

                            <span class="text-danger">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>


                </div>
                <div class="row pt-3">
                    <div class="col-md-2 mr-2 bg-orange">
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> X oxu</span>
                                <input class="form-control" type="number" name="x1" class="input-class" value="{{old('x1', isset($model) ? $model->x1 : ''  )}}">
                            </div>
                            @error("x1")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> Y oxu</span>
                                <input class="form-control" type="number" name="y1" class="input-class" value="{{old('y1', isset($model) ? $model->y1 : ''  )}}">
                            </div>
                            @error("y1")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div>
                            <div class="form-group pt-3">
                                <label>Img Hover</label>
                                @isset($model->img_hover1)
                                <br>
                                <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover1) }}">
                                @endisset
                                <input type="file" name="img_hover1" class="form-control">
                                @error('img_hover1')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <label for="exampleSelect">Product</label>
                                    <select class="form-control" id="exampleSelect" name="product_id1">
                                        <option value="" selected>Məhsul seçin</option>
                                        @foreach($products as $product)
                                        <option value="{{$product->id}}" {{ isset($model) && $model->product_id == $product_id ? 'selected' : '' }}> {{ strlen($product->name) > 20 ? substr($product->name, 0, 20) . '...' : $product->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('product_id')

                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 mr-2 bg-orange">
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> X oxu</span>
                                <input class="form-control" type="number" name="x2" class="input-class" value="{{old('x2', isset($model) ? $model->x2 : ''  )}}">
                            </div>
                            @error("x2")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> Y oxu</span>
                                <input class="form-control" type="number" name="y2" class="input-class" value="{{old('y2', isset($model) ? $model->y2 : ''  )}}">
                            </div>
                            @error("y2")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div>
                            <div class="form-group pt-3">
                                <label>Img Hover</label>
                                @isset($model->img_hover2)
                                <br>
                                <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover2) }}">
                                @endisset
                                <input type="file" name="img_hover2" class="form-control">
                                @error('img_hover2')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <label for="exampleSelect">Product</label>
                                    <select class="form-control" id="exampleSelect" name="product_id2">
                                        <option value="" selected>Məhsul seçin</option>
                                        @foreach($products as $product)
                                        <option value="{{$product->id}}" {{ isset($model) && $model->product_id == $product_id ? 'selected' : '' }}> {{ strlen($product->name) > 20 ? substr($product->name, 0, 20) . '...' : $product->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('product_id')

                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 mr-2 bg-orange">
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> X oxu</span>
                                <input class="form-control" type="number" name="x3" class="input-class" value="{{old('x3', isset($model) ? $model->x3 : ''  )}}">
                            </div>
                            @error("x3")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> Y oxu</span>
                                <input class="form-control" type="number" name="y3" class="input-class" value="{{old('y3', isset($model) ? $model->y3 : ''  )}}">
                            </div>
                            @error("y3")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div>
                            <div class="form-group pt-3">
                                <label>Img Hover</label>
                                @isset($model->img_hover3)
                                <br>
                                <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover3) }}">
                                @endisset
                                <input type="file" name="img_hover3" class="form-control">
                                @error('img_hover3')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <label for="exampleSelect">Product</label>
                                    <select class="form-control" id="exampleSelect" name="product_id3">
                                        <option value="" selected>Məhsul seçin</option>
                                        @foreach($products as $product)
                                        <option value="{{$product->id}}" {{ isset($model) && $model->product_id == $product_id ? 'selected' : '' }}> {{ strlen($product->name) > 20 ? substr($product->name, 0, 20) . '...' : $product->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('product_id')

                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 mr-2 bg-orange">
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> X oxu</span>
                                <input class="form-control" type="number" name="x4" class="input-class" value="{{old('x4', isset($model) ? $model->x4 : ''  )}}">
                            </div>
                            @error("x4")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div class="col-md-6">

                            <div>
                                <span class="ml-2"> Y oxu</span>
                                <input class="form-control" type="number" name="y4" class="input-class" value="{{old('y4', isset($model) ? $model->y4 : ''  )}}">
                            </div>
                            @error("y4")
                            <span class="text-danger">{{$message}}</span>
                            @enderror


                        </div>
                        <div>
                            <div class="form-group pt-3">
                                <label>Img Hover</label>
                                @isset($model->img_hover4)
                                <br>
                                <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover4) }}">
                                @endisset
                                <input type="file" name="img_hover4" class="form-control">
                                @error('img_hover4')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-md">
                                <div class="form-group">
                                    <label for="exampleSelect">Product</label>
                                    <select class="form-control" id="exampleSelect" name="product_id4">
                                        <option value="" selected>Məhsul seçin</option>
                                        @foreach($products as $product)
                                        <option value="{{$product->id}}" {{ isset($model) && $model->product_id == $product_id ? 'selected' : '' }}> {{ strlen($product->name) > 20 ? substr($product->name, 0, 20) . '...' : $product->name}}</option>
                                        @endforeach
                                    </select>
                                    @error('product_id')

                                    <span class="text-danger">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group p-3">
                    <div class="row">
                        <div class="col-md-2 mt-2">
                            <div class="custom-control custom-switch">
                                <input type="hidden" name="status" value="0">
                                <input type="checkbox" class="custom-control-input" id="customSwitches" name="status" {{ !isset($model) ? 'checked' : old('status', $model->status == 1 ? 'checked' : '') }}>
                                <label class="custom-control-label" for="customSwitches">STATUS</label>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    </section>
</div>



@endsection