myApp.controller('gorillasController', ['$scope', 'users', '$routeParams', function($scope, users, $routeParams){
    var namesBtn = document.getElementById("nameSelect");
    namesBtn.addEventListener("change", sortNames);
    var allUsersUrl = baseUrl + "/users"; //sort=name
    
    const getUsers = function() {
        console.log(`getUsers Started`);
        users.getUsers(allUsersUrl)
            .then((usersOutput) => {
                console.log(usersOutput.data);
                $scope.gorillas = usersOutput.data.data;
                $scope.users = usersOutput.data.data;
                console.log(usersOutput.data.data);
            });
    }
    getUsers(); 

    function sortNames () {
        var namesBtn = document.getElementById("nameSelect");
        var sort = namesBtn.value;
        // var name = "";
        var sortNamesUrl = baseUrl + "/users?sort=" + sort;

        const getNames = function() {
            console.log(`getUsers Started`);
            users.getUsers(sortNamesUrl)
                .then((userOutput) => {
                    // console.log(usersOutput.data);
                    $scope.gorillas = userOutput.data.data;
                    console.log(userOutput.data.data);
                });
        }
	    getNames();
    }

}]);
    