// to use dependency 'ngRoute': install angular-route 
var myApp = angular.module('myApp', [
	'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/page1', {
		templateUrl: 'public/partials/page1.html',
		controller: 'page1Controller'
	});
	$routeProvider.when('/projects', {
		templateUrl: 'public/partials/projects.html',
		controller: 'projectsController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'public/partials/register.html',
		controller: 'registerController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'public/partials/login.html',
		controller: 'loginController'
	});
	$routeProvider.when('/me', {
		templateUrl: 'public/partials/me.html',
		controller: 'meController'
	});
	$routeProvider.when(`/users/:id`, {
		templateUrl: '/public/partials/singlegorilla.html',
		controller: 'singlegorillaController'
	});
	$routeProvider.when('/gorillas', {
		templateUrl: 'public/partials/gorillas.html',
		controller: 'gorillasController'
	});
	$routeProvider.when('/addproject', {
		templateUrl: 'public/partials/addproject.html',
		controller: 'addprojectController'
	});
	$routeProvider.when('/projects/:projectId', {
		templateUrl: '/public/partials/singleproject.html',
		controller: 'singleprojectController'
	});


	// $routeProvider.otherwise({
	// 	redirectTo: '/'
	// });

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);