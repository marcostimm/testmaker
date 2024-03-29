let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css/app.css')
    .scripts(
        [
            'resources/assets/js/lib/jquery-1.10.2.js'
        ], 
        'public/js/all.js')
    .scripts(
        [
            'resources/assets/js/lib/chartist.min.js',
            'resources/assets/js/lib/bootstrap-notify.js'
        ],
        'public/js/lib.js'
        )
    .styles([
            'resources/assets/css/bootstrap.min.css',
            'resources/assets/css/animate.min.css',
            'resources/assets/css/themify-icons.css'
        ], 
        'public/css/all.css');
    //.sass('resources/assets/sass/paper-dashboard.scss', 'public/css/paper-dashboard.css')