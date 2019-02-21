const baseUrl = "http://192.168.2.53:8000";

var UrlAPIUsers = baseUrl + "/users";
var urlMe = baseUrl + "/me";
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

	service.getUsers = (url) => {
        console.log(`Get users API`);
		return $http.get(
            url
			)
			.then(function(data) {
				return data;
			})
			.catch(function(data) {
				return data;
			});
	}
	// service.getUsers = () => {
    //     console.log(`Get users API`);
	// 	return $http.get(
    //         UrlAPIUsers
	// 		)
	// 		.then(function(data) {
	// 			return data;
	// 		})
	// 		.catch(function(data) {
	// 			return data;
	// 		});
	// }
	
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
