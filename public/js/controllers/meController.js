myApp.controller('meController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {

    // console.log(`projects controller started`);
    let params = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': sessionStorage.getItem('token')
        },
        method: 'GET'
    };

const getMyOwnData = () => {
   return fetch(urlMe, params)
            .then(function (response) {
                return response.json();
                // console.log(response.json());
            })
            .then(function (myJson) {
                console.log("myJson data is:");
                console.log(myJson.data);
                $scope.userfirstname = myJson.data.firstName;
                $scope.userlastname = myJson.data.lastName;
                $scope.useremail = myJson.data.email;
                $scope.userrank = myJson.data.rights;
                $scope.$apply();

            })
            .catch(function (error) {
                console.log(error)
            });
        }
        getMyOwnData();

}]);