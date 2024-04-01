@extends('admin.layout.app')
@section('_content')

    <div class="content-wrapper " >
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Kateqorya  @if(isset($model)) update @else add @endif</h1>
                    </div>
                </div>
            </div>
        </div>

        <section class="content">
            <div class="container-fluid">
                <?php $routeName='metaverse' ?>
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
                                            <label>Heading</label>
                                            <input type="text" placeholder="Heading" name="{{$lang}}[heading]" value="{{ old($lang.'heading', isset($model) ? $model->translateOrDefault($lang)->name : '') }}" class="form-control">
                                            @error("$lang.heading")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Title</label>
                                            <input type="text" placeholder="Title" name="{{$lang}}[title]" value="{{old($lang.'title', isset($model) ? $model->translateOrDefault($lang)->title : ''  )}}" class="form-control">
                                            @error("$lang.title")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input type="text" placeholder="Description" name="{{$lang}}[desc]" value="{{old($lang.'desc', isset($model) ? $model->translateOrDefault($lang)->desc : ''  )}}" class="form-control">
                                            @error("$lang.desc")
                                            <span class="text-danger">{{$message}}</span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Content</label>
                                            <input type="text" placeholder="Content" name="{{$lang}}[content]" value="{{old($lang.'content', isset($model) ? $model->translateOrDefault($lang)->content : ''  )}}" class="form-control">
                                            @error("$lang.desc")
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
                            <div class="col-md-2">
                                <div class="custom-control custom-switch">
                                    <input type="hidden" name="status" value="0">
                                    <input type="checkbox" class="custom-control-input" id="customSwitches" name="status" {{ !isset($model) ? 'checked' : old('status', $model->status == 1 ? 'checked' : '') }}>
                                    <label class="custom-control-label" for="customSwitches">STATUS</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
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
