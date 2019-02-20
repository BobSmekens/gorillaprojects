myApp.controller('registerController', ['$scope', function ($scope) {
    var urlRegister = "http://192.168.2.13:8000/register";
    $scope.getUserInfo = function () {
        var firstname = $scope.firstname;
        var lastname = $scope.lastname;
        var email = $scope.email;
        var password = $scope.password;
        var pwconfirm = $scope.pwconfirm;
        console.log(firstname + lastname + email + password + pwconfirm);

        if(password === pwconfirm){

        let user = {
            email: email,
            passwordHash: password,
            firstName: firstname,
            lastName: lastname
            // foto: foto (string)
            // hobbies: hobbies (string)
            // city: city (string)
        }; //Register
        console.log(user);
        let newUser = JSON.stringify(user);
        console.log("strinified: "+newUser);
        let params = {
            headers: {
                'Content-Type': 'application/json'
                // 'x-access-token' : token
            },
            body: newUser,
            method: 'POST'
        };
        console.log(params);

        fetch(urlRegister, params)
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
            alert("passwords must match");
        }
    };
}]);