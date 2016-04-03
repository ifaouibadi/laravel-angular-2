var elixir 		= require('laravel-elixir');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix
    	.less('app.less', 'public/assets/css/app.css')
    	.scripts([
			'../../../node_modules/es6-shim/es6-shim.min.js',
			'../../../node_modules/systemjs/dist/system-polyfills.js',
			'../../../node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
			'../../../node_modules/angular2/bundles/angular2-polyfills.js',
			'../../../node_modules/systemjs/dist/system.src.js',
			'../../../node_modules/rxjs/bundles/Rx.js',
			'../../../node_modules/angular2/bundles/angular2.dev.js',
			'../../../node_modules/angular2/bundles/router.dev.js',
			'../../../node_modules/angular2/bundles/http.dev.js'

		], 'public/assets/js/vendors.js')
		.version(['public/assets/css/app.css', 'public/assets/js/**/**/**']);

    mix.browserSync({
        proxy           : "http://localhost:8000/"
    });
});
