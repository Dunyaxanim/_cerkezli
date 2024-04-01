@extends('admin.layout.app')
@section('_content')

    <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
            <div class="x_title d-flex justify-content-between">
                <div class="d-flex align-items-center ">
                    <h2 class="mr-3">PRODUCT TABLE</h2>
                    <button type="button" class="btn btn-success" onclick="window.location.href = '{{ route('product.create') }}'">ADD</button>
                </div>
                <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>

                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                </ul>


            </div>
            @if (session('success'))
                <div id="successMessage" class="alert alert-success">
                    {{ session('success') }}
                </div>

                <script>
                    setTimeout(function() {
                        var successMessage = document.getElementById('successMessage');
                        if (successMessage) {
                            successMessage.remove();
                        }
                    }, 5000);
                </script>
            @endif
            <div class="x_content">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-box table-responsive">

                            <table id="datatable-checkbox" class="table table-striped table-bordered bulk_action" style="width:100%">
                                <thead>
                                <tr>

                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Slogan</th>
                                    <th class="text-center">Text</th>
                                    <th class="text-center">Kateqorya</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Stock Code</th>
                                    <th class="text-center">Stock</th>
                                    <th class="text-center">Price</th>
                                    <th class="text-center">Images</th>
                                    <th class="text-center">Əməliyatlar</th>
                                    <th class="text-center">Img</th>
                                    <th class="text-center">Hover img</th>
                                </tr>
                                </thead>

                                <tbody>
                                @foreach($models as $model)

                                    <tr>
                                        <td>
                                            {{$model->id}}
                                        </td>
                                        <td>
                                            {{ strlen($model->name) > 20 ? substr($model->name, 0, 20) . '...' : $model->name }}</td>
                                        <td>
                                            {{ strlen($model->slogan) > 20 ? substr($model->slogan, 0, 20) . '...' : $model->slogan}}</td>
                                        <td>{{ strlen($model->text) > 30 ? substr($model->text, 0, 30) . '...' : $model->text }}</td>

                                        <td class="text-center "  style="max-width: 200px;">
                                            @if($model->categories->isNotEmpty())
                                                @foreach($model->categories as $category)
                                                    <span class="border border-primary p-1">{{ $category->name }}</span>

                                                @endforeach
                                            @else
                                                Seçilməyib
                                            @endif
                                        </td>


                                        <td class="text-center">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitches{{$model->id}}" {{ $model->status == 1 ? 'checked' : '' }} onchange="updateStatus({{ $model->id }})">
                                                <label class="custom-control-label" for="customSwitches{{$model->id}}"></label>
                                            </div>
                                        </td>

                                        <td class="text-center">
                                         {{$model->stock_code}}
                                        </td>
                                        <td class="text-center">{{$model->in_stock}}</td>
                                        <td class="text-center">{{$model->price}}</td>
{{--                                        <td>--}}

{{--                                                <a type="button" href="{{ route('product-images.index', $model->id)}}" class="btn btn-primary" ><i class="fa fa-edit"> IMAGES</i></a>--}}

{{--                                        </td>--}}

                                        <td class="d-flex  justify-content-center ">
                                            <form method="POST" action="{{route('category.edit',$model->id)}}">
                                                @csrf
                                                <button type="button" class="btn btn-primary" onclick="window.location.href = '{{ route('product.edit',$model->id) }}'"><i class="fa fa-edit"> EDIT</i></button>
                                            </form>
                                            <form id="deleteForm{{$model->id}}" method="POST" action="{{ route('product.destroy', ['product' => $model->id]) }}" style="display: inline;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="button" class="btn btn-danger" onclick="confirmAndSubmit({{$model->id}})">
                                                    <i class="fa fa-trash"></i> DELETE
                                                </button>
                                            </form>
                                        </td>

                                        <td >
                                            @if($model->img)
                                            <img src="{{Storage::url($model->img)}}" width="110px" height="70px">
                                            @else
                                                Şəkil yoxdur
                                            @endif
                                        </td>
                                        <td >
                                            @if($model->img_hover)
                                                <img src="{{Storage::url($model->img_hover)}}" width="110px" height="70px">
                                            @else
                                                Şəkil yoxdur
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                        <div class="d-flex justify-content-center">{{$models->links()}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="confirmationModalLabel">TESDİQ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    Silmək istədiyinizə misiniz?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">XEYR</button>
                    <button type="button" class="btn btn-danger" onclick="submitForm()">SİL</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        function confirmAndSubmit(id) {

            $('#confirmationModal').modal('show');
            window.submitForm = function() {
                $('#deleteForm'+id).submit();
            };
        }
        function updateStatus(id) {
            var status = document.getElementById('customSwitches' + id).checked ? 1 : 0;


            $.ajax({
                url: 'product/update-status/'+id,
                type: 'POST',
                data: {
                    status: status,
                    _token: '{{ csrf_token() }}'
                },
                success: function(response) {
                    console.log(response);
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    </script>

@endsection
