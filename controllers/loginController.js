'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase', 'ngMessages']);

hireZen.controller('LoginController', ['$scope','UsersStore', '$location', function ($scope, UsersStore, $location) {
	$scope.registerFlag = false;

    $scope.teams = UsersStore.getTeams();
    $scope.users = UsersStore.getUsers();

	$scope.register = function(email, password) {
        var user = {};
        user.email = email;
        user.password = password;
        if(!email || email.length ===  0 || email.indexOf('@') === -1) {
            //TODO: show an error message here using ngMessage, but this wont be necessary if we implement required field
            return;
        }
        //Split email id to form first name and last name - only caters to oracle email ids
        //TODO: need to make this logic generic or enhance register form to include first name and last name
        var prefix = email.indexOf('@') > -1 ? email.substring(0,email.indexOf('@')) : email;
        var parts = prefix.split('.');
        if(parts.length > 1) {
            //deriving first and last names from email id and capitalizing the first letters
            user.firstName = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
            user.lastName = parts[parts.length-1].charAt(0).toUpperCase() + parts[parts.length-1].slice(1);
        }
        else {
            //if there were no dots, then assume first name as the whole prefix
            user.firstName = parts[0];
        }
        //use firebase authentication to add new users, then authenticate using email id and password and also add the
        // same user to user profile collection in the backend
        UsersStore.addUser(user).then(function (payload) {
            $scope.authData = payload.authData;
            $scope.userData = payload.userData;
        }).catch(function (error) {
            //TODO: show error message
            $scope.error = error;
            console.error(error);
        });
	};

    $scope.login = function(email, password) {
        console.log('Login called');
        var user = {};
        user.email = email;
        user.password = password;
        //call UsersStore to authenticate user
        //returns a promise, handle success and failure
        UsersStore.authUser(user).then(function (authData) {
            $scope.authData = authData;
            //redirect to candidates page
            $location.path('/candidates');
        }).catch(function (error) {
            console.error("Failed to authenticate user "+user.email+" due to error "+error);
            //TODO: show error message to user
            $scope.error = error;
        });
    };
}]);