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
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="css/animate.min.css" rel="stylesheet" />
    <link href="css/themify-icons.css" rel="stylesheet" />

    <!--  App CSS     -->
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">

    <!--  Fonts and icons     -->
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>

    <!-- <script src="{{mix('js/app.js')}}" ></script> -->

</head>
<body>

<div id="root"></div>

<div class="wrapper">

    <Sidebar />

    <div class="main-panel">
        
        <NavTop />

        <div class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-3 col-sm-6">
                        <CardQuestions />
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <CardSubjects />
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <CardExams />    
                    </div>

                    <div class="col-lg-3 col-sm-6">
                        <CardExamsBySubject />
                    </div>

                </div>
                
                <div class="row">
                    <div class="col-md-6">
                        <ChartSubject />
                    </div>

                    <div class="col-md-6">
                        <ChartDifficultLevel />
                    </div>

                </div>
            </div>
        </div>

        <Footer />

    </div>
</div>


</body>

    <script src="{{mix('js/app.js')}}" ></script>

	<!--  Checkbox, Radio & Switch Plugins -->
	<script src="js/bootstrap-checkbox-radio.js"></script>
	<!--  Charts Plugin -->
	<script src="js/chartist.min.js"></script>
    <!--  Notifications Plugin    -->
    <script src="js/bootstrap-notify.js"></script>
    <!-- Paper Dashboard Core javascript and methods for Demo purpose -->
	<script src="js/paper-dashboard.js"></script>
	<!-- Paper Dashboard DEMO methods, don't include it in your project! -->
	<script src="js/demo.js"></script>

	<script type="text/javascript">
    	$(document).ready(function(){
        	demo.initChartist();
        	// $.notify({
            // 	icon: 'ti-gift',
            // 	message: "Welcome to <b>Paper Dashboard</b> - a beautiful Bootstrap freebie for your next project."
            // },{
            //     type: 'success',
            //     timer: 4000
            // });
    	});
	</script>

</html>
