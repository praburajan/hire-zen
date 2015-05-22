'use strict';
var hireZen = angular.module('hireZen', ['ngRoute','firebase', 'ngMessages']);

hireZen.constant('FIREBASE_URL','https://hire-zen.firebaseio.com');

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
	}).when('/manage/candidates', {
		templateUrl: 'templates/manage-candidates.html',
		controller: 'ManageCandidatesController'
	}).when('/manage/positions', {
		templateUrl: 'templates/manage-positions.html',
		controller: 'ManagePositionsController'
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