@extends('admin.layout.app')
@section('_content')


    <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
            <div class="x_title d-flex justify-content-between">
                <div class="d-flex align-items-center ">
                    <h2 class="mr-3">VIDEO TABLE</h2>
                    <button type="button" class="btn btn-success" onclick="window.location.href = '{{ route('video.create') }}'">ADD</button>
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

                                    <th>Title</th>
                                    <th>Desc</th>
                                    <th class="text-center">Thumbnail</th>
                                    <th class="text-center">Video</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Sıra</th>
                                    <th class="text-center">Əməliyatlar</th>
                                    <th class="text-center">Yaradılma tarixi</th>
                                </tr>
                                </thead>


                                <tbody>
                                @foreach($models as $model)
                                    <tr>
                                        <td>
                                            {{$model->id}}
                                        </td>
                                        <td>
                                            {{ strlen($model->title) > 20 ? substr($model->title, 0, 20) . '...' : $model->title }}</td>
                                        <td>
                                            {{ strlen($model->desc) > 20 ? substr($model->desc, 0, 20) . '...' : $model->desc}}</td>
                                        <td class="text-center">
                                            @if($model->img)
                                               <img width="100" height="50" src=" {{ Storage::url($model->img)}}">

                                            @else
                                                no thumbnail
                                            @endif
                                        </td>
                                        <td>{{ strlen($model->url) > 30 ? substr($model->url, 0, 30) . '...' : $model->url }}</td>


                                        <td class="text-center">
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitches{{$model->id}}" {{ $model->status == 1 ? 'checked' : '' }} onchange="updateStatus({{ $model->id }})">
                                                <label class="custom-control-label" for="customSwitches{{$model->id}}"></label>
                                            </div>
                                        </td>
                                        <td class="text-center">{{$model->order}}</td>
                                        <td class=" d-flex justify-content-center">
                                            <form method="POST" action="{{route('category.edit',$model->id)}}">
                                                @csrf
                                                <button type="button" class="btn btn-primary" onclick="window.location.href = '{{ route('video.edit',$model->id) }}'"><i class="fa fa-edit"> EDIT</i></button>
                                            </form>


                                            <form id="deleteForm{{$model->id}}" method="POST" action="{{ route('video.destroy', ['video' => $model->id]) }}" style="display: inline;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="button" class="btn btn-danger" onclick="confirmAndSubmit({{$model->id}})">
                                                    <i class="fa fa-trash"></i> DELETE
                                                </button>
                                            </form>
                                        </td>
                                        <td class="text-center">
                                            {{ $model->created_at->format('d.m.Y') }}
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
                url: 'video/update-status/' + id,
                type: 'Post',
                data: {
                    status: status,
                    _token: '{{ csrf_token() }}'
                },
            });
        }

    </script>

@endsection
