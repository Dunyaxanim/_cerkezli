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
                <?php $routeName='timeline-category' ?>
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
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
{{--                    <div class="row">--}}
{{--                        <div class="col-md-2">--}}
{{--                            <div class="form-group">--}}
{{--                                <label>Img</label>--}}
{{--                                @isset($model->img)--}}
{{--                                    <br>--}}
{{--                                    <img width="187" height="100" src="{{ asset('storage/'.$model->img) }}">--}}
{{--                                @endisset--}}
{{--                                <input type="file" name="img" class="form-control">--}}
{{--                                @error('img')--}}
{{--                                <span class="text-danger">{{ $message }}</span>--}}
{{--                                @enderror--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="col-md-2">--}}
{{--                            <div class="form-group">--}}
{{--                                <label>Img Hover</label>--}}
{{--                                @isset($model->img_hover)--}}
{{--                                    <br>--}}
{{--                                    <img width="187" height="100" src="{{ asset('storage/'.$model->img_hover) }}">--}}
{{--                                @endisset--}}
{{--                                <input type="file" name="img_hover" class="form-control">--}}
{{--                                @error('img_hover')--}}
{{--                                <span class="text-danger">{{ $message }}</span>--}}
{{--                                @enderror--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                    </div>--}}
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
