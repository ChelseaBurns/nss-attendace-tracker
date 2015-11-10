angular
	.module('nss-attendance-app')

	.config(function($routeProvider) {
		$routeProvider
		.$.when('/', {
			templateUrl: '/assets/static/landing.html'
		});


	});
