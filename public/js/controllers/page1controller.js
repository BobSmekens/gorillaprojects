// controller is used for all logic, can define variables usable within the ScopedCredential, or objects, or calculations ...
myApp.controller('page1Controller', ['$scope', function($scope){
    $scope.users = [
    {
        firstname: "bob",
        lastname: "smekens",
        yellName: function() {
            return "i am " + this.firstname + "the mighty!!!";
        }
    },
    {
        firstname: "aron",
        lastname: "beer",
        yellName: function() {
            return "i am " + this.firstname + "the mighty!!!";
        }
    },
    {
        firstname: "priscilla",
        lastname: "kamp",
        yellName: function() {
            return "i am " + this.firstname + "the mighty!!!";
        }
    }
    ]
    
}]);