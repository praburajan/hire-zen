'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase', 'ngMessages']);

hireZen.controller('LoginController', ['$scope','UsersStore', '$location', '$rootScope', function ($scope, UsersStore, $location, $rootScope) {
	$scope.registerFlag = false;

    $scope.teams = UsersStore.getTeams();
    $scope.users = UsersStore.getUsers();

	$scope.register = function(email, password) {
        var user = {};
        user.email = email;
        user.password = password;
        var parts = UsersStore.resolveNamePartsFromEmail(email);
        //TODO: check for valid email
        user.firstName = parts[0];
        user.lastName = parts[1];
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
        $rootScope.loading = true;
        var user = {};
        user.email = email;
        user.password = password;
        //call UsersStore to authenticate user
        //returns a promise, handle success and failure
        UsersStore.authUser(user).then(function (authData) {
            $scope.authData = authData;
            //redirect to candidates page
            $location.path('/candidates');
            $rootScope.loading = false;
        }).catch(function (error) {
            console.error("Failed to authenticate user "+user.email+" due to error "+error);
            //TODO: show error message to user
            $scope.error = error;
            $rootScope.loading = false;
        });
    };
}]);