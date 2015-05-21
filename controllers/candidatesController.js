hireZen.controller('CandidatesController', function($scope, CandidatesStore) {
	$scope.candidates = CandidatesStore.getCandidates();

	$scope.teams = CandidatesStore.getTeams();
	$scope.managers = CandidatesStore.getManagers();
	$scope.statuses = CandidatesStore.getStatuses();

	$scope.selection = CandidatesStore.getSelection();

	$scope.select = function(candidate) {
		candidate.selected = true;
		this.candidates.forEach(function(elem, index, arr) {
			if (elem.name !== candidate.name) {
				elem.selected = false;
			}
		});
	}.bind($scope);

	$scope.filterManager = function(manager) {
		CandidatesStore.setSelectedManager(manager);
	};

	$scope.filterTeam = function(team) {
		CandidatesStore.setSelectedTeam(team);
	};
});