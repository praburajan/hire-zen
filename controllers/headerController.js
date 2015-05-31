/**
 * Created by praburajan on 23/05/15.
 */
'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase', 'ngMessages']);

hireZen.controller('HeaderController', ['$scope','$location','UsersStore',function ($scope, $location, UsersStore) {

    //To show the header navigation links as active depending on the current path
    $scope.isActive = function (route) {
        return $location.path() === route;
    };

    //Store authData from UsersStore after login to disable links
    $scope.isAuthenticated = function () {
        return UsersStore.isAuthenticated();
    };

    $scope.getUserData = function () {
        return UsersStore.authData;
    };

    $scope.logout = function () {
        UsersStore.logout();
        $location.path('/login');
    };

}]);