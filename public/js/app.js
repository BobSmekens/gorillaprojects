// to use dependency 'ngRoute': install angular-route 
var myApp = angular.module('myApp', [
	'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/page1', {
		templateUrl: 'gorillaprojects/public/partials/page1.html',
		controller: 'page1Controller'
	});
	$routeProvider.when('/projects', {
		templateUrl: 'gorillaprojects/public/partials/projects.html',
		controller: 'projectsController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'gorillaprojects/public/partials/register.html',
		controller: 'registerController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'gorillaprojects/public/partials/login.html',
		controller: 'loginController'
	});
	$routeProvider.when('/me', {
		templateUrl: 'gorillaprojects/public/partials/me.html',
		controller: 'meController'
	});
	$routeProvider.when('/user/:id', {templateUrl: 'gorillaprojects/public/partials/singleUser.html', controller: 'userController'});
	$routeProvider.when('/gorillas', {
		templateUrl: 'gorillaprojects/public/partials/gorillas.html',
		controller: 'gorillasController'
	});


	$routeProvider.otherwise({redirectTo: '/gorillaprojects'});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);