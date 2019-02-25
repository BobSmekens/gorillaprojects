myApp.controller('meController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {
    var urlMeProjects = baseUrl +"/users/5c6ac30185abb5252cd22db0/projects";
    // users/userID/projects
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
                $scope.userspecialty = myJson.data.specialty;
                $scope.userhobbies = myJson.data.hobbies;
                $scope.$apply();

            })
            .catch(function (error) {
                console.log(error)
            });
    }
    getMyOwnData();
    
    const getMyOwnProjects = () => {
        return fetch(urlMeProjects, params)
            .then(function (response) {
                console.log(response.json());
                return response.json();
                
            })
            .then(function (myJson) {
                console.log("get my own projects data is:");
                console.log(myJson.data);

                // $scope.meproject = myJson.data.firstName;
                // $scope.meprojectname = myJson.data.lastName;
                // $scope.useremail = myJson.data.email;
                // $scope.userrank = myJson.data.rights;
                // $scope.userspecialty = myJson.data.specialty;
                // $scope.userhobbies = myJson.data.hobbies;
                // $scope.$apply();

            })
            .catch(function (error) {
                console.log(error)
            });
    }
    getMyOwnProjects();

}]);