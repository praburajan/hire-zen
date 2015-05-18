var hireZen = angular.module('hireZen', ['ngRoute']);

hireZen.controller('MainController', function ($scope) {
	$scope.userInfo = {
		userName : "Prabu Rajan",
		userEmail : "prabu.rajan@gmail.com",
		team : "Workspace"
	};
});

hireZen.config(function ($routeProvider) {
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
	}).otherwise({ redirectTo: '/candidates' });
});

hireZen.directive('header', [function () {
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
		link: function (scope, iElement, iAttrs) {
			scope.appLabel = iAttrs.applabel;
			scope.appIcon = iAttrs.appicon;
		}
	};
}]);

hireZen.controller('CandidatesController', ['$scope', function ($scope) {
	$scope.candidates = [{
		name: "Naresh Kumar",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Dinesh Karthik",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Zaheer Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Shikhar Dawan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Virender Sehwag",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Andrea",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Sridevi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Salman Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Aamir Khan",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Ranbhir Kapoor",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Virath Kohli",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "MS Dhoni",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Trisha",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Michael Jackson",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	},
	{
		name: "Narendra Modi",
		description: "Skills : HTML, CSS, Angular, Java  Applied : 20 Mar, 2015"
	}];

	$scope.teams = ["All","Workspace","Composer","Foundation Services","Human Workflow","Cloud OPS"];
	$scope.managers = ["All","Prabu","Magesh","Mahesh Rao","Sri Krishan","Kapil","Krishna"];
	$scope.statuses = ["All","In Progress","Offer Approval","Offered","Rejected"];
	
	$scope.filterByTeam = "All";
	$scope.filterByManager = "All";

	$scope.select = function(candidate) {
		candidate.selected = true;
		this.candidates.forEach(function(elem, index, arr) {
			if(elem.name !== candidate.name) {
				elem.selected = false;			}
		});
	}.bind($scope);

	$scope.filterManager = function(manager) {
		this.filterByManager = manager;
	}.bind($scope);

	$scope.filterTeam = function(team) {
		this.filterByTeam = team;
	}.bind($scope);
}]);

hireZen.controller('RequirementsController', ['$scope', function ($scope) {
	$scope.requirements = [];
}]);