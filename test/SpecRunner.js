require.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery',
		backbone: 'bower_components/backbone/backbone',
		underscore: 'bower_components/lodash/dist/lodash',
		mocha: 'bower_components/mocha/mocha',
		chai: 'bower_components/chai/chai'
	}
});

require(['mocha', 'chai'], function (Mocha, Chai) {
	mocha.setup('bdd');

	require([
		'models/character',
	], function(require) {
		mocha.run();
	});
});