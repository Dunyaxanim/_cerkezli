<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
            <a href="#" class="site_title"><i class="fa fa-desktop"></i> <span>GO WEB SITE</span></a>
        </div>

        <div class="clearfix"></div>

        <!-- menu profile quick info -->
        <div class="profile clearfix">
            <div class="profile_pic">
                <img
                    src="{{ !empty(auth()->user()->image) ? asset(auth()->user()->image) : asset('projects/admin/images/img.jpg') }}"
                    alt="pic" class="img-circle profile_img">
            </div>
            <div class="profile_info">
                <span>Welcome,</span>
                @if(auth()->check() && !empty(auth()->user()->name))
                    <h2>{{ auth()->user()->name }}</h2>
                @else
                    <h2>ADMIN</h2>
                @endif
            </div>
        </div>
        <!-- /menu profile quick info -->

        <br/>

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3>GENERAL</h3>
                <ul class="nav side-menu">

                    <li><a><i class="fa fa-certificate"></i> Kateqoryalar <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('category.index')}}">Kateqorya List</a></li>
                            <li><a href="{{route('category.create')}}">Kateqorya əlavə et</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="nav side-menu">

                    <li><a><i class="fa fa-plus"></i> Product<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('product.index')}}">Product List</a></li>
                            <li><a href="{{route('product.create')}}">Product əlavə et</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="nav side-menu">
                    <li><a><i class="fa fa-line-chart"></i> TimeLine Category<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('timeline-category.index')}}">Timeline Category List</a></li>
                            <li><a href="{{route('timeline-category.create')}}">Timeline Category əlavə et</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav side-menu">
                    <li><a><i class="fa fa-line-chart"></i> TimeLine <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('timeline.index')}}">Timeline List</a></li>
                            <li><a href="{{route('timeline.create')}}">Timeline əlavə et</a></li>
                        </ul>
                    </li>
                </ul>


                <ul class="nav side-menu">

                    <li><a><i class="fa fa-pencil-square-o"></i> Bloglar <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('blog.index')}}">Blog List</a></li>
                            <li><a href="{{route('blog.create')}}">Blog əlavə et</a></li>
                        </ul>
                    </li>

                </ul>

                <ul class="nav side-menu">

                    <li><a><i class="fa fa-video-camera"></i> Video <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('video.index')}}">Video List</a></li>
                            <li><a href="{{route('video.create')}}">Video add</a></li>
                        </ul>
                    </li>

                </ul>
                <ul class="nav side-menu">

                    <li><a><i class="fa fa-image"></i>Our Looks<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('look.index')}}">Looks List</a></li>
                            <li><a href="{{route('look.create')}}">Looks add</a></li>
                        </ul>
                    </li>

                </ul>


                <ul class="nav instal-menu">

                    <li><a><i class="fa fa-image"></i>Instalments<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('instalment.index')}}">Instalments List</a></li>
                            <li><a href="{{route('instalment.create')}}">Instalments Add</a></li>
                        </ul>
                    </li>

                </ul>
                <ul class="nav metaverse_exhibitions">

                    <li><a><i class="fa fa-image"></i>Metaverse<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('metaverse.index')}}">Metaverse_exhibitions List</a></li>
                            <li><a href="{{route('metaverse.create')}}">Metaverse_exhibitions Add</a></li>
                        </ul>
                    </li>

                </ul>


                <ul class="nav creator">

                    <li><a><i class="fa fa-image"></i>Creator<span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('creator.index')}}">Creator_exhibitions List</a></li>
                            <li><a href="{{route('creator.create')}}">Creator_exhibitions Add</a></li>
                        </ul>
                    </li>

                </ul>
            </div>

            <div class="menu_section">
                <h3>Users</h3>
                <ul class="nav side-menu">
                    <li><a><i class="fa fa-users"></i> Users<span class="fa fa-chevron-down"></span></a>

                        <ul class="nav child_menu">
                            <li><a href="{{route('user.index')}}">İstifadəçi List</a></li>
                            <li><a href="{{route('user.create')}}">İstifadəçi əlavə et</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
            <div class="menu_section">
                <h3>SETTINGS</h3>
                <ul class="nav side-menu">
                    <li><a><i class="fa fa-gear"></i> Site Settings <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="{{route('settings.edit',1)}}">Site Settings</a></li>
                            <li><a href="{{route('privacy.edit',1)}}">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>
            </div>


        </div>
        <!-- /sidebar menu -->

        <!-- /menu footer buttons -->
        <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="#"
               onclick="event.preventDefault();document.getElementById('logout-form').submit();">

                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST"> @csrf</form>
        </div>
        <!-- /menu footer buttons -->
    </div>
</div>
