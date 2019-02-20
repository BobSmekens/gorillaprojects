myApp.controller('projectsController', ['$scope', 'users', '$routeParams', function($scope, users, $routeParams){
   
		console.log(`user controller started`);

        const getUsers = function() {
            console.log(`getUsers Started`);
            users.getUsers()
                .then((usersOutput) => {
                    // console.log(usersOutput.data);
                    $scope.gorillas = usersOutput.data.data;
                    console.log(usersOutput.data.data);
                });
        }
		getUsers();
	}
]);

// myApp.controller(`page2Controller`, [`$scope`, `users`, `$routeParams`,
// 	function($scope,
// 		users, $routeParams) {
// 		console.log(`user controller started`);

//         const getUsers = function() {
//             console.log(`getUsers Started`);
//             users.getUsers()
//                 .then((usersOutput) => {
//                     // console.log(usersOutput.data);
//                     $scope.gorillas = usersOutput.data.data;
//                     // console.log(usersOutput.data.data);
//                 });
//         }
// 		getUsers();
// 	}
// ]);