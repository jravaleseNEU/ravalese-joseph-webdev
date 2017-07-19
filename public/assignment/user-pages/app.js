/**
 * Created by ravalese on 7/17/17.
 */
var app = angular.module("WamApp",["ngRoute"])

app.controller("loginController", loginController);
app.controller("profileController", profileController);

app.config(configuration);

function congfiguration($routeProvider) {
    $routeProvider
        .when("/login", {
            templateURL: "login.html"})

        .when("/register", {
            templateURL: "register.html"})

        .when("/profile/:userId", {
            templateURL: "profile.html"})
}


function profileController($scope, $routeParams) {
    var userId = $routeParams.userId
    for (var u in users) {
        if (users[u]._id === userId) {
            $scope
        }
    }
}

function loginController($scope,$location) {

var users = [
    [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ]

]

    $scope.login = function (user) {

        for( var u in users) {
            var _user = users[u];
            if(_user.username === user.username && _user.password === user.password) {
                $location.url("profile/" + _user._id)
            }
        }
        $scope.errorMessage="error not found"
    }
}