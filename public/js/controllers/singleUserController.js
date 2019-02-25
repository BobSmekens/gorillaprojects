myApp.controller('singlegorillaController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {
var singlegorillaUrl = baseUrl + "/users/" +$routeParams.id;
    // console.log(`projects controller started`);
    let params = {
        headers: {
            'Content-Type': 'application/json',

        },
        method: 'GET'
    };

const getMyOwnData = () => {
   return fetch(singlegorillaUrl, params)
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
                $scope.userspecialty = myJson.data.specialty;
                $scope.userhobbies = myJson.data.hobbies;
                $scope.$apply();

            })
            .catch(function (error) {
                console.log(error)
            });
        }
        getMyOwnData();

}]);