'use strict';
var hireZen = angular.module('hireZen', ['ngRoute']);

hireZen.controller('MainController', function($scope) {
	$scope.userInfo = {
		userName: 'Prabu Rajan',
		userEmail: 'prabu.rajan@gmail.com',
		team: "Workspace"
	};
});

hireZen.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	}).when('/', {
		templateUrl: 'templates/candidates.html',
		controller: 'CandidatesController'
	}).
	when('/candidates', {
		templateUrl: 'templates/candidates.html',
		controller: 'CandidatesController'
	}).when('/requirements', {
		templateUrl: 'templates/requirements.html',
		controller: 'RequirementsController'
	}).otherwise({
		redirectTo: '/candidates'
	});
});

hireZen.directive('header', [function() {
	return {
		restrict: 'AE',
		templateUrl: 'templates/header.html',
		// controller: function('HeaderController', function ($scope) {
		// 	$scope.logout = function() {
		// 		$rootScope.userInfo = {};
		// 		//$location.path('login');
		// 	},
		// 	$scope.gotoRegister = function() {
		// 		$rootScope.userInfo = {};
		// 		//$location.path('register');
		// 	}
		// }),
		link: function(scope, iElement, iAttrs) {
			scope.appLabel = iAttrs.applabel;
			scope.appIcon = iAttrs.appicon;
		}
	};
}]);


hireZen.controller('RequirementsController', ['$scope', function($scope) {
	$scope.requirements = [];
}]);