myApp.controller('projectsController', ['$scope', 'users', '$routeParams', function($scope, users, $routeParams){

allUsersUrl = baseUrl + "/projects?embed=users"; //sort=name

const getUsers = function() {
    console.log(`getUsers Started`);
    users.getUsers(allUsersUrl)
        .then((usersOutput) => {
            // console.log(usersOutput.data);
            $scope.gorillas = usersOutput.data.data;
            $scope.users = usersOutput.data.data;
            console.log(usersOutput.data.data);
        });
}
getUsers(); 

   
    // rankBtn.addEventListener("select", sortProjectsByRank );
    var rankBtn = document.getElementById("rankSelect");  
    rankBtn.addEventListener("change", filterRank);

    // var nameBtn = document.getElementById("nameSelect");  
    // nameBtn.addEventListener("change", filterName);

   function filterRank () {
        var rankBtn = document.getElementById("rankSelect");
        var sort = rankBtn.value;
        // var name = "";
        var sortNamesUrl = baseUrl + "/projects?embed=user&sort="+sort;

        const getRank = function() {
            console.log(`getUsers Started`);
            users.getUsers(sortNamesUrl)
                .then((userOutput) => {
                    // console.log(usersOutput.data);
                    $scope.gorillas = userOutput.data.data;
                    console.log(userOutput.data.data);
                });
        }
		getRank();
    }

    // function filterName () {
    //     var nameBtn = document.getElementById("nameSelect");
    //     var name = nameBtn.value;
    //     var rank = "";
    //     var filterNameUrl = "http://192.168.2.13:8000/users?rank="+rank+"&name="+name;

    //     const getName = function() {
    //         console.log(`getUsers Started`);
    //         users.getUsers(filterNameUrl)
    //             .then((userOutput) => {
    //                 $scope.gorillas = userOutput.data.data;
    //                 // console.log(userOutput.data.data);
    //             });
    //     }
	// 	getName();
    // }
}]);
