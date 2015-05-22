'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase', 'ngMessages']);

hireZen.controller('CandidatesController', function($scope, CandidatesStore) {
	$scope.candidates = CandidatesStore.getCandidates();

	$scope.teams = CandidatesStore.getTeams();
	$scope.statuses = CandidatesStore.getStatuses();

	$scope.selection = CandidatesStore.getSelection();

	$scope.select = function(candidate) {
		CandidatesStore.setSelectedCandidate(candidate);
	};

	$scope.filterTeam = function(team) {
		CandidatesStore.setSelectedTeam(team);
	};
});