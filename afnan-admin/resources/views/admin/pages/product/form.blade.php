@extends('admin.layout.app')
@section('_content')
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/css/select2.min.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.4/js/select2.min.js"></script>


    <div class="content-wrapper " >
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Product @if(isset($model)) update @else add  @endif</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Ana səhifə</a></li>
                            <li class="breadcrumb-item active">Product</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <?php $routeName='product' ?>
                <form action="{{ isset($model) ? route($routeName.'.update',$model->id) :  route($routeName.'.store')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @isset($model)
                        @method('PUT')
                    @endisset

                    <div class="card card-primary card-tabs">
                        <div class="card-header p-0 pt-1">
                            <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                @foreach(config('app.languages') as $lang)
                                    <li class="nav-item ">
                                        <a class="nav-link {{$loop->first ? 'active show' : ''}}@error("$lang.title") text-danger @enderror" id="custom-tabs-one-home-tab" data-toggle="pill" href="#tab-{{$lang}}" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">{{$lang}}</a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content" id="custom-tabs-one-tabContent">
                                @foreach(config('app.languages') as $lang)
                                    <div class="tab-pane fade {{$loop->first ? 'active show' : ''}}" id="tab-{{$lang}}" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" name="{{$lang}}[name]" value="{{ old($lang.'name', isset($model) ? $model->translateOrDefault($lang)->name : '') }}" class="form-control">
                                            @error("$lang.name")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input type="text" placeholder="Description" name="{{$lang}}[text]" value="{{old($lang.'text', isset($model) ? $model->translateOrDefault($lang)->text : ''  )}}" class="form-control">
                                            @error("$lang.text")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Slogan</label>
                                            <input type="text" placeholder="Slogan" name="{{$lang}}[slogan]" value="{{old($lang.'slogan', isset($model) ? $model->translateOrDefault($lang)->slogan : ''  )}}" class="form-control">
                                            @error("$lang.seo_desc")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Payment Option</label>
                                            <input type="text" placeholder="Payment Options" name="{{$lang}}[payment_options]" value="{{old($lang.'payment_options', isset($model) ? $model->translateOrDefault($lang)->payment_options : ''  )}}" class="form-control">
                                            @error("$lang.payment_options")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Seo Title</label>
                                            <input type="text" placeholder="Seo Title" name="{{$lang}}[seo_title]" value="{{old($lang.'seo_title', isset($model) ? $model->translateOrDefault($lang)->seo_title : ''  )}}" class="form-control">
                                            @error("$lang.seo_title")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Seo Description</label>
                                            <input type="text" placeholder="Seo Description" name="{{$lang}}[seo_desc]" value="{{old($lang.'seo_desc', isset($model) ? $model->translateOrDefault($lang)->seo_desc : ''  )}}" class="form-control">
                                            @error("$lang.seo_desc")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Seo Keywords</label>
                                            <input type="text" placeholder="Seo Keywords" name="{{$lang}}[seo_key]" value="{{old($lang.'seo_key', isset($model) ? $model->translateOrDefault($lang)->seo_key : ''  )}}" class="form-control">
                                            @error("$lang.seo_key")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                    </div>
                                @endforeach
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
                            <div class="col-md-2">

                                <div class="ui-select">
                                    <input  class="form-control" type="number" name="price"  class="input-class" value="{{old('price', isset($model) ? $model->price : ''  )}}">


                                    <span class="ml-2"> QIYMƏT</span>

                                </div>
                                @error("price")
                                <span class="text-danger">{{$message}}</span>
                                @enderror
                            </div>
                            <div class="col-md-2">

                                <div class="ui-select">
                                    <input  class="form-control" type="number" name="in_stock" class="input-class" value="{{old('in_stock', isset($model) ? $model->in_stock : ''  )}}">

                                    <span class="ml-2"> STOCK</span>

                                </div>

                            </div>
                            <div class="col-md-2">
                                <div class="row ml-3">
                                    <input type="hidden" name="category_id[]" id="selected-categories">
                                    <select class="js-select2" multiple="multiple" name="categories[]">
                                        @foreach($categories as $category)
                                            <option value="{{$category->id}}" {{ (isset($model) && in_array($category->id, $model->categories->pluck('id')->toArray())) ? 'selected' : '' }}>{{$category->name}}</option>
                                        @endforeach
                                    </select>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Img</label>
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
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Img Hover</label>
                                @isset($model->img_hover)
                                    <br>
                                    <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover) }}">
                                @endisset
                                <input type="file" name="img_hover" class="form-control">
                                @error('img_hover')
                                <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success">Save</button>
                </form>
            </div>
        </section>
    </div>

<script>

    $(".js-select2").select2({
        closeOnSelect : false,
        placeholder : "Categoires",
        allowHtml: true,
        allowClear: true,
        tags: true
    });
    $(".js-select2").on("change", function () {
        var selectedCategories = $(this).val();
        $("#selected-categories").val(selectedCategories);
        console.log(selectedCategories);
    });
    $('.icons_select2').select2({
        width: "100%",
        templateSelection: iformat,
        templateResult: iformat,
        allowHtml: true,
        placeholder: "Categories",
        dropdownParent: $( '.select-icon' ),
        allowClear: true,
        multiple: false
    });


    function iformat(icon, badge,) {
        var originalOption = icon.element;
        var originalOptionBadge = $(originalOption).data('badge');

        return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '<span class="badge">' + originalOptionBadge + '</span></span>');
    }

</script>

@endsection
