@extends('admin.layout.app')
@section('_content')
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Yönetim Tablosu</title>
    <style>
        button{
            background: #26B99A;
            border: 1px solid #169F85;
            border-radius: 3px;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            padding: .375rem .75rem;
        }
        table {
            margin-top: 20px;
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:hover {
            background-color: #f5f5f5;
        }
        .image-column img {
            max-width: 100px;
            height: auto;
        }
    </style>
</head>
<body>

<h2>Yönetim Tablosu</h2>
<button type="button" class="btn btn-success" onclick="window.location.href = '{{ route('instalment.create') }}'">ADD</button>
<table>
    <thead>
    <tr>
        <th>Heading</th>
        <th>Title</th>
        <th>Image</th>
        <th>Description</th>
        <th>Content</th>
    </tr>
    </thead>
    <tbody>
    @foreach($models as $model)
        <tr>
            <td>{{ $model->heading }}</td>
            <td>{{ $model->title }}</td>
            <td><img src="{{ asset($model->img) }}" alt="Instalment Image" width="100"></td>
            <td>{{ $model->description }}</td>
            <td>{{ $model->content }}</td>
            <td>
                <form method="get" action="{{ route('instalment.edit', $model->id) }}">
                    @csrf
                    <button type="submit" class="btn btn-primary" >
                        <i class="fa fa-edit"></i> EDIT
                    </button>
                </form>
            </td>
            <td>
                <form id="deleteForm{{$model->id}}" method="POST" action="{{ route('instalment.destroy', ['instalment' => $model->id]) }}" style="display: inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger" onclick="confirmAndSubmit({{ $model->id }})">
                        <i class="fa fa-trash"></i> DELETE
                    </button>
                </form>

            </td>
        </tr>
    @endforeach

    </tbody>
</table>

</body>
</html>

@endsection
