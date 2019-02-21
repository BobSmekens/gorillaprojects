myApp.controller('loginController', ['$scope', function ($scope) {

    $scope.getLoginInfo = function () {
        var loginLink = document.getElementById("login");
        var email = $scope.email;
        var password = $scope.password;

        var urlLogin = baseUrl + "/login";

        let loginData = {
            email: email,
            password: password
        }; //login

        console.log(loginData);
        let login = JSON.stringify(loginData);
        console.log("strinified: " + login);
        let params = {
            headers: {
                'Content-Type': 'application/json'
                // 'x-access-token' : token
            },
            body: login,
            method: 'POST'
        };

        fetch(urlLogin, params)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                sessionStorage.setItem('token', myJson.token);
                sessionStorage.setItem('auth', 'true');
                // loginLink.style.display = "none";
                // logoutLink.style.display = "block";
                // meLink.style.display = "block";
                // registerLink.style.display = "none";

                 window.location.href = "/";
                // console.log(sessionStorage.getItem('token'));
            })
            .catch(function (error) {
                console.log(error);
            })

    };
}]);