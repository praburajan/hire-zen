/**
 * Created by prshanmu on 5/22/2015.
 */

'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase', 'ngMessages']);

hireZen.controller('ManageCandidatesController', function ($scope, ManageCandidatesStore) {
    $scope.candidates = ManageCandidatesStore.getCandidates();
    $scope.selection = ManageCandidatesStore.getSelection();

});