require.config({
	baseUrl: 'assets/scripts',
	paths: {
		jquery: '../bower_components/jquery/jquery',
		requirejs: '../bower_components/requirejs/require',
		loglevel: '../bower_components/loglevel/dist/loglevel.min',
		lodash: '../bower_components/lodash/dist/lodash',
	},
	shim: {
		'lodash': {
			exports: '_'
		}
	}
});

require(['loglevel', 'jquery'], function (log) {

	'use strict';
	// use app here

	//Log All Messages
	log.setLevel('trace');

	$(function () {

		log.debug('Running the Main Script');

	});

	// IE ERROR OUT CONSOLE
	if(!window.console){window.console = { log: function(){} }; }

});