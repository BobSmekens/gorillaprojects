myApp.controller('addprojectController', ['$scope', function ($scope) {
    var urlAddProject = baseUrl + "/projects";
    console.log(sessionStorage.getItem('auth'));

    $scope.getProject = function () {
        var name = $scope.name;
        var github = $scope.github;
        var site = $scope.site;
        var programmingLanguages = $scope.language;
        var projectTime = $scope.time;
        // console.log(firstname + lastname + email + password + pwconfirm);
        // name: string
        // github: string
        // site: string
        // programmingLanguages: Array (Can be put as string as long as you seperate with , )
        // projectTime: String (1 day, 1 week, etc)
        
        if(sessionStorage.getItem('auth') == 'true'){

        let project = {
            name: name,
            github: github,
            site: site,
            programmingLanguages: programmingLanguages,
            projectTime: projectTime

        }; //add project
        console.log(project);
        let addProject = JSON.stringify(project);
        console.log("strinified: ", addProject);
        let params = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('token')
            },
            body: addProject,
            method: 'POST'
        };
        // console.log(params);

        fetch(urlAddProject, params)
        .then(function(response) {
            return response.json();
          })
          .then(function(myJson) {
            console.log(JSON.stringify(myJson));
            
          })
		    .catch(function(error) {
				console.log(error);
            })
        } else {
            alert("must log in to post projects");
        }
    };
}]);