/**
 * Created by prshanmu on 5/22/2015.
 */

hireZen.controller('ManageCandidatesController', function ($scope, ManageCandidatesStore) {
    $scope.candidates = ManageCandidatesStore.getCandidates();
    $scope.selection = ManageCandidatesStore.getSelection();

});