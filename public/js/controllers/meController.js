myApp.controller('meController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {

    // console.log(`projects controller started`);
    // console.log(sessionStorage.getItem('token'));
    $scope.email = "handmade email";
    $scope.firstName = "handmade firstname";


    let params = {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': sessionStorage.getItem('token')
        },
        method: 'GET'
    };
    // const getMyOwnData = () => {
       
    fetch(urlMe, params)
            .then(function (response) {
                return response.json();
                // console.log(response.json());
            })
            .then(function (myJson) {
                console.log("myJson data");
                console.log(myJson.data);
                return myJson.data;
                // console.log(myJson.data);
                // console.log($scope.firstName);

            })
            .catch(function (error) {
                console.log(error)
            });

    // }

    // console.log("userdata is:");
    // console.log($scope.userData);
    // const getMyData = function() {
    //     console.log(`get my data Started`);
    //     users.getMyData()
    //         .then((usersOutput) => {
    //             console.log(usersOutput.data);
    //             $scope.user = usersOutput.data.data;
    //             console.log(usersOutput.data.data);
    //         });
    // }
    // getMyData();
}]);