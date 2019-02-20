var UrlAPIUsers = "http://192.168.2.13:8000/users";
var urlMe = "http://192.168.2.13:8000/me";
let params = {
	headers: {
		'Content-Type': 'application/json',
		'x-access-token': sessionStorage.getItem('token')
	},
	method: 'GET'
};
console.log("usersAPI connected");
myApp.factory(`users`, [`$http`, function($http) {
	let service = {};
	console.log('factory Started');

	service.getUsers = () => {
        console.log(`Get users API`);
		return $http.get(
            UrlAPIUsers
			)
			.then(function(data) {
				return data;
			})
			.catch(function(data) {
				return data;
			});
	}
	
	service.getMyData = () => {
        console.log(`Get my data from API`);
		return fetch(
			urlMe, params
			)
			.then(function(data) {
				return data;
			})
			.catch(function(data) {
				return data;
			});
    }
	
    service.newUser = () => {
        console.log(`new user is:`);
		return $http.post(
            UrlAPIUsers
			)
			.then(function(data) {
				return data;
			})
			.catch(function(data) {
				return data;
			});
	}

	return service;
}]);
