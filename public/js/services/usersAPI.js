var UrlAPIUsers = "http://192.168.2.13:8000/users"
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
