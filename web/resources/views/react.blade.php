<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>TestMaker</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />

    <!--  Libs CSS     -->
    <link href="{{mix('css/all.css')}}" rel="stylesheet" type="text/css">
    <!--  App CSS     -->
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">

    <!--  Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
</head>
<body class="bodypage">
    <div id="root"></div>
</body>
    <script src="{{mix('js/all.js')}}" ></script>
    <script src="{{mix('js/app.js')}}" ></script>
</html>
