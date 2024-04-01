@extends('admin.layout.app')
@section('_content')

    <div class="col-md-12 col-sm-12 ">

        <div class="x_panel">
            <div class="x_title d-flex justify-content-between">
                <div class="d-flex align-items-center ">
                    <h2 class="mr-3">PRODUCT IMAGES TABLE</h2>
                    <button type="button" class="btn btn-success" onclick="window.location.href = '{{ route('product-images.create') }}'">ADD</button>
                </div>
                <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>

                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                    </li>
                </ul>


            </div>
            <div class="x_content">

                <div class="row">
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask">
                                    <p>Your Text</p>
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p>Snow and Ice Incoming for the South</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask">
                                    <p>Your Text</p>
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p>Snow and Ice Incoming for the South</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask">
                                    <p>Your Text</p>
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p>Snow and Ice Incoming for the South</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask">
                                    <p>Your Text</p>
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p>Snow and Ice Incoming for the South</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask">
                                    <p>Your Text</p>
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p>Snow and Ice Incoming for the South</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask no-caption">
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p><strong>Image Name</strong>
                                </p>
                                <p>Snow and Ice Incoming</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask no-caption">
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p><strong>Image Name</strong>
                                </p>
                                <p>Snow and Ice Incoming</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask no-caption">
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p><strong>Image Name</strong>
                                </p>
                                <p>Snow and Ice Incoming</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask no-caption">
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p><strong>Image Name</strong>
                                </p>
                                <p>Snow and Ice Incoming</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-55">
                        <div class="thumbnail">
                            <div class="image view view-first">
                                <img style="width: 100%; display: block;" src="images/media.jpg" alt="image" />
                                <div class="mask no-caption">
                                    <div class="tools tools-bottom">
                                        <a href="#"><i class="fa fa-link"></i></a>
                                        <a href="#"><i class="fa fa-pencil"></i></a>
                                        <a href="#"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="caption">
                                <p><strong>Image Name</strong>
                                </p>
                                <p>Snow and Ice Incoming</p>
                            </div>
                        </div>
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
