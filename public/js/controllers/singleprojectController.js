myApp.controller('singleprojectController', ['$scope', 'users', '$routeParams', function ($scope, users, $routeParams) {
    var singleprojectUrl = baseUrl + "/projects/" +$routeParams.projectId;
        // console.log(`projects controller started`);
        let params = {
            headers: {
                'Content-Type': 'application/json',
    
            },
            method: 'GET'
        };
    
    const getProjectData = () => {
       return fetch(singleprojectUrl, params)
                .then(function (response) {
                    return response.json();
                    // console.log(response.json());
                })
                .then(function (myJson) {
                    console.log("myJson data is:");
                    console.log(myJson.data);
                    $scope.projectName = myJson.data.name;
                    $scope.projectGithub = myJson.data.github;
                    $scope.projectSite = myJson.data.site;
                    $scope.projectLanguages = myJson.data.programmingLanguages;
                    $scope.projectTime = myJson.data.projectTime;
                    $scope.$apply();
    
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
            getProjectData();
    
    }]);