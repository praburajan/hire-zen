hireZen.controller('CandidatesFilterController', [$scope, function($scope) {
	$scope.teams = ["All","Workspace","Composer","Foundation Services","Human Workflow","Cloud OPS"];
	$scope.managers = ["All","Prabu","Magesh","Mahesh Rao","Sri Krishan","Kapil","Krishna"];
	$scope.statuses = ["All","In Progress","Offer Approval","Offered","Rejected"];

	$scope.selectedTeam = "All";
	$scope.selectedManager = "All";
	$scope.selectedStatus = "All";

	$scope.filterManager = function(manager) {
		this.selectedManager = manager;
	}.bind($scope);

	$scope.filterTeam = function(team) {
		this.selectedTeam = team;
	}.bind($scope);

}]);