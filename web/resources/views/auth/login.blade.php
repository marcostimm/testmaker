<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>TestMaker</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <!--  Libs CSS     -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/animate.min.css" rel="stylesheet" />
    <link href="css/themify-icons.css" rel="stylesheet" />

    <!--  App CSS     -->
    <link href="css/paper-dashboard.css" rel="stylesheet" />
    <link href="css/app.css" rel="stylesheet" />

    <!--  Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>

</head>
<body>

<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-4 col-md-offset-4">
        <h1 class="text-center login-title">Test Maker</h1>
        <div class="card card-user">
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="image">
                    <img src="img/top.jpg" alt="...">
                </div>
                <div class="content">
                    <div class="author">
                        <img class="avatar border-white" src="img/avatar.png" alt="...">
                        <h4 class="title">Credenciais<br></h4>
                    </div>
                    <p class="description text-center">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email de acesso</label>
                            <input name="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" id="email" placeholder="Email" value="{{ old('email') }}" autocomplete="off" required autofocus>
                            @if ($errors->has('email'))
                                <span class="text-danger"><small>{{ $errors->first('email') }}</small></span>
                            @endif
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Senha</label>
                            <input name="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" id="password" placeholder="Senha">
                            @if ($errors->has('password'))
                                <span class="text-danger"><small>{{ $errors->first('password') }}</small></span>
                            @endif
                        </div>
                    </p>
                </div>
                <hr>
                <div class="text-left col-md-offset-1">
                    <div class="row">
                        <div class="col-md-7">
                        <a class=" btn-link" href="{{ route('password.request') }}">
                                        {{ __('Esqueceu a senha?') }}
                                    </a>
                        </div>
                        <div class="col-md-5 text-right">
                            <button type="submit" class="btn btn-info btn-fill">Entrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</div>


</body>

    <script src="js/app.js" type="text/javascript"></script>

    <!-- Paper Dashboard Core javascript and methods for Demo purpose -->
	<script src="js/paper-dashboard.js"></script>
	<!-- Paper Dashboard DEMO methods, don't include it in your project! -->


</html>
