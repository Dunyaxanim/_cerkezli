@extends('admin.layout.app')
@section('_content')

    <div class="content-wrapper " >
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Kateqorya  @if(isset($model)) update @else add @endif</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Ana səhifə</a></li>
                            <li class="breadcrumb-item active">Kateqoryalar</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <?php $routeName='category' ?>
                <form action="{{ isset($model) ? route($routeName.'.update',$model->id) :  route($routeName.'.store')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @isset($model)
                        @method('PUT')
                    @endisset

                    <div class="form-group p-3">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-outline form-inline">
                                    <input type="number" id="typeNumber" name="order" placeholder="1" min="0" value="{{old('order',isset($model) ? $model->order : '')}}" class="form-control w-25 " />
                                    <label class="form-check-label ml-2" for="typeNumber">Order</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group col-3">
                        <label>Img</label>
                        @isset($model->img)
                            <br>
                            <img width="200" src="{{asset('storage/'.$model->img)}}">
                        @endisset
                        <input type="file" name="img" class="form-control">
                        @error('img')
                        <span class="text-danger">{{$message}}</span>
                        @enderror
                    </div>
                    <button class="btn btn-success">Save</button>
                </form>
            </div>
        </section>
    </div>



@endsection
