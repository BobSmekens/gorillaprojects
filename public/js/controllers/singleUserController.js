myApp.controller('userController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {
    // $scope.firstName = 'placehlder';
    console.log(`single user controller started`);
    // console.log(sessionStorage.getItem('token'));
    let params = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    };

var urlUser = baseUrl + "/users/"+ $routeParams.id + "/projects"

const getUserData = () => {
   return fetch(urlUser, params)
            .then(function (response) {
                return response.json();
                // console.log(response.json());
            })
            .then(function (myJson) {
                console.log("myJson data is:");
                console.log(myJson.data);
                // $scope.userfirstname = myJson.data.firstName;
                // $scope.userlastname = myJson.data.lastName;
                // $scope.useremail = myJson.data.email;
                // $scope.userrank = myJson.data.rights;
                // $scope.$apply();

            })
            .catch(function (error) {
                console.log(error)
            });
        }
        getUserData();

}]);