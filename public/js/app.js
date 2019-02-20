// to use dependency 'ngRoute': install angular-route 
var myApp = angular.module('myApp', [
	'ngRoute']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/page1', {templateUrl: 'gorillaprojects/public/partials/page1.html', controller: 'page1Controller'});
		$routeProvider.when('/projects', {templateUrl: 'gorillaprojects/public/partials/projects.html', controller: 'projectsController'});
		$routeProvider.when('/register', {templateUrl: 'gorillaprojects/public/partials/register.html', controller: 'registerController'});

		$routeProvider.otherwise({redirectTo: '/gorillaprojects'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

	}]);